<style lang='scss'>
.control-item-data {
  > * {
    width: 100%;
  }
}
</style>
<script lang="jsx">
  import Text from './text'
  import { deepCopy } from '@mobov/es-helper'
  export default {
    name: 'control-item-data',
    props: {
      value: {
        type: [Array, Object],
        default: () => [{
          name: 'name',
          value: 'value'
        }]
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
      valueKeys () {
        return Object.keys(this.value[0])
      },
      columns () {
        return this.valueKeys.map(key => ({
          field: key,
          label: key
        }))
      },
      keyColumns () {
        return [{
          field: 'field',
          label: '字段',
        }]
      },
      keyData () {
        return this.columns.map((item, index) => ({
          index,
          field: item.field
        }))
      },
      // keyData: {
      //   get () {
      //     console.log(this.columns)
      //     return this.columns.map((item, index) => ({
      //       index,
      //       field: item.field
      //     }))
      //   },
      //   set (val) {
      //     console.log(val)
      //     if (!this.columns.find(_ => _.field === val)) {
      //
      //     }
      //   }
      // },
      isOperation () {
        return this.config.operation === undefined ? true : this.config.operation
      }
    },
    methods: {
      handleRemove (index) {
        this._value.splice(index, 1)
      },
      handleAdd (index) {
       this._value.splice(index, 0, deepCopy(this._value[index]))
      },
      handleRemoveKey (index) {
        const result = []
        const oldKey =  this.valueKeys[index]
        this._value.forEach(item => {
          const temp = deepCopy(item)
          delete temp[oldKey]
          result.push(temp)
        })
        this._value = result
      },
      handleAddKey (index) {
        const keyName = `newKey${new Date().getTime()}`
        const result = []
        this._value.forEach(item => {
          const temp = deepCopy(item)
          temp[keyName] = ''
          result.push(temp)
        })
        this._value = result
      },
      handleUpdateKey (newVal, oldVal) {
        if (/^[0-9a-zA-Z_]+$/.test(newVal) && newVal !== oldVal && !this.valueKeys.includes(newVal)) {
          const result = []
          this._value.forEach(item => {
            // item[newVal] = item[oldVal]
            // delete item[oldVal]
            const temp = {}
            this.valueKeys.forEach(key => {
              if (key === oldVal) {
                temp[newVal] = item[key]
              } else {
                temp[key] = item[key]
              }
            })
            result.push(temp)
          })
          this._value = result
        }
      },
      item (type) {
        return require(`@/components/control-item/item/${type}.vue`).default
      },
      getModel (data, path) {
        let result = data
        if (path) {
          path.split('/').forEach(key => {
            result = result[key]
          })
        }
        return result
      },
      RCols () {
        const { getModel } = this
        const result = []
        this.columns.forEach(col => {
          result.push(
            <ElTableColumn key={col.field}
                           align="center"
                           label={col.label}
                           {...{
            scopedSlots: {
            default: scope => {
                const targetObj = getModel(scope.row, col.path)
                return (
                  <Text v-model={targetObj[col.field]} />
                )
              }
            }
          }} />
          )
        })
        return result
      },
      RKeyCols () {
        const { keyData, handleUpdateKey } = this
        const result = []
        this.keyColumns.forEach((col) => {
          result.push(
            <ElTableColumn key={col.field}
                           align="center"
                           label={col.label}
                           {...{
                             scopedSlots: {
                               default: scope => {
                                 return (
                                   <Text value={scope.row.field} onInput={(value) => handleUpdateKey(value, scope.row.field)}/>
                                 )
                               }
                             }
                           }} />
          )
        })
        return result
      }
    },
    created () {
    },
    render () {
      const { handleAdd, handleRemove, _value, isOperation, handleRemoveKey, handleAddKey } = this

      return (
        <div class="control-item-data">
          <ElTable data={this.keyData} border size="mini" class="m--mb-sm">
            <ElTableColumn label="键值" align="center">
              {this.RKeyCols()}
              <ElTableColumn label="操作"  align="center" width="100" {...{
                scopedSlots: {
                  default: scope => {
                    return (
                      <div>
                        <MButton color="error"
                                 onClick={() => handleRemoveKey(scope.$index)}
                                 disabled={this.keyData.length < 2}
                                 shape="circle"
                                 variety="flat"
                                 marginLeft="xs"
                                 size={32}>
                          <MIcon value="delete_outline" size={20} />
                        </MButton>
                        <MButton color="success"
                                 onClick={() => handleAddKey(scope.$index)}
                                 shape="circle"
                                 variety="flat"
                                 marginLeft="xs"
                                 size={32}>
                          <MIcon value="add" size={20} />
                        </MButton>
                      </div>
                    )
                  }
                }
              }} />
            </ElTableColumn>
          </ElTable>
          <ElTable data={this._value} border size="mini">
            <ElTableColumn label="数据" align="center">
            {this.RCols()}
            {isOperation ?
                 (
                  <ElTableColumn label="操作"  align="center" width="100" {...{
                  scopedSlots: {
                    default: scope => {
                      return (
                        <div>
                          <MButton color="error"
                                   onClick={() => handleRemove(scope.$index)}
                                   disabled={_value.length < 2}
                                   shape="circle"
                                   variety="flat"
                                   marginLeft="xs"
                                   size={32}>
                            <MIcon value="delete_outline" size={20} />
                          </MButton>
                          <MButton color="success"
                                   onClick={() => handleAdd(scope.$index)}
                                   shape="circle"
                                   variety="flat"
                                   marginLeft="xs"
                                   size={32}>
                            <MIcon value="add" size={20} />
                          </MButton>
                        </div>
                      )
                    }
                  }
                }} />
                ) : []
              }
            }
            </ElTableColumn>
          </ElTable>
        </div>
      )
    }
  }
</script>
