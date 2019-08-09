module.exports = {
  name: 'element-ui',
  label: 'element组件库',
  components: {
    ElButton: {
      label: '按钮',
      component: 'ElButton',
      nodeData: {
        props: {
          size: 'medium',
          type: 'primary',
          plain: false,
          round: false,
          circle: false,
          loading: false,
          autofocus: false,
          icon: '',
          nativeType: 'button'
        },
        domProps: {
          innerText: 'button'
        }
      },
      control: {
        props: {
          size: {
            label: '尺寸',
            type: 'radio',
            config: {
              selections: [{
                label: 'medium',
                value: 'medium'
              }, {
                label: 'small',
                value: 'small'
              }, {
                label: 'mini',
                value: 'mini'
              }]
            }
          },
          type: {
            label: '类型',
            type: 'radio',
            config: {
              selections: [{
                label: 'primary',
                value: 'primary'
              }, {
                label: 'success',
                value: 'success'
              }, {
                label: 'warning',
                value: 'warning'
              }, {
                label: 'danger',
                value: 'danger'
              }, {
                label: 'info',
                value: 'info'
              }, {
                label: 'text',
                value: 'text'
              }]
            }
          },
          plain: {
            label: '是否朴素按钮',
            type: 'boolean'
          },
          round: {
            label: '是否圆角按钮',
            type: 'boolean'
          },
          circle: {
            label: '是否圆形按钮',
            type: 'boolean'
          },
          loading: {
            label: '是否加载中状态',
            type: 'boolean'
          },
          autofocus: {
            label: '是否默认聚焦',
            type: 'boolean'
          },
          icon: {
            label: '图标类名',
            type: 'text'
          },
          nativeType: {
            label: '原生 type 属性',
            type: 'radio',
            config: {
              selections: [{
                label: 'button',
                value: 'button'
              }, {
                label: 'submit',
                value: 'submit'
              }, {
                label: 'reset',
                value: 'reset'
              }]
            }
          }
        },
        domProps: {
          innerText: {
            label: '按钮文案',
            type: 'text'
          }
        }
      }
    },
    ElInput: {
      label: '输入框',
      component: 'ElInput',
      nodeData: {
        props: {
          value: '输入值',
          placeholder: '',
          size: 'medium',
          type: 'text',
          maxLength: 999999,
          minlength: 0,
          showWordLimit: false,
          clearable: false,
          showPassword: false,
          prefixIcon: '',
          suffixIcon: '',
          rows: 2,
          autosize: false,
          autocomplete: 'off',
          autofocus: false,
          readonly: false,
          resize: 'none'
        }
      },
      control: {
        props: {
          value: {
            label: '输入值',
            type: 'text'
          },
          placeholder: {
            label: '占位文本',
            type: 'text'
          },
          size: {
            label: '尺寸',
            type: 'radio',
            toolTip: '输入框尺寸，只在 type!="textarea" 时有效',
            config: {
              selections: [{
                label: 'medium',
                value: 'medium'
              }, {
                label: 'small',
                value: 'small'
              }, {
                label: 'mini',
                value: 'mini'
              }]
            }
          },
          type: {
            label: '类型',
            type: 'radio',
            toolTip: 'text，textarea 和其他 原生 input 的 type 值',
            config: {
              selections: [{
                label: 'text',
                value: 'text'
              }, {
                label: 'textarea',
                value: 'textarea'
              }, {
                label: 'number',
                value: 'number'
              }]
            }
          },
          maxlength: {
            label: '最大输入长度',
            type: 'number',
            toolTip: '最大输入长度'
          },
          minlength: {
            label: '最小输入长度',
            type: 'number',
            toolTip: '最小输入长度'
          },
          showWordLimit: {
            label: '字数统计',
            type: 'boolean',
            toolTip: '是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效'
          },
          clearable: {
            label: '可清空',
            type: 'boolean'
          },
          showPassword: {
            label: '是否显示切换密码图标',
            type: 'boolean'
          },
          prefixIcon: {
            label: '输入框头部图标',
            type: 'text'
          },
          suffixIcon: {
            label: '输入框尾部图标',
            type: 'text'
          },
          rows: {
            label: '输入框行数',
            type: 'number',
            toolTip: '输入框行数，只对 type="textarea" 有效'
          },
          autosize: {
            label: '自适应内容高度',
            type: 'boolean'
          },
          autocomplete: {
            label: '自动补全',
            type: 'radio',
            toolTip: '原生属性，自动补全',
            config: {
              selections: [{
                label: 'on',
                value: 'on'
              }, {
                label: 'off',
                value: 'off'
              }]
            }
          },
          autofocus: {
            label: '自动聚焦',
            type: 'boolean'
          },
          readonly: {
            label: '只读',
            type: 'boolean'
          },
          resize: {
            label: '缩放',
            type: 'radio',
            toolTip: '控制是否能被用户缩放',
            config: {
              selections: [{
                label: 'none',
                value: 'none'
              }, {
                label: 'both',
                value: 'both'
              }, {
                label: 'horizontal',
                value: 'horizontal'
              }, {
                label: 'vertical',
                value: 'vertical'
              }]
            }
          }
        }
      }
    }
  }
}
