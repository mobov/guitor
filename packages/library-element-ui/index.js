module.exports = {
  name: 'element-ui',
  label: 'element组件库',
  components: {
    ElButton: {
      label: '按钮',
      tag: 'ElButton',
      boxConfig: {
        flex: 0
      },
      nodeData: {
        props: {
          type: 'primary',
          size: 'medium',
          plain: false,
          round: false,
          circle: false,
          loading: false,
          autofocus: false,
          icon: '',
          nativeType: 'button'
        }
      },
      control: {
        props: {
          type: {
            label: '主题',
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
        children: {
          label: '按钮文案',
          type: 'text'
        }
      },
      children: '按钮'
    },
    ElInput: {
      tag: 'ElInput',
      label: '输入框',
      boxConfig: {
        flex: 1,
        width: '100%'
      },
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
    },
    ElRadio: {
      tag: 'ElRadio',
      label: '单选',
      boxConfig: {
        flex: 0
      },
      nodeData: {
        props: {
          value: '单选1',
          label: '单选1',
          border: false
        }
      },
      control: {
        props: {
          value: {
            label: '输入值',
            type: 'text'
          },
          label: {
            label: '标志值',
            type: 'text'
          },
          textColor: {
            label: '激活文本色',
            type: 'color'
          },
          fill: {
            label: '填充色',
            type: 'color'
          }
        }
      }
    },
    ElRadioGroup: {
      tag: 'ElRadioGroup',
      label: '单选组',
      boxConfig: {
        flex: 1
      },
      control: {
        props: {
          value: {
            label: '输入值',
            type: 'text'
          },
          textColor: {
            label: '激活文本色',
            type: 'color'
          },
          fill: {
            label: '填充色',
            type: 'color'
          }
        },
        children: {
          type: 'array',
          label: '选项列表',
          config: {
            columns: [{
              field: 'label',
              path: 'nodeData/props',
              label: '标题',
              type: 'text'
            }]
          }
        }
      },
      nodeData: {
        props: {
          value: '输入值',
          textColor: '#ffffff',
          fill: '#409EFF'
        }
      },
      children: [
        {
          name: 'ElRadio',
          nodeData: {
            props: {
              label: '单选1'
            }
          }
        },
        {
          name: 'ElRadio',
          nodeData: {
            props: {
              label: '单选2'
            }
          }
        }
      ]
    },
    ElCheckbox: {
      tag: 'ElCheckbox',
      label: '多选',
      boxConfig: {
        flex: 0
      },
      nodeData: {
        props: {
          value: '多选1',
          label: '多选1',
          indeterminate: false,
          checked: false,
          border: false,
          disabled: false,
          size: 'medium'
        }
      },
      control: {
        props: {
          value: {
            label: '输入值',
            type: 'text'
          },
          label: {
            label: '标志值',
            type: 'text'
          },
          indeterminate: {
            label: '设置 indeterminate 状态，只负责样式控制',
            type: 'boolean'
          },
          checked: {
            label: '当前是否勾选',
            type: 'boolean'
          },
          disabled: {
            label: '禁用',
            type: 'boolean'
          },
          size: {
            label: '尺寸',
            type: 'radio',
            toolTip: '尺寸，只在border=true时有效',
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
          }
        }
      }
    },
    ElCheckboxGroup: {
      tag: 'ElCheckboxGroup',
      label: '多选组',
      boxConfig: {
        flex: 1
      },
      control: {
        props: {
          value: {
            label: '输入值',
            type: 'text'
          },
          textColor: {
            label: '激活文本色',
            type: 'color'
          },
          fill: {
            label: '填充色',
            type: 'color'
          }
        },
        children: {
          type: 'array',
          label: '选项列表',
          config: {
            columns: [{
              field: 'label',
              path: 'nodeData/props',
              label: '标题',
              type: 'text'
            }]
          }
        }
      },
      nodeData: {
        props: {
          value: '输入值',
          textColor: '#ffffff',
          fill: '#409EFF'
        }
      },
      children: [
        {
          name: 'ElCheckbox',
          nodeData: {
            props: {
              label: '多选1'
            }
          }
        },
        {
          name: 'ElCheckbox',
          nodeData: {
            props: {
              label: '多选2'
            }
          }
        }
      ]
    },
    ElRadioButton: {
      tag: 'ElRadioButton',
      label: '单选按钮',
      boxConfig: {
        flex: 0
      },
      uiConfig: {
        isHidden: true
      },
      nodeData: {
        props: {
          value: '单选按钮1',
          label: '单选按钮1',
          size: 'medium',
          border: false
        }
      },
      control: {
        props: {
          value: {
            label: '输入值',
            type: 'text'
          },
          label: {
            label: '标志值',
            type: 'text'
          },
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
          textColor: {
            label: '激活文本色',
            type: 'color'
          },
          fill: {
            label: '填充色',
            type: 'color'
          }
        },
        children: {
          type: 'array',
          label: '选项列表',
          config: {
            columns: [{
              field: 'label',
              label: '标题',
              type: 'text'
            }]
          }
        }
      }
    },
    ElRadioButtonGroup: {
      tag: 'ElRadioGroup',
      label: '单选按钮组',
      boxConfig: {
        flex: 1
      },
      nodeData: {
        props: {
          value: '单选1',
          size: 'medium',
          textColor: '#ffffff',
          fill: '#409EFF'
        }
      },
      control: {
        props: {
          value: {
            label: '输入值',
            type: 'text'
          },
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
          textColor: {
            label: '激活文本色',
            type: 'color'
          },
          fill: {
            label: '填充色',
            type: 'color'
          }
        },
        children: {
          type: 'array',
          label: '选项列表',
          config: {
            columns: [{
              field: 'label',
              path: 'nodeData/props',
              label: '标题',
              type: 'text'
            }]
          }
        }
      },
      children: [
        {
          name: 'ElRadioButton',
          nodeData: {
            props: {
              label: '单选1'
            }
          }
        },
        {
          name: 'ElRadioButton',
          nodeData: {
            props: {
              label: '单选2'
            }
          }
        }
      ]
    },
    ElTag: {
      tag: 'ElTag',
      label: '标签',
      boxConfig: {
        flex: 0
      },
      nodeData: {
        props: {
          type: 'primary',
          size: 'medium',
          color: '',
          hit: false,
          closable: false,
          disableTransitions: true
        }
      },
      control: {
        props: {
          type: {
            label: '主题',
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
              }]
            }
          },
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
          closable: {
            label: '可关闭的',
            type: 'boolean'
          },
          color: {
            label: '背景色',
            type: 'color'
          },
          hit: {
            label: '描边',
            type: 'boolean'
          },
          disableTransitions: {
            label: '禁用过渡动画',
            type: 'boolean'
          }
        },
        children: {
          label: '标签文案',
          type: 'text'
        }
      },
      children: '标签'
    },
    ElLink: {
      tag: 'ElLink',
      label: '文字链接',
      boxConfig: {
        flex: 1
      },
      nodeData: {
        props: {
          type: 'primary',
          href: '',
          icon: '',
          underline: true,
          disabled: false
        }
      },
      control: {
        props: {
          type: {
            label: '主题',
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
              }]
            }
          },
          href: {
            label: '超链接',
            type: 'text'
          },
          icon: {
            label: '图标',
            type: 'text'
          },
          disabled: {
            label: '禁用',
            type: 'boolean'
          },
          underline: {
            label: '下划线',
            type: 'boolean'
          }
        },
        children: {
          type: 'text',
          label: '文案'
        }
      },
      children: '文字链接'
    },
    ElInputNumber: {
      label: '计数器',
      tag: 'ElInputNumber',
      boxConfig: {
        flex: 0
      },
      nodeData: {
        props: {
          value: 0,
          size: 'small',
          min: 0,
          max: 999,
          step: 1,
          stepStrictly: false,
          precision: 0,
          disabled: false,
          controls: true,
          controlsPosition: 'auto',
          label: '',
          placeholder: ''
        }
      },
      control: {
        props: {
          value: {
            label: '数值',
            type: 'number'
          },
          size: {
            label: '尺寸',
            type: 'radio',
            config: {
              selections: [{
                label: 'large',
                value: 'large'
              }, {
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
          min: {
            label: '最小值',
            type: 'number'
          },
          max: {
            label: '最大值',
            type: 'number'
          },
          step: {
            label: '步长',
            type: 'number'
          },
          stepStrictly: {
            label: '是否只能输入步长倍数',
            type: 'boolean'
          },
          precision: {
            label: '精度',
            type: 'number'
          },
          disabled: {
            label: '禁用',
            type: 'boolean'
          },
          controls: {
            label: '是否使用控制按钮',
            type: 'boolean'
          },
          controlsPosition: {
            label: '控制按钮类型',
            type: 'radio',
            config: {
              selections: [{
                label: '右边',
                value: 'right'
              }, {
                label: '两边',
                value: 'auto'
              }]
            }
          },
          label: {
            label: '输入框关联的label文字',
            type: 'text'
          },
          placeholder: {
            label: '输入框默认 placeholder',
            type: 'text'
          }
        }
      }
    },
    ElSwitch: {
      label: '开关',
      tag: 'ElSwitch',
      boxConfig: {
        flex: 0
      },
      nodeData: {
        props: {
          value: false,
          disabled: false,
          activeColor: '#13ce66',
          inactiveColor: '#ff4949',
          activeText: '',
          inactiveText: ''
        }
      },
      control: {
        props: {
          value: {
            label: '值',
            type: 'boolean'
          },
          disabled: {
            label: '禁用',
            type: 'boolean'
          },
          activeColor: {
            label: '打开时的颜色',
            type: 'color'
          },
          inactiveColor: {
            label: '关闭时的颜色',
            type: 'color'
          },
          activeText: {
            label: '打开时的文字描述',
            type: 'text'
          },
          inactiveText: {
            label: '关闭时的文字描述',
            type: 'text'
          }
        }
      }
    },
    ElSlider: {
      label: '滑块',
      tag: 'ElSlider',
      boxConfig: {
        flex: 1,
        width: '100%'
      },
      nodeData: {
        props: {
          value: 0,
          min: 0,
          max: 100,
          step: 1,
          disabled: false,
          showStops: false,
          showTooltip: true,
          inputSize: 'small',
          showInput: false,
          showInputControls: true,
          range: false,
          vertical: false,
          height: '300px'
        }
      },
      control: {
        props: {
          value: {
            label: '值',
            type: 'number'
          },
          min: {
            label: '最小值',
            type: 'number'
          },
          max: {
            label: '最大值',
            type: 'number'
          },
          step: {
            label: '步长',
            type: 'number'
          },
          inputSize: {
            label: '输入框的尺寸',
            type: 'radio',
            config: {
              selections: [{
                label: 'large',
                value: 'large'
              }, {
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
          showInput: {
            label: '显示输入框，仅在非范围选择时有效',
            type: 'boolean'
          },
          showInputControls: {
            label: '显示输入框的控制按钮',
            type: 'boolean'
          },
          showStops: {
            label: '是否显示间断点',
            type: 'boolean'
          },
          showTooltip: {
            label: '是否显示 tooltip',
            type: 'boolean'
          },
          range: {
            label: '是否为范围选择',
            type: 'boolean'
          },
          vertical: {
            label: '是否竖向模式',
            type: 'boolean'
          },
          disabled: {
            label: '禁用',
            type: 'boolean'
          },
          height: {
            label: 'Slider 高度，竖向模式时必填',
            type: 'size'
          }
        }
      }
    },
    ElOption: {
      label: '选择器单元',
      tag: 'ElOption',
      uiConfig: {
        isHidden: true
      }
    },
    ElSelect: {
      label: '选择器',
      tag: 'ElSelect',
      boxConfig: {
        flex: 1
      },
      nodeData: {
        props: {
          value: '选项1',
          multiple: false,
          size: 'medium',
          max: 100,
          step: 1,
          disabled: false,
          clearable: false,
          multipleLimit: 0,
          filterable: false,
          allowCreate: true,
          loading: false,
          loadingText: '加载中',
          noMatchText: '无匹配数据',
          noDataText: '无数据',
          placeholder: '请选择'
        }
      },
      control: {
        props: {
          value: {
            label: '值',
            type: 'text'
          },
          // multiple: {
          //   label: '多选',
          //   type: 'boolean'
          // },
          disabled: {
            label: '禁用',
            type: 'boolean'
          },
          size: {
            label: '尺寸',
            type: 'radio',
            config: {
              selections: [{
                label: 'large',
                value: 'large'
              }, {
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
          clearable: {
            label: '禁用',
            type: 'boolean'
          },
          collapseTags: {
            label: '多选时是否将选中值按文字的形式展示',
            type: 'boolean'
          },
          multipleLimit: {
            label: '多选时用户最多可以选择的项目数，为 0 则不限制',
            type: 'number'
          },
          placeholder: {
            label: '占位文本',
            type: 'text'
          },
          filterable: {
            label: '是否可搜索',
            type: 'boolean'
          },
          allowCreate: {
            label: '是否允许用户创建新条目，需配合 filterable 使用',
            type: 'boolean'
          },
          loading: {
            label: '是否正在从远程获取数据',
            type: 'boolean'
          },
          loadingText: {
            label: '远程加载时显示的文字',
            type: 'text'
          },
          noMatchText: {
            label: '搜索条件无匹配时显示的文字',
            type: 'text'
          },
          noDataText: {
            label: '选项为空时显示的文字',
            type: 'text'
          }
        }
      },
      children: [
        {
          name: 'ElOption',
          nodeData: {
            props: {
              label: '选项1',
              value: '选项1'
            }
          }
        },
        {
          name: 'ElOption',
          nodeData: {
            props: {
              label: '选项2',
              value: '选项2'
            }
          }
        }
      ]
    },
    ElFormItem: {
      tag: 'ElFormItem',
      label: '表单单元',
      uiConfig: {
        isContainer: true,
        parentIncludes: ['ElForm']
      },
      boxConfig: {
        space: 0
      },
      nodeData: {
        props: {
          label: '文本',
          labelWidth: '50px',
          required: false,
          size: 'medium'
        }
      },
      control: {
        props: {
          label: {
            label: '标签文本',
            type: 'text'
          },
          labelWidth: {
            label: '标签宽度',
            type: 'size'
          },
          required: {
            label: '是否显示必填字段的红色星号',
            type: 'boolean'
          },
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
          }
        }
      }
    },
    ElForm: {
      label: '表单',
      tag: 'ElForm',
      uiConfig: {
        isContainer: true,
        parentExcludes: ['ElForm']
      },
      nodeData: {
        props: {
          inline: false,
          labelPosition: 'right',
          labelWidth: '80px',
          labelSuffix: '',
          hideRequiredAsterisk: false,
          size: 'medium'
        },
        style: {
          padding: '5px',
          width: '100%'
        }
      },
      control: {
        props: {
          inline: {
            label: '行内表单模式',
            type: 'boolean'
          },
          labelPosition: {
            label: '表单域标签的位置',
            type: 'radio',
            config: {
              selections: [{
                label: 'right',
                value: 'right'
              }, {
                label: 'left',
                value: 'left'
              }, {
                label: 'top',
                value: 'top'
              }]
            }
          },
          labelWidth: {
            label: '标签宽度',
            type: 'size'
          },
          labelSuffix: {
            label: '标签的后缀',
            type: 'text'
          },
          hideRequiredAsterisk: {
            label: '是否显示必填字段的红色星号',
            type: 'boolean'
          },
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
          }
        }
      },
      children: [{
        name: 'ElFormItem',
        nodeData: {
          props: {
            label: '文本',
            labelWidth: '80px',
            required: false,
            size: 'medium'
          }
        },
        children: [{
          name: 'ElInput',
          boxConfig: {
            space: 0
          },
          nodeData: {
            props: {
              value: '文本'
            }
          }
        }]
      }, {
        name: 'ElFormItem',
        nodeData: {
          props: {
            label: '文本',
            labelWidth: '80px',
            required: false,
            size: 'medium'
          }
        }
      }, {
        name: 'ElFormItem',
        nodeData: {
          props: {
            label: '文本',
            labelWidth: '80px',
            required: false,
            size: 'medium'
          }
        }
      }, {
        name: 'ElFormItem',
        nodeData: {
          props: {
            label: '文本',
            labelWidth: '80px',
            required: false,
            size: 'medium'
          }
        }
      }]
    },
    ElTableColumn: {
      label: '表格单元',
      tag: 'ElTableColumn',
      uiConfig: {
        isHidden: true,
        isContainer: false
      },
      nodeData: {
        props: {
          type: 'none',
          label: '标题',
          width: 'auto',
          // fixed: 'none',
          sortable: false,
          resizable: true,
          showOverflowTooltip: false,
          align: 'left',
          headerAlign: 'left'
        }
      },
      control: {
        props: {
          type: {
            label: '列类型',
            type: 'radio',
            config: {
              selections: [{
                label: 'selection',
                value: 'selection'
              }, {
                label: 'index',
                value: 'index'
              }, {
                label: 'expand',
                value: 'expand'
              }, {
                label: 'none',
                value: 'none'
              }]
            }
          },
          label: {
            label: '列标题',
            type: 'text'
          },
          width: {
            label: '宽度',
            type: 'size'
          },
          fixed: {
            label: '固定列',
            type: 'radio',
            config: {
              selections: [{
                label: 'left',
                value: 'left'
              }, {
                label: 'right',
                value: 'right'
              }]
            }
          },
          sortable: {
            label: '排序',
            type: 'boolean'
          },
          resizable: {
            label: '拖动改变宽度',
            type: 'boolean'
          },
          showOverflowTooltip: {
            label: '当内容过长被隐藏时显示 tooltip',
            type: 'boolean'
          },
          align: {
            label: '对齐方式',
            type: 'radio',
            config: {
              selections: [{
                label: 'left',
                value: 'left'
              }, {
                label: 'center',
                value: 'center'
              }, {
                label: 'right',
                value: 'right'
              }]
            }
          },
          headerAlign: {
            label: '头部对齐方式',
            type: 'radio',
            config: {
              selections: [{
                label: 'left',
                value: 'left'
              }, {
                label: 'center',
                value: 'center'
              }, {
                label: 'right',
                value: 'right'
              }]
            }
          }
        }
      },
      children: []
    },
    ElTable: {
      label: '表格',
      tag: 'ElTable',
      uiConfig: {
        isContainer: false
      },
      nodeData: {
        props: {
          data: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
          height: undefined,
          maxHeight: undefined,
          stripe: false,
          border: true,
          size: 'medium',
          fit: true,
          showHeader: true,
          highlightCurrentRow: false,
          emptyText: '暂无数据',
          defaultExpandAll: false,
          showSummary: false,
          sumText: '合计',
          indent: 16
        }
      },
      control: {
        props: {
          data: {
            label: '表格数据',
            type: 'array',
            config: {
              columns: [{
                field: 'name',
                label: '标题',
                type: 'text'
              }, {
                field: 'address',
                label: '地址',
                type: 'text'
              }, {
                field: 'date',
                label: '日期',
                type: 'text'
              }]
            }
          },
          height: {
            label: '高度',
            type: 'size'
          },
          maxHeight: {
            label: '最大高度',
            type: 'size'
          },
          stripe: {
            label: '是否为斑马纹 table',
            type: 'boolean'
          },
          border: {
            label: '是否带有纵向边框',
            type: 'boolean'
          },
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
          fit: {
            label: '列的宽度是否自撑开',
            type: 'boolean'
          },
          showHeader: {
            label: '是否显示表头',
            type: 'boolean'
          },
          highlightCurrentRow: {
            label: '是否要高亮当前行',
            type: 'boolean'
          },
          emptyText: {
            label: '空数据时显示的文本内容',
            type: 'text'
          },
          defaultExpandAll: {
            label: '是否默认展开所有行',
            type: 'boolean'
          },
          showSummary: {
            label: '是否在表尾显示合计行',
            type: 'boolean'
          },
          sumText: {
            label: '合计行第一列的文本',
            type: 'text'
          },
          indent: {
            label: '展示树形数据时，树节点的缩进',
            type: 'number'
          }
        }
      },
      children: [{
        name: 'ElTableColumn',
        nodeData: {
          props: {
            label: '日期',
            prop: 'date'
          }
        },
        children: []
      }, {
        name: 'ElTableColumn',
        nodeData: {
          props: {
            label: '标题',
            prop: 'name'
          }
        },
        children: []
      }, {
        name: 'ElTableColumn',
        nodeData: {
          props: {
            label: '地址',
            prop: 'address'
          }
        },
        children: []
      }]
    },
    ElBreadcrumbItem: {
      label: '面包屑单元',
      tag: 'ElBreadcrumbItem',
      uiConfig: {
        isHidden: true,
        isContainer: false
      },
      nodeData: {
        props: {
        },
        children: {
          label: '按钮文案',
          type: 'text'
        }
      },
      children: '面包'
    },
    ElBreadcrumb: {
      label: '面包屑',
      tag: 'ElBreadcrumb',
      uiConfig: {
        isContainer: false
      },
      nodeData: {
        props: {
          separator: '/',
          separatorClass: undefined
        }
      },
      control: {
        props: {
          separator: {
            label: '分隔符',
            type: 'text'
          },
          separatorClass: {
            label: '图标分隔符',
            type: 'text'
          }
        },
        children: {
          label: '面包单元',
          type: 'array',
          config: {
            columns: [{
              field: 'children',
              label: '内容',
              type: 'text'
            }]
          }
        }
      },
      children: [{
        name: 'ElBreadcrumbItem',
        children: '首页'
      }, {
        name: 'ElBreadcrumbItem',
        children: '次页'
      }, {
        name: 'ElBreadcrumbItem',
        children: '三叶'
      }, {
        name: 'ElBreadcrumbItem',
        children: '四叶'
      }]
    },
    ElPagination: {
      name: 'ElPagination',
      label: '分页器',
      tag: 'ElPagination',
      nodeData: {
        props: {
          small: false,
          background: false,
          pageSize: 10,
          total: 100,
          pagerCount: 7,
          currentPage: 1,
          layout: 'prev, pager, next, jumper, ->, total',
          pageSizes: [10, 20, 30, 40, 50, 100],
          prevText: '',
          nextText: '',
          disabled: false,
          hideOnSinglePage: false
        }
      },
      control: {
        props: {
          small: {
            label: '是否使用小型分页样式',
            type: 'boolean'
          },
          background: {
            label: '是否为分页按钮添加背景色',
            type: 'boolean'
          },
          pageSize: {
            label: '每页显示条目个数，支持 .sync 修饰符',
            type: 'number'
          },
          total: {
            label: '总条目数',
            type: 'number'
          },
          pagerCount: {
            label: '页码按钮的数量，当总页数超过该值时会折叠',
            type: 'number',
            config: {
              min: 5,
              max: 21,
              step: 2
            }
          },
          currentPage: {
            label: '当前页数，支持 .sync 修饰符',
            type: 'number'
          },
          layout: {
            label: '组件布局，子组件名用逗号分隔',
            type: 'text'
          },
          pageSizes: {
            label: '组件布局，子组件名用逗号分隔',
            type: 'array',
            config: {
              columns: [{
                label: '选项',
                type: 'number'
              }]
            }
          },
          prevText: {
            label: '替代图标显示的上一页文字',
            type: 'text'
          },
          nextText: {
            label: '替代图标显示的下一页文字',
            type: 'text'
          },
          disabled: {
            label: '禁用',
            type: 'boolean'
          },
          hideOnSinglePage: {
            label: '只有一页时是否隐藏',
            type: 'boolean'
          }
        }
      }
    },
    ElTimePicker: {
      name: 'ElTimePicker',
      tag: 'ElTimePicker',
      label: '时间选择器1',
      nodeData: {
        props: {
          value: `${new Date().getTime()}`,
          size: 'medium',
          placeholder: '',
          startPlaceholder: '',
          endPlaceholder: '',
          isRange: false,
          arrowControl: false,
          align: 'left',
          rangeSeparator: '-',
          valueFormat: 'timestamp',
          prefixIcon: 'el-icon-time',
          clearIcon: 'el-icon-circle-close',
          clearable: true,
          editable: false,
          readonly: false,
          disabled: false
        }
      },
      control: {
        props: {
          value: {
            type: 'text',
            label: '值'
          },
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
          placeholder: {
            type: 'text',
            label: '非范围选择时的占位内容'
          },
          startPlaceholder: {
            type: 'text',
            label: '范围选择时开始日期的占位内容'
          },
          endPlaceholder: {
            type: 'text',
            label: '范围选择时结束日期的占位内容'
          },
          isRange: {
            type: 'boolean',
            label: '是否为时间范围选择'
          },
          arrowControl: {
            type: 'boolean',
            label: '是否使用箭头进行时间选择'
          },
          align: {
            label: '对齐方式',
            type: 'radio',
            config: {
              selections: [{
                label: 'left',
                value: 'left'
              }, {
                label: 'center',
                value: 'center'
              }, {
                label: 'right',
                value: 'right'
              }]
            }
          },
          rangeSeparator: {
            type: 'text',
            label: '选择范围时的分隔符'
          },
          valueFormat: {
            type: 'text',
            label: '绑定值的格式'
          },
          prefixIcon: {
            type: 'text',
            label: '自定义头部图标的类名'
          },
          clearIcon: {
            type: 'text',
            label: '自定义清空图标的类名'
          },
          clearable: {
            type: 'boolean',
            label: '是否显示清除按钮'
          },
          editable: {
            type: 'boolean',
            label: '文本框可输入'
          },
          readonly: {
            type: 'boolean',
            label: '完全只读'
          },
          disabled: {
            type: 'boolean',
            label: '禁用'
          }
        }
      }
    },
    ElTimeSelect: {
      name: 'ElTimeSelect',
      tag: 'ElTimeSelect',
      label: '时间选择器2',
      nodeData: {
        props: {
          value: `${new Date().getTime()}`,
          size: 'medium',
          placeholder: '',
          startPlaceholder: '',
          endPlaceholder: '',
          align: 'left',
          valueFormat: 'timestamp',
          prefixIcon: 'el-icon-time',
          clearIcon: 'el-icon-circle-close',
          clearable: true,
          editable: false,
          readonly: false,
          disabled: false
        }
      },
      control: {
        props: {
          value: {
            type: 'text',
            label: '值'
          },
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
          placeholder: {
            type: 'text',
            label: '非范围选择时的占位内容'
          },
          startPlaceholder: {
            type: 'text',
            label: '范围选择时开始日期的占位内容'
          },
          endPlaceholder: {
            type: 'text',
            label: '范围选择时结束日期的占位内容'
          },
          align: {
            label: '对齐方式',
            type: 'radio',
            config: {
              selections: [{
                label: 'left',
                value: 'left'
              }, {
                label: 'center',
                value: 'center'
              }, {
                label: 'right',
                value: 'right'
              }]
            }
          },
          valueFormat: {
            type: 'text',
            label: '绑定值的格式'
          },
          prefixIcon: {
            type: 'text',
            label: '自定义头部图标的类名'
          },
          clearIcon: {
            type: 'text',
            label: '自定义清空图标的类名'
          },
          clearable: {
            type: 'boolean',
            label: '是否显示清除按钮'
          },
          editable: {
            type: 'boolean',
            label: '文本框可输入'
          },
          readonly: {
            type: 'boolean',
            label: '完全只读'
          },
          disabled: {
            type: 'boolean',
            label: '禁用'
          }
        }
      }
    },
    ElDatePicker: {
      name: 'ElDatePicker',
      tag: 'ElDatePicker',
      label: '日期选择器',
      nodeData: {
        props: {
          value: `${new Date().getTime()}`,
          type: 'date',
          size: 'small',
          placeholder: '',
          startPlaceholder: '',
          endPlaceholder: '',
          align: 'left',
          format: 'yyyy-MM-dd',
          valueFormat: 'timestamp',
          prefixIcon: 'el-icon-time',
          clearIcon: 'el-icon-circle-close',
          unlinkPanels: false,
          clearable: true,
          editable: false,
          readonly: false,
          disabled: false
        }
      },
      control: {
        props: {
          value: {
            type: 'text',
            label: '值'
          },
          type: {
            label: '选择器类型',
            type: 'radio',
            config: {
              selections: [{
                label: 'year',
                value: 'year'
              }, {
                label: 'month',
                value: 'month'
              }, {
                label: 'date',
                value: 'date'
              }, {
                label: 'dates',
                value: 'dates'
              }, {
                label: 'week',
                value: 'week'
              }, {
                label: 'datetime',
                value: 'datetime'
              }, {
                label: 'datetimerange',
                value: 'datetimerange'
              }, {
                label: 'daterange',
                value: 'daterange'
              }, {
                label: 'monthrange',
                value: 'monthrange'
              }]
            }
          },
          size: {
            label: '尺寸',
            type: 'radio',
            config: {
              selections: [{
                label: 'large',
                value: 'large'
              }, {
                label: 'small',
                value: 'small'
              }, {
                label: 'mini',
                value: 'mini'
              }]
            }
          },
          placeholder: {
            type: 'text',
            label: '非范围选择时的占位内容'
          },
          startPlaceholder: {
            type: 'text',
            label: '范围选择时开始日期的占位内容'
          },
          endPlaceholder: {
            type: 'text',
            label: '范围选择时结束日期的占位内容'
          },
          align: {
            label: '对齐方式',
            type: 'radio',
            config: {
              selections: [{
                label: 'left',
                value: 'left'
              }, {
                label: 'center',
                value: 'center'
              }, {
                label: 'right',
                value: 'right'
              }]
            }
          },
          valueFormat: {
            type: 'text',
            label: '绑定值的格式'
          },
          prefixIcon: {
            type: 'text',
            label: '自定义头部图标的类名'
          },
          clearIcon: {
            type: 'text',
            label: '自定义清空图标的类名'
          },
          clearable: {
            type: 'boolean',
            label: '是否显示清除按钮'
          },
          editable: {
            type: 'boolean',
            label: '文本框可输入'
          },
          readonly: {
            type: 'boolean',
            label: '完全只读'
          },
          disabled: {
            type: 'boolean',
            label: '禁用'
          }
        }
      }
    },
    ElCalendar: {
      name: 'ElCalendar',
      tag: 'ElCalendar',
      label: '日历',
      nodeData: {
        props: {
          value: '2019-03-04',
          range: ['2019-03-04', '2019-03-24']
        }
      },
      control: {
        props: {
          value: {
            type: 'text',
            label: '值'
          },
          range: {
            label: '时间范围',
            type: 'array',
            config: {
              operation: false,
              columns: [{
                label: '时间范围',
                text: 'text'
              }]
            }
          }
        }
      }
    },
    ElRate: {
      name: 'ElRate',
      tag: 'ElRate',
      label: '评分',
      nodeData: {
        props: {
          value: 2,
          max: 5,
          allowHalf: false,
          lowThreshold: 2,
          highThreshold: 2,
          // colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
          // voidColor: '#C6D1DE',
          // disabledVoidColor: '#EFF2F7',
          // iconClasses: ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'],
          showText: false,
          showScore: false,
          textColor: '1F2D3D',
          texts: ['极差', '失望', '一般', '满意', '惊喜'],
          disabled: false
        }
      },
      control: {
        props: {
          value: {
            type: 'number',
            label: '值'
          },
          max: {
            type: 'number',
            label: '值'
          },
          allowHalf: {
            type: 'boolean',
            label: '是否允许半选'
          },
          lowThreshold: {
            type: 'number',
            label: '低分和中等分数的界限值'
          },
          highThreshold: {
            type: 'number',
            label: '高分和中等分数的界限值'
          },
          showText: {
            type: 'boolean',
            label: '显示辅助文字'
          },
          showScore: {
            type: 'boolean',
            label: '显示当前分数'
          },
          textColor: {
            type: 'color',
            label: '辅助文字的颜色'
          },
          disabled: {
            type: 'boolean',
            label: '禁用'
          }
        }
      }
    },
    ElSubmenu: {
      name: 'ElSubmenu',
      tag: 'ElSubmenu',
      label: '水平二级菜单',
      uiConfig: {
        isHidden: true,
        isBoxWrap: false
      },
      nodeData: {
        props: {
          index: '1',
          disabled: false
        }
      },
      children: []
    },
    ElMenuItem: {
      name: 'ElMenuItem',
      tag: 'ElMenuItem',
      label: '菜单单元',
      uiConfig: {
        isBoxWrap: false
      },
      nodeData: {
        props: {
          index: '1',
          disabled: false
        }
      },
      control: {
        props: {
          index: {
            type: 'text',
            label: '索引'
          },
          disabled: {
            type: 'boolean',
            label: '禁用'
          }
        },
        children: {
          type: 'text',
          label: '标题'
        }
      },
      children: '菜单'
    },
    ElMenuY: {
      name: 'ElMenuY',
      tag: 'ElMenu',
      label: '横向菜单',
      boxConfig: {
        space: 0
      },
      uiConfig: {
        isContainer: true
      },
      nodeData: {
        props: {
          mode: 'horizontal',
          backgroundColor: '#ffffff',
          textColor: '#303133',
          activeTextColor: '#303133',
          defaultActive: '1',
          uniqueOpened: false,
          menuTrigger: 'hover',
        }
      },
      control: {
        props: {
          backgroundColor: {
            type: 'color',
            label: '菜单的背景色'
          },
          textColor: {
            type: 'color',
            label: '菜单的文字颜色'
          },
          activeTextColor: {
            type: 'color',
            label: '激活菜单的文字颜色'
          },
          defaultActive: {
            type: 'text',
            label: '当前激活菜单的index'
          },
          uniqueOpened: {
            type: 'boolean',
            label: '是否只保持一个子菜单的展开'
          },
          menuTrigger: {
            type: 'radio',
            label: '子菜单打开的触发方式',
            config: {
              selections: [{
                label: 'hover',
                value: 'hover'
              }, {
                label: 'click',
                value: 'click'
              }]
            }
          }
        }
      },
      children: [{
        name: 'ElMenuItem',
        nodeData: {
          props: {
            index: '1'
          }
        },
        children: '处理中心'
      }, {
        name: 'ElMenuItem',
        nodeData: {
          props: {
            index: '2'
          }
        },
        children: '我的工作台'
      }, {
        name: 'ElMenuItem',
        nodeData: {
          props: {
            index: '3'
          }
        },
        children: '消息中心'
      }, {
        name: 'ElMenuItem',
        nodeData: {
          props: {
            index: '4'
          }
        },
        children: '订单管理'
      }]
    }
  }
}
