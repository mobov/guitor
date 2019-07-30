<style lang='scss'>

</style>
<template>
  <div class="control-item-link">
    <el-input v-model="_value" size="small"></el-input>
  </div>
</template>
<script>
export default {
  name: 'control-item-link',
  props: {
    value: {
      type: String,
      default: ''
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
  }
}
</script>
