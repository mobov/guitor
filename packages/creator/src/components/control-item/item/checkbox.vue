<style lang='scss'>
</style>
<template>
  <div class="control-item-checkbox">
    <m-checkbox v-for="selection in config.selections"
             :key="selection.value"
             v-model="_value"
              @input="handleChange"
             marginRight="sm"
             :label="selection.value">
      {{selection.label}}
    </m-checkbox>
  </div>
</template>
<script>

export default {
  name: 'control-item-checkbox',
  props: {
    value: {
      type: [String, Number, Boolean]
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
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>
