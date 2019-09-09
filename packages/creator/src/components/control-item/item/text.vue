<style lang='scss'>

</style>
<template>
  <div class="control-item-text">
    <el-input v-model="_value" size="small" @onChange="handleChange">

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
        console.log(this.value)
        return this.value
      },
      set (val) {
        console.log(val)
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleChange () {
      this.$emit('change', this._value)
    }
  }
}
</script>
