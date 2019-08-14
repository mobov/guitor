<style lang="scss">
  /**
 * 滚动容器
 */
  @mixin scroller($dir:y){
    @if($dir == y){
      overflow: auto;
      overflow-x: hidden;
    } @else {
      overflow-x: auto;
      overflow-y: hidden;
    }
    -webkit-overflow-scrolling: touch;
    transform: translateZ(0);
  }
  /**
	 * 隐藏滚动条
	 */
  @mixin no-scroll-bar(){
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  /**
	 * slim bar样式滚动条
	 */
  @mixin slim-scroll-bar(
    $direction : y,
		$size: 7px,
		$bgColor:#a6a6a6,
		$color:#e5e5e5
  ){
    &::-webkit-scrollbar-thumb {
      background-color: $bgColor;
    }
    &::-webkit-scrollbar-track {
      background-color: $color;
    }
    @if ($direction == y) {
      &::-webkit-scrollbar {
        width: $size;
      }
      &::-webkit-scrollbar-thumb {
        border-left: 2px solid transparent;
      }
      &l::-webkit-scrollbar-track {
        border-left: 2px solid transparent;
      }
    }  @else if ($direction == x) {
      &::-webkit-scrollbar {
        height: $size;
      }
      &::-webkit-scrollbar-thumb {
        border-top: 2px solid transparent;
      }
      &::-webkit-scrollbar-track {
        border-top: 2px solid transparent;
      }
    } @else {
      &::-webkit-scrollbar {
        width: $size;
        height: $size;
      }
      &::-webkit-scrollbar-thumb {
        border-left: 2px solid transparent;
        border-top: 2px solid transparent;
      }
      &l::-webkit-scrollbar-track {
        border-left: 2px solid transparent;
        border-top: 2px solid transparent;
      }
    }
  }

  .h-view {
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    position: relative;
    .h-view-main {
      height: 100%;
      width: 100%;
      overflow: auto;
      @include slim-scroll-bar();
    }
    &.--direction-x {
      flex-direction: row;
    }
    &.--direction-y {
      flex-direction: column;
    }
  }
</style>
<template>
  <div class="h-view" :class="classes" :style="styles">
    <section ref="main" class="h-view-main" :style="mainStyles">
      <slot></slot>
    </section>
  </div>
</template>
<script>

export default {
  name: 'HView',
  props: {
    direction: {
      type: String,
      default: 'y' // x / y / xy
    },
    flex: {
      type: Number,
      default: 1
    },
    space: {
      type: Number,
      default: 5
    }
  },
  computed: {
    styles () {
      return {
        flex: this.flex
      }
    },
    mainStyles () {
      return {
        padding: `${this.space}px`
      }
    },
    classes () {
      return {
        [`--direction-${this.direction}`]: true
      }
    }
  }
}
</script>
