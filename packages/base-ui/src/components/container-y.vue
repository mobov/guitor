<style lang="scss">
  .h-container-y {
    display: flex;
    position: relative;
    box-sizing: border-box;
    /*flex-basis: auto;*/
    /*width: 100%;*/
    /*height: 100%;*/
    width: 100%;
    height: auto;
    flex-wrap: nowrap;
    flex-direction: column;
    &.--justify-start {
      justify-content: flex-start;
    }
    &.--justify-center  {
      justify-content: center;
    }
    &.--justify-end  {
      justify-content: flex-end;
    }
    &.--justify-around  {
      justify-content: space-around;
    }
    &.--justify-between  {
      justify-content: space-between;
    }
    &.--align-start {
      align-items: flex-start;
    }
    &.--align-center  {
      align-items: center;
    }
    &.--align-end  {
      align-items: flex-end;
    }
    &.--align-stretch  {
      align-items: stretch;
    }
  }
</style>
<template>
  <div class="h-container-y" :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import { getSpaceVal } from '../core/utils'

export default {
  name: 'HContainerY',
  props: {
    flex: {
      type: Number,
      default: 1
    },
    space: {
      type: [String, Number],
      default: 5
    },
    wrap: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'center' // start / center / end / stretch
    },
    justify: {
      type: String,
      default: 'center' // start / center / end / between / around
    }
  },
  computed: {
    styles () {
      return {
        // flexGrow: this.flex,
        // flexShrink: this.flex,
        flex: this.flex,
        padding: getSpaceVal(this.space)
      }
    },
    classes () {
      return {
        [`--align-${this.align}`]: true,
        [`--justify-${this.justify}`]: true
      }
    }
  }
}
</script>
