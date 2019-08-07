<style lang='scss'>
</style>
<template>
  <div class="control-item-switch">
    <el-switch
      v-model="_value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
  </div>
</template>
<script>

  export default {
    name: 'control-item-switch',
    props: {
      value: {
        type: Boolean
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
    }
  }
</script>
