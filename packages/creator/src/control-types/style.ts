export default {
  backgroundImage: {
    type: 'image',
    label: '背景图片',
    value: ''
  },
  backgroundColor: {
    type: 'color',
    label: '背景颜色',
    value: 'rgba(0, 0, 0, 0)'
  },
  backgroundRepeat: {
    type: 'radio',
    label: '背景重复',
    value: 'no-repeat',
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
  color: {
    type: 'color',
    label: '颜色',
    value: 'rgba(0, 0, 0, 0)'
  },
  fontSize: {
    type: 'size',
    label: '字体大小',
    value: '12px'
  },
  lineHeight: {
    type: 'number',
    label: '行高',
    value: 1.2,
    config: {
      step: .2
    }
  },
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
        label: '行内',
        value: 'inline'
      }, {
        label: '流体',
        value: 'flex'
      }, {
        label: '行内流体',
        value: 'inline-flex'
      }, {
        label: '不显示',
        value: 'none'
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
    value: 1
  },
  margin: {
    type: 'size',
    label: '外边距',
    value: '0px'
  },
  padding: {
    type: 'size',
    label: '内边距',
    value: '0px'
  },
  marginLeft: {
    type: 'size',
    label: '外左边距',
    value: '0px'
  },
  marginRight: {
    type: 'size',
    label: '外右边距',
    value: '0px'
  },
  marginTop: {
    type: 'size',
    label: '外上边距',
    value: '0px'
  },
  marginBottom: {
    type: 'size',
    label: '外下边距',
    value: '0px'
  },
  paddingLeft: {
    type: 'size',
    label: '内左边距',
    value: '0px'
  },
  paddingRight: {
    type: 'size',
    label: '内右边距',
    value: '0px'
  },
  paddingTop: {
    type: 'size',
    label: '内上边距',
    value: '0px'
  },
  paddingBottom: {
    type: 'size',
    label: '内下边距',
    value: '0px'
  }
}
