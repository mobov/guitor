export default {
  name: 'base-ui',
  label: '基础组件库',
  components: {
    HContainerY: {
      label: '垂直容器',
      tag: 'HContainer',
      uiConfig: {
        isContainer: true
      },
      nodeData: {
        props: {
          flex: 1,
          space: 10,
          wrap: false,
          direction: 'y',
          justify: 'start',
          align: 'center'
        },
        style: {
          width: '100%',
          height: '100%'
        }
      },
      control: {
        props: {
          flex: {
            label: '容器占比',
            type: 'number',
            config: {
              step: 1
            }
          },
          space: {
            label: '留白',
            type: 'number',
            config: {
              step: 5
            }
          },
          direction: {
            label: '排列方向',
            type: 'radio',
            config: {
              selections: [{
                label: '水平',
                value: 'x'
              }, {
                label: '垂直',
                value: 'y'
              }]
            }
          },
          wrap: {
            label: '溢出换行',
            type: 'boolean',
          },
          justify: {
            label: '子元素的内容对齐方式',
            type: 'radio',
            config: {
              selections: [{
                label: '左对齐',
                value: 'start'
              }, {
                label: '居中',
                value: 'center'
              }, {
                label: '右对齐',
                value: 'end'
              }, {
                label: '环绕',
                value: 'around'
              }, {
                label: '两边',
                value: 'between'
              }]
            }
          },
          align: {
            label: '子元素的浮动对齐方式',
            type: 'radio',
            config: {
              selections: [{
                label: '置顶',
                value: 'start'
              }, {
                label: '居中',
                value: 'center'
              }, {
                label: '置底',
                value: 'end'
              }, {
                label: '填充',
                value: 'stretch'
              }]
            }
          }
        }
      }
    },
    HContainerX: {
      label: '水平容器',
      tag: 'HContainer',
      uiConfig: {
        isContainer: true
      },
      nodeData: {
        props: {
          flex: 1,
          space: 10,
          wrap: true,
          direction: 'x',
          justify: 'start',
          align: 'start'
        },
        style: {
          width: '100%',
          height: '100%'
        }
      },
      control: {
        props: {
          flex: {
            label: '容器占比',
            type: 'number',
            config: {
              step: 1
            }
          },
          space: {
            label: '留白',
            type: 'number',
            config: {
              step: 5
            }
          },
          direction: {
            label: '排列方向',
            type: 'radio',
            config: {
              selections: [{
                label: '水平',
                value: 'x'
              }, {
                label: '垂直',
                value: 'y'
              }]
            }
          },
          wrap: {
            label: '溢出换行',
            type: 'boolean',
          },
          justify: {
            label: '子元素的内容对齐方式',
            type: 'radio',
            config: {
              selections: [{
                label: '左对齐',
                value: 'start'
              }, {
                label: '居中',
                value: 'center'
              }, {
                label: '右对齐',
                value: 'end'
              }, {
                label: '环绕',
                value: 'around'
              }, {
                label: '两边',
                value: 'between'
              }]
            }
          },
          align: {
            label: '子元素的浮动对齐方式',
            type: 'radio',
            config: {
              selections: [{
                label: '置顶',
                value: 'start'
              }, {
                label: '居中',
                value: 'center'
              }, {
                label: '置底',
                value: 'end'
              }, {
                label: '填充',
                value: 'stretch'
              }]
            }
          }
        }
      }
    },
    HBox: {
      label: '盒子',
      tag: 'HBox',
      uiConfig: {
        isHidden: true,
        isContainer: false
      },
      nodeData: {
        props: {
          flex: 1,
          space: 5
        },
        style: {
          width: '100%',
          height: '100%'
        }
      },
      control: {
        props: {
          flex: {
            label: '容器占比',
            type: 'number',
            config: {
              step: 1
            }
          },
          space: {
            label: '留白',
            type: 'number',
            config: {
              step: 5
            }
          }
        }
      }
    }
  }
}
