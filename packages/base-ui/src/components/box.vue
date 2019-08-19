<style lang="scss">
  .h-box {
    position: relative;
    box-sizing: border-box;
    height: auto;
    /*flex-basis: auto;*/
  }
</style>
<template>
  <div class="h-box" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'HBox',
    props: {
      width: {
        type: String,
        default: 'auto'
      },
      flex: {
        type: Number,
        default: 1
      },
      space: {
        type: Number,
        default: 5
      },
      spaceY: {
        type: Number,
        default: 5
      },
      spaceX: {
        type: Number,
        default: 5
      },
      spaceT: {
        type: Number,
        default: 5
      },
      spaceB: {
        type: Number,
        default: 5
      },
      spaceL: {
        type: Number,
        default: 5
      },
      spaceR: {
        type: Number,
        default: 5
      }
    },
    computed: {
      styles () {
        return {
          flex: this.flex,
          // flexGrow: this.flex,
          // flexShrink: this.flex,
          width: this.width,
          padding: `${this.space}px`
        }
      },
      classes () {
        return {

        }
      }
    }
  }
</script>
