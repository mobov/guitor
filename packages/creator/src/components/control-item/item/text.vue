<style lang='scss'>

</style>
<template>
  <div class="control-item-text">
    <el-input v-model="_value" size="small">

    </el-input>
  </div>
</template>
<script>
export default {
  name: 'control-item-text',
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
