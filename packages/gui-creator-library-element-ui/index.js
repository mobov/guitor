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
        },
        domProps: {
          innerText: '按钮'
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
        domProps: {
          innerText: {
            type: 'text'
          }
        }
      }
    },
    ElInput: {
      tag: 'ElInput',
      label: '输入框',
      boxConfig: {
        flex: 1
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
    ElRadioGroup: {
      tag: 'ElRadioGroup',
      label: '单选组',
      boxConfig: {
        flex: 0
      },
      nodeData: {
        props: {
          value: '输入值',
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
      },
      children: [
        {
          name: 'ElRadio',
          nodeData: {
            props: {
              value: '单选1',
              label: '单选1'
            }
          }
        },
        {
          name: 'ElRadio',
          nodeData: {
            props: {
              value: '单选2',
              label: '单选2'
            }
          }
        }
      ]
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
        },
        domProps: {
          innerText: '标签'
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
        domProps: {
          innerText: {
            type: 'text'
          }
        }
      },
      // children: [{
      //   tag: 'span',
      //
      //   domProps: {
      //     innerText: '标签'
      //   }
      // }]
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
        },
        domProps: {
          innerText: '超链接'
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
        domProps: {
          innerText: {
            type: 'text'
          }
        }
      }
      // children: [{
      //   tag: 'span',
      //
      //   domProps: {
      //     innerText: '标签'
      //   }
      // }]
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
        flex: 1
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
    }
    // ElFormItem: {
    //   tag: 'ElFormItem',
    //   label: '表单单元-文本'
    // }
  }
}
