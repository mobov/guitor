<script lang="jsx">
  import Sortable from 'sortablejs'
  import { renderComponent, renderComponentChildren } from './render'
  import { createNamespacedHelpers } from 'vuex'

  const { mapGetters, mapState, mapMutations, mapActions } = createNamespacedHelpers('project')

  const SuitsHandlerDirections = [
    '↑',
    '←', '→',
    '↓'
  ]

  let previewDrag = false

  export default {
    name: 'comp-suit',
    props: {
      uid: {
        type: String
      },
      node: {
        type: Object
      }
    },
    data () {
      return {
        $sortable: null,
        isOver: false,
        isDragging: false
      }
    },
    computed: {
      ...mapState([
        'activeUid'
      ]),
      ...mapGetters([
        'activeNode'
      ]),
      classes () {
        return {
          'comp-suit': true,
          '--active': this.isActive,
          '--over': this.isOver,
          '--isContainer': this.isContainer,
          '--isNoMask': this.isNoMask,
          '--isLocked': this.isLocked
        }
      },
      nodeUid () {
        return this.node.uid
      },
      isRoot () {
        return this.nodeUid === 'root'
      },
      isContainer () {
        return this.node.uiConfig.isContainer
      },
      isNoMask () {
        return this.node.uiConfig.isNoMask !== undefined ? this.node.uiConfig.isNoMask : false
      },
      isActive () {
        return this.activeUid === this.nodeUid
      },
      isLocked () {
        return this.node.uiConfig.isLocked
      }
    },
    methods: {
      ...mapActions([
        'sortNode',
        'insertComponent',
        'insertTemplate'
      ]),
      ...mapMutations([
        'SET_ACTIVE_NODE'
      ]),
      initSuits () {
        // 组件边框
        SuitsHandlerDirections.forEach(direction => {
          const $dom = document.createElement('div')
          $dom.classList.add('comp-suit-handler')
          $dom.classList.add(`--${direction}`)
          this.$el.appendChild($dom)
        })
        // 组件遮罩
        const $dom = document.createElement('div')
        $dom.classList.add('comp-suit-mask')
        this.$el.appendChild($dom)
      },
      init () {
        this.initSuits()
        const $sortContainer = this.node.name === 'HView' ? this.$el.children[0] : this.$el

        this.$sortable = new Sortable($sortContainer, {
          group: this.nodeUid,
          draggable: '.comp-suit',
          // sort: false,
          // Element is dropped into the list from another list
          // Changed sorting within list
          // onUpdate: this.handleDragUpdate,
          onSort: this.handleDragSort
        })
      },
      handleDragSort (e) {
        console.log(this.node.pid)
        console.log(e.oldDraggableIndex)
        console.log(e.newDraggableIndex)
        if (this.node.pid) {
          this.sortNode({
            id: this.node.uid,
            oldIndex: e.oldDraggableIndex,
            newIndex: e.newDraggableIndex
          })
        }
      },
      handleActive (e) {
        this.SET_ACTIVE_NODE(this.nodeUid)
        e.stopPropagation()
      },
      handleDragStart (e) {
        previewDrag = true
      },
      handleDragEnd (e) {
        previewDrag = false
      },
      handleDragOver (e) {
        if (!previewDrag && this.isContainer) {
          if (!this.isActive) {
            this.SET_ACTIVE_NODE(this.nodeUid)
          }
          e.stopPropagation()
        }
      },
      async handleInsertComponent (val) {
        if (this.activeNode.uiConfig.isLocked) {
          return
        }
        const result = await this.insertComponent({
          ...val,
          pid: this.activeUid
        })
        if (!result.status) {
          this.$message.error(result.msg)
        }
      },
      handleInsertTemplate (val) {
        if (this.activeNode.uiConfig.isLocked) {
          return
        }
        this.insertTemplate({
          ...val,
          pid: this.activeUid
        })
      },
      RChildren (h) {
        console.log(this.node)
        if (this.node.uiConfig.isContainer) {
          return this.node.children ? renderComponent(h, this.node.children) : []
        } else if (typeof this.node.children === 'string') {
          return [h('span', {
            domProps: {
              innerText: this.node.children
            }
          })]
        } else {
          return this.node.children ? renderComponentChildren(h, this.node.children) : []
        }
      },
      addSuitListeners () {
        // document.addEventListener('mousemove', this.handleMouseMove)
        // document.addEventListener('mouseup', this.handleMouseUp)
        this.$el.addEventListener('mousedown', this.handleActive)
        if (this.isContainer) {
          this.$el.addEventListener('dragover', this.handleDragOver)
        }
        if (this.isRoot) {
          this.$el.addEventListener('dragstart', this.handleDragStart)
          this.$el.addEventListener('dragend', this.handleDragEnd)
          this.eventBus.$on('insertComponent', this.handleInsertComponent)
          this.eventBus.$on('insertTemplate', this.handleInsertTemplate)
        }
        // this.$el.addEventListener('dragleave', this.handleDragLeave)
      },
      removeSuitListeners () {
        // document.removeEventListener('mousemove', this.handleMouseMove)
        // document.removeEventListener('mouseup', this.handleMouseUp)
        this.$el.removeEventListener('mousedown', this.handleMouseDown)
        if (this.isContainer) {
          this.$el.removeEventListener('dragover', this.handleDragOver)
        }
        if (this.isRoot) {
          this.$el.removeEventListener('dragstart', this.handleDragStart)
          this.$el.removeEventListener('dragend', this.handleDragEnd)
          this.eventBus.$off('insertComponent', this.handleInsertComponent)
          this.eventBus.$off('insertTemplate', this.handleInsertTemplate)
        }
        // this.$el.removeEventListener('dragleave', this.handleDragLeave)
      }
    },
    mounted () {
      this.init()
      this.addSuitListeners()
    },
    beforeDestroy () {
      this.removeSuitListeners()
    },
    render (h) {
      const classes = {
        [`uid-${this.node.uid}`]: true,
        ...this.classes
      }
      // this.node.nodeData.directives = [
      //   {
      //     name: 'drag-ani'
      //   }
      // ]
      if (this.node.uiConfig.isContainer) {
        this.node.nodeData.class = this.node.nodeData.class ? {
          ...this.node.nodeData.class,
          ...this.classes
        } : classes

        return h(
          this.node.tag,
          this.node.nodeData,
          this.RChildren(h)
        )
      } else if (this.node.uiConfig.isBoxWrap) {
        return h(
          'HBox',
          {
            'class': classes,
            props: this.node.boxConfig
          },
          [
            h(
              this.node.tag,
              this.node.nodeData,
              this.RChildren(h)
            )
          ]
        )
      } else {
        this.node.nodeData.class = this.node.nodeData.class ? {
          ...this.node.nodeData.class,
          ...this.classes
        } : classes
        return  h(
          this.node.tag,
          this.node.nodeData,
          this.RChildren(h)
        )
      }
    }
  }
