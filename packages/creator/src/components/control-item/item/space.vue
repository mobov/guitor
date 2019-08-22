<style lang='scss'>
.control-item-space {
  display: flex;
  align-items: center;
  .control-item-space-unit {
    width: 70px;
    margin-left: 10px;
  }
  .box-control-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box-control {
    $--size-box-control: 80px;
    $--size-box-control-center: 34px;
    $--size-box-control-offset: ($--size-box-control -  $--size-box-control-center) / 2;
    /*border: var(--m-border-base);*/
    height: $--size-box-control;
    width: $--size-box-control;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    margin: 5px;
    box-shadow: var(--m-elevation-2);
    > * {
      position: absolute;
      height: $--size-box-control-center;
      width: $--size-box-control-center;
      display: flex;
      color: #a5a5a5;
      z-index: 2;
      &:hover {
        opacity: .6;
      }
    }
    .box-control-top {
      top: 0;
      left: $--size-box-control-offset;
      justify-content: center;
      padding-top: 5px;
    }
    .box-control-bottom {
      bottom: 0;
      left: $--size-box-control-offset;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 5px;
    }
    .box-control-left {
      top: $--size-box-control-offset;
      left: 0;
      align-items: center;
      padding-left: 5px;
    }
    .box-control-right {
      top: $--size-box-control-offset;
      right: 0;
      justify-content: flex-end;
      align-items: center;
      padding-right: 5px;
    }
    .box-control-center {
      box-shadow: var(--m-elevation-1);
     // border: var(--m-border-base);
      top: $--size-box-control-offset;
      left: $--size-box-control-offset;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      z-index: 3 !important;
    }
  }
  .preview-box {
    $--size-preview-box: 80px;
    $--size-preview-box-offset: 20px;
    margin: 5px;
    height: $--size-preview-box;
    width: $--size-preview-box;
    border: var(--m-border-base);
    position: relative;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    > * {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .preview-box-t {
      width: 100%;
      height: $--size-preview-box-offset;
      top: 0;
      left: 0;
    }
    .preview-box-b {
      width: 100%;
      height: $--size-preview-box-offset;
      bottom: 0;
      left: 0;
    }
    .preview-box-l {
      height: 100%;
      width: $--size-preview-box-offset;
      top: 0;
      left: 0;
    }
    .preview-box-r {
      height: 100%;
      width: $--size-preview-box-offset;
      top: 0;
      right: 0;
    }
    .preview-center {
      cursor: pointer;
      height: $--size-preview-box / 2;
      width: $--size-preview-box / 2;
      border: var(--m-border-base);
      border-radius: 50%;
      &:hover {
        opacity: .8;
      }
    }
  }
}
</style>
<template>
  <div class="control-item-space">
    <div class="box-control-container">
      <div class="box-control">
        <div class="box-control-top" @click="handleValue('increase', 0)">
          <m-icon :size="14" value="add" />
        </div>
        <div class="box-control-right" @click="handleValue('increase', 1)">
          <m-icon :size="14" value="add" />
        </div>
        <div class="box-control-bottom" @click="handleValue('increase', 2)">
          <m-icon :size="14" value="add" />
        </div>
        <div class="box-control-left" @click="handleValue('increase', 3)">
          <m-icon :size="14" value="add" />
        </div>
        <div class="box-control-center" @click="handleCenter('increase')">
          <m-icon :size="20" value="add" />
        </div>
      </div>
      <div class="box-control">
        <div class="box-control-top" @click="handleValue('reduce', 0)">
          <m-icon :size="14" value="remove" />
        </div>
        <div class="box-control-right" @click="handleValue('reduce', 1)">
          <m-icon :size="14" value="remove" />
        </div>
        <div class="box-control-bottom" @click="handleValue('reduce', 2)">
          <m-icon :size="14" value="remove" />
        </div>
        <div class="box-control-left" @click="handleValue('reduce', 3)">
          <m-icon :size="14" value="remove" />
        </div>
        <div class="box-control-center" @click="handleCenter('reduce')">
          <m-icon :size="20" value="remove" />
        </div>
      </div>
      <div class="box-control">
        <div class="box-control-top">
          {{curValue[0]}}
        </div>
        <div class="box-control-right">
          {{curValue[1]}}
        </div>
        <div class="box-control-bottom">
          {{curValue[2]}}
        </div>
        <div class="box-control-left">
          {{curValue[3]}}
        </div>
        <div class="box-control-center" @click="handleReset">
          重置
        </div>
      </div>
    </div>
    <!--<div class="preview-box">-->
      <!--<div class="preview-box-t">{{curValue[0]}}</div>-->
      <!--<div class="preview-box-b">{{curValue[2]}}</div>-->
      <!--<div class="preview-box-l">{{curValue[3]}}</div>-->
      <!--<div class="preview-box-r">{{curValue[1]}}</div>-->
      <!--<div class="preview-center">-->
        <!--重置-->
      <!--</div>-->
    <!--</div>-->
    <!--<div>-->
      <!--<el-input-number size="small" :step="step" v-model="curValue[0]" controls-position="right"></el-input-number>-->
      <!--<el-input-number size="small" :step="step" v-model="curValue[1]" controls-position="right"></el-input-number>-->
      <!--<el-input-number size="small" :step="step" v-model="curValue[2]" controls-position="right"></el-input-number>-->
      <!--<el-input-number size="small" :step="step" v-model="curValue[3]" controls-position="right"></el-input-number>-->
    <!--</div>-->
  </div>
</template>
<script>
const SizeUnits = ['px', 'rem', 'em', 'vw', 'vh', '%']

const Directions = ['↑', '→', '↓','←']

const getSizeNumber = (value) => {
  const unit = SizeUnits.find(_ => value.indexOf(_) !== -1)
  return unit ? Number(value.substring(0, value.length - unit.length)) : 0
}
const getSizeUnit = (value) => {
  return typeof value === 'number' ? 'px' : SizeUnits.find(_ => value.indexOf(_) !== -1) || 'px'
}

export default {
  name: 'control-item-space',
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    curValue: {
      get () {
        const result = []
        if (typeof this.value === 'number') {
          Directions.forEach(_ => result.push(this.value))
        } else {
          this.value.split(' ').forEach(_ => {
            result.push(getSizeNumber(_))
          })
        }
        return result
      },
      set (val) {
        console.log(val)
        this.$emit('input', this.getEmitValue(val, this.unit))
      }
    },
    unit: {
      get () {
        return getSizeUnit(this.value)
      },
      set (val) {
        this.$emit('input', this.getEmitValue(this.curValue, val))
      }
    },
    step () {
      return this.config.step ? this.config.step : 5
    }
  },
  methods: {
    getEmitValue (curValue, unit) {
      let result = ''
      curValue.forEach((value, index) => {
        result += `${value < 0 ? 0 : value}${unit} `
      })
      result = result.substring(0, result.length - 1)
      return result
    },
    handleValue (action = 'increase', index) {
      const result = this.curValue
      result[index] += action === 'increase' ? this.step : - this.step
      result[index] = result[index] < 0 ? 0 : result[index]
      this.curValue = result
    },
    handleCenter (action = 'increase') {
      const result = this.curValue
      Directions.forEach((_, index) => {
        result[index] += action === 'increase' ? this.step : - this.step
        result[index] = result[index] < 0 ? 0 : result[index]
      })
      this.curValue = result
    },
    handleReset () {
      const result = this.curValue
      Directions.forEach((_, index) => {
        result[index] = 0
      })
      this.curValue = result
    }
  }
}
</script>
