<style lang="scss">
  .h-box {
    display: flex;
    position: relative;
    /*width: 100%;*/
    /*height: 100%;*/
    width: auto;
    height: auto;
    flex-wrap: nowrap;
    &.--wrap {
      flex-wrap: wrap;
    }
    &.--direction-x {
      flex-direction: row;
    }
    &.--direction-y {
      flex-direction: column;
    }
    &.--justify-start {
      justify-content: flex-start;
    }
    &.--justify-center  {
      justify-content: center;
    }
    &.--justify-end  {
      justify-content: flex-end;
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
    direction: {
      type: String,
      default: 'y' // x / y
    },
    flex: {
      type: Number,
      default: 1
    },
    wrap: {
      type: Boolean,
      default: false // start / center / end
    },
    align: {
      type: String,
      default: 'center' // start / center / end
    },
    justify: {
      type: String,
      default: 'center' // start / center / end
    }
  },
  computed: {
    styles () {
      return {
        flex: this.flex
      }
    },
    classes () {
      return {
        [`--wrap`]: this.wrap,
        [`--direction-${this.direction}`]: true,
        [`--align-${this.align}`]: true,
        [`--justify-${this.justify}`]: true
      }
    }
  }

}
</script>