</script>
<style lang="scss">
  @import "~@mobov/scss-helper/import";
  // $--element-active-color: #ffd0a3;
  $--comp-suit-handler-color-normal: #03a9f4;
  $--comp-suit-handler-color-locked: #ffa365;
  $--comp-suit-handler-color-over: #ffa365;
  $--comp-suit-handler-pos-fix: 0;
  $--comp-suit-handler-size: 2px;
  $--comp-suit-handler-position: 0;
  $--comp-suit-handler-corner-size: 10px;
  // $--comp-suit-select-border-size: 2px;

  .comp-suit {
    --comp-suit-handler-color: #{$--comp-suit-handler-color-normal};
    --comp-suit-handler-scale: .5;
    user-select: none;
    // pointer-events: none;
    box-sizing: border-box;
    position: relative;
    transform: translate3d(0, 0, 0);

    &.--hover,
    &.--active {
      z-index: 99;
      /*border-width: 0 !important;*/
      > .comp-suit-handler {
        background-color: var(--comp-suit-handler-color);
        /*transition: transform ease .3s;*/
        position: absolute;
      }

      > .--↑,
      > .--→,
      > .--↓,
      > .--← {
        z-index: 100;
      }

      > .--↑,
      > .--↓ {
        height: $--comp-suit-handler-size;
        width: 100%;
        left: $--comp-suit-handler-position;
      }

      > .--→,
      > .--← {
        width: $--comp-suit-handler-size;
        height: 100%;
        top: $--comp-suit-handler-position;
      }

      > .--↑ {
        top: $--comp-suit-handler-position;
      }

      > .--↓ {
        bottom: $--comp-suit-handler-position;
      }

      > .--← {
        left: $--comp-suit-handler-position;
      }

      > .--→ {
        right: $--comp-suit-handler-position;
      }
    }

    &.--isContainer {
      border: 1px dashed rgba(0, 0, 0, .5);
      /*box-sizing: border-box !important;*/
      /*box-shadow: 0 0 1px 1px rgba(0,0,0,.5) ;*/
      > .comp-suit-mask {
        display: none;
      }
    }

    &.--isNoMask {
      > .comp-suit-mask {
        display: none;
      }
    }

    &.--isLocked {
      --comp-suit-handler-color: #{$--comp-suit-handler-color-locked};
      > .comp-suit-mask {
        display: block;
      }
    }

    .comp-suit-mask {
      /*visibility: hidden;*/
      background-color: transparent;
      cursor: grab;
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }
  }

  .previewer {
    &:hover {
      .comp-suit {
        --comp-suit-handler-scale: 1
      }
    }
  }

  /*.comp-suit-axis {*/
  /*width: 1px;*/
  /*height: 100vh;*/
  /*position: absolute;*/
  /*background-color: var(--comp-suit-handler-color);*/
  /*}*/

</style>
