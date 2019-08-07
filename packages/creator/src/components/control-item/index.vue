<style lang="scss">
  .control-item {
    display: inline-block;
    .control-item-label {
      color: #919191;
      margin-bottom: 10px;
    }
    width: 100%;
    &.--size,
    &.--number,
    &.--color,
    &.--switch {
      width: 50%;
    }
  }
</style>
<template>
  <div class="control-item" :class="classes">
    <div class="control-item-label">{{label}}</div>
    <component :is="item" v-model="_value" :config="config"></component>
  </div>
</template>
<script>

export default {
  name: 'control-item',
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    label: {
      type: String,
      default: '标题'
    },
    type: {
      type: String,
      default: 'text'
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (val) {
        console.log(this.value === val)
        if (this.value !== val) {
          this.$emit('input', val)
        }
      }
    },
    item () {
      return require(`@/components/control-item/item/${this.type}.vue`).default
    },
    classes () {
      return {
        [`--${this.type}`]: true
      }
    }
  }
}
</script>
