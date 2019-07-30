export default {
  name: 'element-ui',
  label: 'element组件库',
  components: {
    ElContainer: {
      label: '布局容器',
      props: {
        direction: {
          label: '子元素的排列方向',
          value: 'horizontal',
          type: 'radio',
          config: {
            selections: [{
              label: 'horizontal',
              value: 'horizontal'
            }, {
              label: 'vertical',
              value: 'vertical'
            }]
          }
        }
      }
    },
    ElButton: {
      label: '按钮',
      hasChild: false,
      props: {
        size: {
          label: '尺寸',
          value: 'medium',
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
          value: 'primary',
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
          value: false,
          type: 'switch'
        },
        round: {
          label: '是否圆角按钮',
          value: false,
          type: 'switch'
        },
        circle: {
          label: '是否圆形按钮',
          value: false,
          type: 'switch'
        },
        loading: {
          label: '是否加载中状态',
          value: false,
          type: 'switch'
        },
        disabled: {
          label: '是否禁用状态',
          value: false,
          type: 'switch'
        },
        autofocus: {
          label: '是否默认聚焦',
          value: false,
          type: 'switch'
        },
        icon: {
          label: '图标类名',
          value: '',
          type: 'text'
        },
        nativeType: {
          label: '原生 type 属性',
          value: 'button',
          type: 'text',
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
      }
    }
  }
}
