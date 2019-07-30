<style lang='scss'>
.control-item-size {
  display: flex;
  align-items: center;
  .control-item-size-unit {
    width: 70px;
    margin-left: 10px;
  }
}
</style>
<template>
  <div class="control-item-size">
    <!--{{unit}}-->
    <!--<el-input v-model="_value" size="small" type="number">-->

    <!--</el-input>-->
    <el-input-number size="small" :step="step" v-model="_value" controls-position="right"></el-input-number>
    <el-select class="control-item-size-unit" v-model="unit" size="small" placeholder="请选择">
      <el-option :label="item" :value="item" :key="item" v-for="item in SizeUnits"></el-option>
    </el-select>
  </div>
</template>
<script>
const SizeUnits = ['px', 'rem', 'em',  'vw', 'vh', '%']

// const isStyleUnit = (value) => {
//   return typeof value === 'string' && SizeUnits.includes(value)
// }
const getSizeNumber = (value) => {
  const unit = SizeUnits.find(_ => value.indexOf(_) !== -1)
  return Number(value.substring(0, value.length - unit.length))
}
const getSizeUnit = (value) => {
  return SizeUnits.find(_ => value.indexOf(_) !== -1)
}

export default {
  name: 'control-item-size',
  props: {
    value: {
      type: [Number, String],
      default: '0px'
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    unit: {
      get () {
        return getSizeUnit(this.value)
      },
      set (val) {
        this.$emit('input', `${this._value}${val}`)
      }
    },
    _value: {
      get () {
        return getSizeNumber(this.value)
      },
      set (val) {
        this.$emit('input', `${val}${this.unit}`)
      }
    },
    step () {
      return this.config.step ? this.config.step : 1
    }
  },
  data () {
    return {
      SizeUnits
    }
  }
}
</script>
