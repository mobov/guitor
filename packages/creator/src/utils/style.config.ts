export const groups = [{
  name: '盒模型',
  attrs: [
    'height', 'width', 'margin', 'padding',
    'marginLeft', 'marginRight', 'marginTop', 'marginBottom',
    'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'
  ]
}, {
  name: '背景相关',
  attrs: [
    'backgroundImage', 'backgroundColor', 'backgroundSize', 'backgroundPositionX',
    'backgroundPositionY', 'backgroundRepeat']
}, {
  name: '字体相关',
  attrs: ['fontSize', 'lineHeight', 'color']
}]

// {
//   name: '显示和定位',
//     attrs: ['display', 'position', 'zIndex']
// }

export const styles = {
  height: {
    type: 'size',
    label: '高度',
    value: '0px',
    config: {
      step: 5
    }
  },
  width: {
    type: 'size',
    label: '宽度',
    value: '0px',
    config: {
      step: 5
    }
  },
  margin: {
    type: 'size',
    label: '外边距',
    value: '0px',
    config: {
      step: 5
    }
  },
  padding: {
    type: 'size',
    label: '内边距',
    value: '0px',
    config: {
      step: 5
    }
  },
  marginLeft: {
    type: 'size',
    label: '外左边距',
    value: '0px',
    config: {
      step: 5
    }
  },
  marginRight: {
    type: 'size',
    label: '外右边距',
    value: '0px',
    config: {
      step: 5
    }
  },
  marginTop: {
    type: 'size',
    label: '外上边距',
    value: '0px',
    config: {
      step: 5
    }
  },
  marginBottom: {
    type: 'size',
    label: '外下边距',
    value: '0px',
    config: {
      step: 5
    }
  },
  paddingLeft: {
    type: 'size',
    label: '内左边距',
    value: '0px',
    config: {
      step: 5
    }
  },
  paddingRight: {
    type: 'size',
    label: '内右边距',
    value: '0px',
    config: {
      step: 5
    }
  },
  paddingTop: {
    type: 'size',
    label: '内上边距',
    value: '0px',
    config: {
      step: 5
    }
  },
  paddingBottom: {
    type: 'size',
    label: '内下边距',
    value: '0px',
    config: {
      step: 5
    }
  },
  backgroundColor: {
    type: 'color',
    label: '背景颜色',
    value: 'rgba(0, 0, 0, 0)'
  },
  backgroundImage: {
    type: 'image',
    label: '背景图片',
    value: ''
  },
  backgroundSize: {
    type: 'radio',
    label: '背景尺寸',
    value: 'cover',
    config: {
      selections: [{
        label: '适应',
        value: 'contain'
      }, {
        label: '平铺',
        value: 'cover'
      }, {
        label: '铺满',
        value: '100% 100%'
      }]
    }
  },
  backgroundPositionX: {
    type: 'radio',
    label: '背景X轴位置',
    value: 'left',
    config: {
      selections: [{
        label: '左对齐',
        value: 'left'
      }, {
        label: '居中',
        value: 'center'
      }, {
        label: '右对齐',
        value: 'right'
      }]
    }
  },
  backgroundPositionY: {
    type: 'radio',
    label: '背景Y轴位置',
    value: 'left',
    config: {
      selections: [{
        label: '上对齐',
        value: 'left'
      }, {
        label: '居中',
        value: 'center'
      }, {
        label: '下对齐',
        value: 'right'
      }]
    }
  },
  backgroundRepeat: {
    type: 'radio',
    label: '背景重复',
    value: 'repeat',
    config: {
      selections: [{
        label: '重复',
        value: 'repeat'
      }, {
        label: 'X轴重复',
        value: 'repeat-x'
      }, {
        label: 'Y轴重复',
        value: 'repeat-y'
      }, {
        label: '不重复',
        value: 'no-repeat'
      }]
    }
  },
  fontSize: {
    type: 'size',
    label: '字体大小',
    value: '12px',
    config: {
      step: 2
    }
  },
  lineHeight: {
    type: 'number',
    label: '行高',
    value: 1.2,
    config: {
      step: 0.2
    }
  },
  color: {
    type: 'color',
    label: '颜色',
    value: 'rgba(0, 0, 0, 0)'
  },
  display: {
    type: 'radio',
    label: '显示',
    value: 'block',
    config: {
      selections: [{
        label: '块',
        value: 'block'
      }, {
        label: '行内块',
        value: 'inline-block'
      }, {
        label: '流体',
        value: 'flex'
      }, {
        label: '行内流体',
        value: 'inline-flex'
      }]
    }
  },
  position: {
    type: 'radio',
    label: '定位',
    value: 'relative',
    config: {
      selections: [{
        label: '相对定位',
        value: 'relative'
      }, {
        label: '绝对定位',
        value: 'absolute'
      }, {
        label: '窗口定位',
        value: 'fixed'
      }]
    }
  },
  zIndex: {
    type: 'number',
    label: '层级',
    value: 1,
    config: {
      step: 1
    }
  }
}
