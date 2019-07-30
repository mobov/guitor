<style lang='scss'>
.control-item-number {
  display: flex;
  align-items: center;

}
</style>
<template>
  <div class="control-item-number">
    <!--{{unit}}-->
    <!--<el-input v-model="_value" size="small" type="number">-->

    <!--</el-input>-->
    <el-input-number size="small" :step="step" v-model="_value" controls-position="right"></el-input-number>
  </div>
</template>
<script>
export default {
  name: 'control-item-number',
  props: {
    value: {
      type: Number,
      default: 1
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
        this.$emit('input', Number(val))
      }
    },
    step () {
      return this.config.step ? this.config.step : 1
    }
  }
}
</script>
