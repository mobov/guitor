<style lang="scss">
  @import "../../../../node_modules/@mobov/scss-helper/import";
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
