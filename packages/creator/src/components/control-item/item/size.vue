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
    <m-radio v-model="isAuto" :label="false">
      <el-input-number :disabled="isAuto" size="small" :step="step" v-model="_value" controls-position="right"></el-input-number>
      <el-select :disabled="isAuto" class="control-item-size-unit" v-model="unit" size="small" placeholder="请选择">
        <el-option :label="item" :value="item" :key="item" v-for="item in SizeUnits"></el-option>
      </el-select>
    </m-radio>
    <m-radio v-model="isAuto"
             marginLeft="sm"
             :label="true">
      自动
    </m-radio>

  </div>
</template>
<script>
const SizeUnits = ['px', 'rem', 'em', 'vw', 'vh', '%']

// const isStyleUnit = (value) => {
//   return typeof value === 'string' && SizeUnits.includes(value)
// }
const getSizeNumber = (value) => {
  const unit = SizeUnits.find(_ => value.indexOf(_) !== -1)
  return unit ? Number(value.substring(0, value.length - unit.length)) : 0
}
const getSizeUnit = (value) => {
  return SizeUnits.find(_ => value.indexOf(_) !== -1) || 'px'
}

export default {
  name: 'control-item-size',
  props: {
    value: {
      type: [Number, String, Boolean],
      default: 'auto'
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      SizeUnits,
      sizeCache: 'auto',
      undefinedAuto: false
    }
  },
  created () {
    if (typeof this.value === 'undefined') {
      this.undefinedAuto = true
    }
  },
  computed: {
    unit: {
      get () {
        return getSizeUnit(this.sizeCache)
      },
      set (val) {
        if (this.value !== 'auto') {
          this.$emit('input', `${this._value}${val}`)
        } else if (this.undefinedAuto) {
          this.$emit('input', undefined)
        }
      }
    },
    _value: {
      get () {
        return getSizeNumber(this.sizeCache)
      },
      set (val) {
        if (this.value !== 'auto') {
          this.$emit('input', `${val}${this.unit}`)
        } else if (this.undefinedAuto) {
          this.$emit('input', undefined)
        }
      }
    },
    step () {
      return this.config.step ? this.config.step : 1
    },
    isAuto: {
      get () {
        return this.undefinedAuto ? true : this.value === 'auto'
      },
      set (val) {
        console.log(val)
        if (val) {
          this.$emit('input', this.undefinedAuto ? undefined : 'auto')
        } else {
          this.$emit('input', this.sizeCache === 'auto' ? '0px' : this.sizeCache)
        }
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        if (val !== undefined && val !== 'auto' && val !== this.sizeCache) {
          this.sizeCache = val
        }
      }
    }
  }
}
</script>
