<style lang='scss'>

</style>
<template>
  <div class="control-item-array">

    <!--<m-flex class="control-item-array-list" marginBottom="sm" width="100%" :key="index" v-for="(item, index) in _value">-->
      <!--<el-input style="flex: 1;width: 100%" size="small" v-model="item.nodeData.props.label">-->

      <!--</el-input>-->
      <!--<m-button color="error" @click="handleRemove(index)" :disabled="_value.length < 2" shape="circle" variety="flat" marginLeft="xs" :size="32">-->
        <!--<m-icon value="delete_outline" :size="20"></m-icon>-->
      <!--</m-button>-->
      <!--<m-button color="success" @click="handleAdd(index)" shape="circle" variety="flat" :size="32">-->
        <!--<m-icon value="add" :size="20"></m-icon>-->
      <!--</m-button>-->
      <!--&lt;!&ndash;{{item.nodeData.props.label}}&ndash;&gt;-->
    <!--</m-flex>-->
    <!--<m-table class="m-mb-lg"-->
             <!--key-field="name"-->
             <!--size="sm"-->
             <!--:data="_value"-->
             <!--border>-->
      <!--<m-table-col title="数值">-->
        <!--<template slot-scope="scope">-->
          <!--<el-input style="flex: 1;width: 100%" size="small" v-model="scope.nodeData.props.label"></el-input>-->
        <!--</template>-->
      <!--</m-table-col>-->
      <!--<m-table-col title="操作 ">-->
        <!--<template slot-scope="scope">-->
          <!--<m-button color="error" @click="handleRemove(scope)" :disabled="_value.length < 2" shape="circle"-->
                    <!--variety="flat" marginLeft="xs" :size="32">-->
            <!--<m-icon value="delete_outline" :size="20"></m-icon>-->
          <!--</m-button>-->
          <!--<m-button color="success" @click="handleAdd(scope)" shape="circle" variety="flat" :size="32">-->
            <!--<m-icon value="add" :size="20"></m-icon>-->
          <!--</m-button>-->
        <!--</template>-->
      <!--</m-table-col>-->
    <!--</m-table>-->
    <el-table
      :data="_value"
      border
      style="width: 100%">
      <el-table-column :key="col.field" v-for="col in columns"
        :label="col.label">
        <template slot-scope="scope">
          <component :is="item(col.type)" v-model="scope.row.nodeData.props[col.field]"></component>
        </template>
      </el-table-column>
      <el-table-column label="操作"  width="100">
        <template slot-scope="scope">
          <m-button color="error" @click="handleRemove(scope.$index)" :disabled="_value.length < 2" shape="circle"
                    variety="flat" marginLeft="xs" :size="32">
            <m-icon value="delete_outline" :size="20"></m-icon>
          </m-button>
          <m-button color="success" @click="handleAdd(scope.$index)" shape="circle" variety="flat" :size="32">
            <m-icon value="add" :size="20"></m-icon>
          </m-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import { deepCopy } from '@mobov/es-helper'
  export default {
    name: 'control-item-array',
    props: {
      value: {
        type: Array
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
          console.log(val)
          this.$emit('input', val)
        }
      },
      columns () {
        return this.config.columns
      }
    },
    methods: {
      handleRemove (index) {
        this._value.splice(index, 1)
      },
      handleAdd (index) {
       this._value.splice(index, 0, deepCopy(this._value[index]))
      },
      item (type) {
        return require(`@/components/control-item/item/${type}.vue`).default
      }
    },
    created () {
      console.log(this.value)
    }
  }
</script>
