<template>
  <div class="component-item"
       @dragstart="handleDragStart"
       @drag="handleDrag"
       @dblclick="handleInsert"
       v-drag-ani>
    {{ value.label || value.name }}
  </div>
</template>
<script>
  export default {
    name: 'component-item',
    props: {
      type: {
        type: String,
        default: 'component' //  component/ template
      },
      value: {
        type: Object
      }
    },
    data () {
      return {
        isDragging: false
      }
    },
    computed: {
      classes () {
        return {
          '--dragging': this.isDragging
        }
      }
    },
    methods: {
      handleMouseUp (e) {
        console.log(e)
      },
      handleDragStart () {
        this.isDragging = true
      },
      handleDrag (e) {
      //  console.log(e)
      },
      handleDragEnd (e) {
        if (this.isDragging) {
          this.handleInsert()
          this.isDragging = false
        }
      },
      handleInsert () {
        const evtName = this.type === 'component' ? 'insertComponent' : 'insertTemplate'
        this.eventBus.$emit(evtName, {
          name: this.value.name
        })
      }
    },
    mounted () {
      document.addEventListener('dragend', this.handleDragEnd)
      // document.addEventListener('mousemove', this.handleMouseMove)
      // document.addEventListener('mouseup', this.handleMouseUp)
    },
    beforeDestroy () {
      document.removeEventListener('dragend', this.handleDragEnd)
      // document.removeEventListener('mousemove', this.handleMouseMove)
      // document.removeEventListener('mouseup', this.handleMouseUp)
    }
  }
</script>
<style lang="scss">
  .component-item {
    cursor: auto;
    width: 100%;
    height: 80px;
    border: var(--m-border-base);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
    &.--dragging {
      cursor: grab;
    }
  }
</style>
