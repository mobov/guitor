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
  import { getSpaceVal } from '../core/utils'

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
        type: [String, Number],
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
          padding: getSpaceVal(this.space)
        }
      },
      classes () {
        return {

        }
      }
    }
  }
</script>
