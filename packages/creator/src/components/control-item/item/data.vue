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
  import { merge } from 'lodash'
  import Http from 'axios'
  import { ulid } from 'ulid'

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
      isOperation () {
        return this.config.operation === undefined ? true : this.config.operation
      },
      remote () {
        return this.config.remote ? this.config.remote : {}
      },
      paramsKeys () {
        return Object.keys(this.config.remote.params)
      },
      paramsData () {
        return this.paramsKeys.map(key => ({
          field: key,
          value: this.config.remote.params[key]
        }))
      },
      headerKeys () {
        return Object.keys(this.config.remote.header)
      },
      headerData () {
        return this.headerKeys.map(key => ({
          field: key,
          value: this.config.remote.header[key]
        }))
      }
    },
    methods: {
      initConfig () {
        merge(this.config, {
          enableRemote: false,
          isRemote: false,
          remote: {
            url: '',
            method: 'get',
            protocal: 'http',
            contentType: 'application/json;charset=UTF-8',
            dataField: 'data',
            header: {},
            params: {},
          },
          columns: [{
            field: 'label',
            path: 'nodeData/props',
            label: '标题',
            type: 'text'
          }, {
            field: 'prop',
            path: 'nodeData/props',
            label: '字段',
            type: 'text'
          }]
        }, deepCopy(this.config))
      },
      handleUpdateFromRemote () {
        const getConfig = {
          method: this.config.remote.method,
          header: {
            'Content-Type': this.config.remote.contentType,
            ...this.config.remote.header
          },
          url: `${this.config.remote.protocal}://${this.config.remote.url}`,
        }
        if (getConfig.method === 'get') {
          getConfig.params = this.config.remote.params
        } else {
          getConfig.data = this.config.remote.params
        }
        Http(getConfig).then(res => {
          const dataKey = this.config.remote.dataField.split('.')
          let resdata = res
          dataKey.forEach(key => {
            resdata = resdata[key]
          })
          if (resdata) {
            this._value = resdata
          }
        }).catch(err => {
          this.$message.error('获取远程数据失败')
          console.log(err)
        })
      },
      handleRemove (index) {
        this._value.splice(index, 1)
      },
      handleAdd (index) {
        index = this._value.length - 1
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
      handleAddKey () {
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
      handleAddHeader () {
        const config = deepCopy(this.config)
        config.remote.header[`header_${new Date().getTime()}`] = ''
        this.$emit('updateConfig', config)
      },
      handleRemoveHeader (index) {
        const config = deepCopy(this.config)
        delete config.remote.header[this.headerData[index].field]
        this.$emit('updateConfig', config)
      },
      handleUpdateHeader (type, newVal, field) {
        if (/^[0-9a-zA-Z_\-]+$/.test(newVal)) {
          const config = deepCopy(this.config)
          if (type === 'value') {
            config.remote.header[field] = newVal
          } else {
            config.remote.header[newVal] = config.remote.header[field]
            delete config.remote.header[field]
          }
          this.$emit('updateConfig', config)
        }
      },
      handleUpdateParam (type, newVal, field) {
        if (/^[0-9a-zA-Z_\-]+$/.test(newVal)) {
          const config = deepCopy(this.config)
          if (type === 'value') {
            config.remote.params[field] = newVal
          } else {
            config.remote.params[newVal] = config.remote.params[field]
            delete config.remote.params[field]
          }
          this.$emit('updateConfig', config)
        }
      },
      handleAddParam () {
        const config = deepCopy(this.config)
        config.remote.params[`param_${new Date().getTime()}`] = ''
        this.$emit('updateConfig', config)
      },
      handleRemoveParam (index) {
        const config = deepCopy(this.config)
        delete config.remote.params[this.paramsData[index].field]
        this.$emit('updateConfig', config)
      },
      RRemote () {
        return ([
            <ElInput placeholder="请输入url" v-model={this.config.remote.url} class="input-with-select">
              <template slot="prepend">
                <ElSelect style="width: 80px;margin-left: -15px;mergin-right: 0" v-model={this.config.remote.method}  placeholder="请选择">
                  <el-option label="get" value="get" />
                  <el-option label="post" value="post" />
                </ElSelect>
                <ElSelect style="width: 80px;margin-left: 0;mergin-right: 0" v-model={this.config.remote.protocal} placeholder="请选择">
                  <el-option label="http" value="http" />
                  <el-option label="https" value="https" />
                </ElSelect>
              </template>
              <ElButton slot="append" onClick={this.handleUpdateFromRemote}>请求</ElButton>
            </ElInput>,
            <div class="control-item-label">
              content-type
            </div>,
            <ElSelect v-model={this.config.remote.contentType} placeholder="请选择">
              <el-option label="application/json;charset=UTF-8" value="application/json;charset=UTF-8" />
              <el-option label="application/x-www-form-urlencoded;charset=UTF-8" value="application/x-www-form-urlencoded;charset=UTF-8" />
            </ElSelect>,
            <div class="control-item-label">
              数据体
            </div>,
            <ElInput v-model={this.config.remote.dataField} />,
            <div class="control-item-label">
              参数
            </div>,
            <ElTable data={this.paramsData} border size="mini" class="m--mb-sm">
              <ElTableColumn align="center" label="字段"
                             {...{
                               scopedSlots: {
                                 default: scope => {
                                   return (
                                     <Text onInput={(value) => this.handleUpdateParam('field', value, scope.row.field)}
                                           value={scope.row.field} />
                                   )
                                 }
                               }
                             }} />
              <ElTableColumn align="center" label="值"
                             {...{
                               scopedSlots: {
                                 default: scope => {
                                   return (
                                     <Text onInput={(value) => this.handleUpdateParam('value', value, scope.row.field)}
                                           value={scope.row.value} />
                                   )
                                 }
                               }
                             }} />
              <ElTableColumn label="操作" align="center" width="60" {...{
                scopedSlots: {
                  default: scope => {
                    return (
                      <div>
                        <MButton color="error"
                                 onClick={() => this.handleRemoveParam(scope.$index)}
                                 shape="circle"
                                 variety="flat"
                                 size={32}>
                          <MIcon value="delete_outline" size={20} />
                        </MButton>
                      </div>
                    )
                  }
                }
              }} />
            </ElTable>,
            <MButton color="success" onClick={this.handleAddParam} width="100%" marginY="sm" paddingX="md" variety="flat">新增</MButton>,
            <div class="control-item-label">
              请求头
            </div>,
            <ElTable data={this.headerData} border size="mini" class="m--mb-sm">
              <ElTableColumn align="center" label="字段"
                             {...{
                               scopedSlots: {
                                 default: scope => {
                                   return (
                                     <Text onInput={(value) => this.handleUpdateHeader('field', value, scope.row.field)}
                                           value={scope.row.field} />
                                   )
                                 }
                               }
                             }} />
              <ElTableColumn align="center" label="值"
                             {...{
                               scopedSlots: {
                                 default: scope => {
                                   return (
                                     <Text onInput={(value) => this.handleUpdateHeader('value', value, scope.row.field)}
                                           value={scope.row.value} />
                                   )
                                 }
                               }
                             }} />
              <ElTableColumn label="操作" align="center" width="60" {...{
                scopedSlots: {
                  default: scope => {
                    return (
                      <div>
                        <MButton color="error"
                                 onClick={() => this.handleRemoveHeader(scope.$index)}
                                 shape="circle"
                                 variety="flat"
                                 size={32}>
                          <MIcon value="delete_outline" size={20} />
                        </MButton>
                      </div>
                    )
                  }
                }
              }} />
            </ElTable>,
            <MButton color="success" onClick={this.handleAddHeader} width="100%" marginY="sm" paddingX="md" variety="flat">新增</MButton>,
          ]
        )
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
                           }}
            />
          )
        })
        return result
      }
    },
    created () {
      this.initConfig()
    },
    render () {
      const { handleAdd, handleRemove, _value, isOperation, handleRemoveKey, handleAddKey } = this

      return (
        <div class="control-item-data">
          {
            !this.config.enableRemote ? '' :
              <MFlex marginY={15}>
                <MRadio v-model={this.config.isRemote} label={false} marginRight={15}>本地</MRadio>
                <MRadio v-model={this.config.isRemote} label={true}>远程</MRadio>
              </MFlex>
          }
          {
            this.config.isRemote ? this.RRemote() : ''
          }
          <div class="control-item-label">
           键值
          </div>
          <ElTable data={this.keyData} border size="mini" class="m--mb-sm">
            {this.RKeyCols()}
            <ElTableColumn label="操作"  align="center" width="60" {...{
              scopedSlots: {
                default: scope => {
                  return (
                    <div>
                      <MButton color="error"
                               onClick={() => handleRemoveKey(scope.$index)}
                               disabled={this.keyData.length < 2}
                               shape="circle"
                               variety="flat"
                               size={32}>
                        <MIcon value="delete_outline" size={20} />
                      </MButton>
                    </div>
                  )
                }
              }
            }} />
          </ElTable>
          <MButton onClick={handleAddKey} color="success" width="100%" marginY="sm" paddingX="md" variety="flat">新增</MButton>,
          <div class="control-item-label">
            数据
          </div>
          <ElTable data={this._value} border size="mini">
            {this.RCols()}
            {isOperation ?
              (
                <ElTableColumn label="操作"  align="center" width="60" {...{
                  scopedSlots: {
                    default: scope => {
                      return (
                        <div>
                          <MButton color="error"
                                   onClick={() => handleRemove(scope.$index)}
                                   disabled={_value.length < 2}
                                   shape="circle"
                                   variety="flat"
                                   size={32}>
                            <MIcon value="delete_outline" size={20} />
                          </MButton>
                        </div>
                      )
                    }
                  }
                }} />
              ) : []
            }
          </ElTable>
          <MButton onClick={handleAdd} color="success" width="100%" marginY="sm" paddingX="md" variety="flat">新增</MButton>
        </div>
      )
    }
  }
</script>
