<style lang='scss'>
  .control-item-color-input {
    height: 32px;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    cursor: pointer;
    display: flex;
    padding:5px;
    align-items: center;
  }
  .control-item-color-cover {
    height: 20px;
    border-radius: 2px;
    flex: 1;
  }
  .control-item-color-picker.vc-sketch {
    box-shadow: var(--m-elevation-0);
    /*padding: 0*/
  }
  .control-item-color-popover {
    padding: 0 !important;
  }
  .control-item-color-value {
    user-select: text;
    cursor: default;
    margin-left: 8px;
  }
</style>
<template>
  <el-popover
    class="control-item-color"
    popper-class="control-item-color-popover"
    placement="bottom"
    width="220"
    trigger="click">
    <sketch class="control-item-color-picker" v-model="_value"></sketch>
    <!--<el-input slot="reference" size="small"-->
              <!--class="control-item-color-input"-->
              <!--placeholder="请输入内容"-->
              <!--v-model="_value">-->
      <!--<div class="control-item-color-cover" slot="prepend" :style="styles"></div>-->
    <!--</el-input>-->
    <div slot="reference"
         class="control-item-color-input el-input">
      <div class="control-item-color-cover" :style="styles"></div>
      <div class="control-item-color-value">{{_value}}</div>
    </div>
  </el-popover>
  <!--<div  class="control-item-color">-->
    <!--&lt;!&ndash;<sketch v-model="_value"></sketch>&ndash;&gt;-->
    <!---->
    <!--<el-input v-model="_value" size="small">-->

    <!--</el-input>-->
  <!--</div>-->
</template>
<script>
import { Sketch } from 'vue-color'

export default {
  name: 'control-item-color',
  components: { Sketch },
  props: {
    value: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (val) {
        const result = `rgba(${val.rgba.r}, ${val.rgba.g}, ${val.rgba.b}, ${val.rgba.a})`
        this.$emit('input', result)
      }
    },
    styles () {
      return {
        backgroundColor: this._value
      }
    }
  }
}
</script>
