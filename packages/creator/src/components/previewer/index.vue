<style lang='scss'>
  @import "~@mobov/scss-helper/import";
  $--previewer-cursor-select: url('../../assets/select.png'), auto;
  $--previewer-cursor-draw: url('../../assets/draw.png'), auto;
  .previewer {
    padding: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    .tool-bar {
      margin-bottom: 30px;
    }
    .previewer-screen {
      height: 80vh;
      /*border: 5px solid #9fa3a8;*/
      background-color: #090a0d;
      padding: 8px;
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: var(--m-elevation-2);
      /*box-shadow: 0 0 0 7px #090a0d, 0 0 0 10px #9fa3a8, 0 0 17px 10px rgba(0,0,0,0.2);*/
      margin: 0;
      overflow: hidden;
      position: relative;
      z-index: 1;
      cursor: $--previewer-cursor-select;
      &.--on-select {
        cursor: $--previewer-cursor-select;
      }
      &.--on-draw {
        cursor: $--previewer-cursor-draw;
      }
      &.--mode-pc {
        width: 90%;
      }
      &.--mode-mobile {
        width: 480px;
      }
    }
    .previewer-screen-main {
      font-size: 10px;
      height: 100%;
      width: 100%;
      background-color: white;
      /*height: inherit;*/
      /*width: inherit;*/
      /*max-width: inherit;*/
      /*min-width: inherit;*/
      @include scroller();
      @include no-scroll-bar();
    }

    a, iframe {
      pointer-events: none;
    }
  }
</style>
<script lang="jsx">
  import CompSuit from './comp-suit.vue'
  import { renderComponent } from './render'
  import { createNamespacedHelpers } from 'vuex'
  import ToolBar from '../tool-bar/index'

  const { mapGetters, mapState } = createNamespacedHelpers('previewer')

  export default {
    name: 'previewer',
    components: { ToolBar, CompSuit },
    computed: {
      ...mapState([
        'mode'
      ]),
      ...mapGetters([
        'width',
        'height',
        'UiNodes'
      ]),
      screenClasses () {
        return {
          [`--mode-${this.mode}`]: true
        }
      },
      screenStyles () {
        return {
          // height: `${this.height}px`,
          // width: `${this.width}px`
        }
      }
    },
    methods: {
      handleClick (e) {
        e.stopPropagation()
      }
    },
    render (h) {
      const { screenStyles, screenClasses, handleClick } = this

      return (
        <div class="previewer">
          <ToolBar />
          <div staticClass="previewer-screen" style={screenStyles} class={screenClasses}>
            <div ref="$screen" staticClass="previewer-screen-main" onClick={handleClick}>
                {renderComponent(h, this.UiNodes)}
            </div>
          </div>
        </div>
      )
    },
    mounted () {
    }
  }
</script>
