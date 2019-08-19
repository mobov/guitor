export default {
  name: 'base-ui',
  label: '基础组件库',
  components: {
    // HFrame: {
    //   label: '框架',
    //   tag: 'HFrame',
    //   uiConfig: {
    //     isContainer: false,
    //     isBoxWrap: false
    //   },
    //   nodeData: {
    //     props: {
    //       transition: true,
    //       fillHeader: 'both',
    //       fillFooter: 'both',
    //       isHeader: false,
    //       isFooter: false,
    //       isLeft: false,
    //       isRight: false,
    //       headerSize: 50,
    //       footerSize: 50,
    //       leftSize: 300,
    //       rightSize: 300,
    //       headerIndex: 1,
    //       footerIndex: 1,
    //       leftIndex: 1,
    //       rightIndex: 1,
    //       headerFloat: false,
    //       footerFloat: false,
    //       leftFloat: false,
    //       rightFloat: false
    //     },
    //     style: {
    //       width: '100%',
    //       height: '100%'
    //     }
    //   },
    //   control: {
    //     props: {
    //       fillHeader: {
    //         type: 'radio',
    //         label: '头部填充',
    //         config: {
    //           selections: [{
    //             value: 'both',
    //             label: '填充两边'
    //           }, {
    //             value: 'left',
    //             label: '填充左边'
    //           }, {
    //             value: 'right',
    //             label: '填充右边'
    //           }, {
    //             value: 'none',
    //             label: '不填充'
    //           }]
    //         }
    //       },
    //       fillFooter: {
    //         type: 'radio',
    //         label: '底部填充',
    //         config: {
    //           selections: [{
    //             value: 'both',
    //             label: '填充两边'
    //           }, {
    //             value: 'left',
    //             label: '填充左边'
    //           }, {
    //             value: 'right',
    //             label: '填充右边'
    //           }, {
    //             value: 'none',
    //             label: '不填充'
    //           }]
    //         }
    //       },
    //       isHeader: {
    //         type: 'boolean',
    //         label: '显示头部'
    //       },
    //       isFooter: {
    //         type: 'boolean',
    //         label: '显示底部'
    //       },
    //       isLeft: {
    //         type: 'boolean',
    //         label: '显示左边'
    //       },
    //       isRight: {
    //         type: 'boolean',
    //         label: '显示右边'
    //       },
    //       transition: {
    //         type: 'boolean'
    //       },
    //       headerSize: {
    //         type: 'size'
    //       },
    //       footerSize: {
    //         type: 'size'
    //       },
    //       leftSize: {
    //         type: 'size'
    //       },
    //       rightSize: {
    //         type: 'size'
    //       },
    //       headerIndex: {
    //         type: 'number'
    //       },
    //       footerIndex: {
    //         type: 'number'
    //       },
    //       leftIndex: {
    //         type: 'number'
    //       },
    //       rightIndex: {
    //         type: 'number'
    //       },
    //       headerFloat: {
    //         type: 'boolean'
    //       },
    //       footerFloat: {
    //         type: 'boolean'
    //       },
    //       leftFloat: {
    //         type: 'boolean'
    //       },
    //       rightFloat: {
    //         type: 'boolean'
    //       }
    //     }
    //   },
    //   children: [{
    //     name: 'HView',
    //     slot: 'left'
    //   }, {
    //     name: 'HView',
    //     slot: 'right'
    //   }, {
    //     name: 'HContainer',
    //     nodeData: {
    //       slot: 'header',
    //       props: {
    //         direction: 'y',
    //       }
    //     }
    //   }, {
    //     name: 'HContainer',
    //     nodeData: {
    //       slot: 'footer',
    //       props: {
    //         direction: 'y',
    //       }
    //     }
    //   }]
    // },
    HView: {
      label: '视图',
      tag: 'HView',
      uiConfig: {
        isContainer: true,
        isBoxWrap: false
      },
      nodeData: {
        props: {
          flex: 1,
          space: 10
        },
        style: {
          width: '100%',
          height: '100%'
        }
      },
      control: {
        props: {
          flex: {
            label: '水平容器占比',
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
          // direction: {
          //   label: '视图方向',
          //   type: 'radio',
          //   config: {
          //     selections: [{
          //       label: '水平',
          //       value: 'x'
          //     }, {
          //       label: '垂直',
          //       value: 'y'
          //     }]
          //   }
          // },
        }
      }
    },
    // HRow: {
    //   label: '行容器',
    //   tag: 'HContainer',
    //   uiConfig: {
    //     isContainer: true,
    //     isBoxWrap: false
    //   },
    //   nodeData: {
    //     props: {
    //       flex: 1,
    //       space: 10,
    //       wrap: false,
    //       direction: 'x',
    //       justify: 'start',
    //       align: 'center'
    //     }
    //   },
    //   control: {
    //     props: {
    //       flex: {
    //         label: '水平容器占比',
    //         type: 'number',
    //         config: {
    //           step: 1
    //         }
    //       },
    //       space: {
    //         label: '留白',
    //         type: 'number',
    //         config: {
    //           step: 5
    //         }
    //       },
    //       direction: {
    //         label: '排列方向',
    //         type: 'radio',
    //         config: {
    //           selections: [{
    //             label: '水平',
    //             value: 'x'
    //           }, {
    //             label: '垂直',
    //             value: 'y'
    //           }]
    //         }
    //       },
    //       wrap: {
    //         label: '溢出换行',
    //         type: 'boolean',
    //       },
    //       justify: {
    //         label: '子元素的内容对齐方式',
    //         type: 'radio',
    //         config: {
    //           selections: [{
    //             label: '左对齐',
    //             value: 'start'
    //           }, {
    //             label: '居中',
    //             value: 'center'
    //           }, {
    //             label: '右对齐',
    //             value: 'end'
    //           }, {
    //             label: '环绕',
    //             value: 'around'
    //           }, {
    //             label: '两边',
    //             value: 'between'
    //           }]
    //         }
    //       },
    //       align: {
    //         label: '子元素的浮动对齐方式',
    //         type: 'radio',
    //         config: {
    //           selections: [{
    //             label: '置顶',
    //             value: 'start'
    //           }, {
    //             label: '居中',
    //             value: 'center'
    //           }, {
    //             label: '置底',
    //             value: 'end'
    //           }, {
    //             label: '填充',
    //             value: 'stretch'
    //           }]
    //         }
    //       }
    //     }
    //   }
    // },
    HContainerX: {
      label: '水平容器',
      tag: 'HContainerX',
      uiConfig: {
        isContainer: true,
        isBoxWrap: false
      },
      nodeData: {
        props: {
          flex: 0,
          space: 10,
          wrap: false,
          justify: 'start',
          align: 'center'
        }
      },
      control: {
        props: {
          flex: {
            label: '水平容器占比',
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
    HContainerY: {
      label: '垂直容器',
      tag: 'HContainerY',
      uiConfig: {
        isContainer: true,
        isBoxWrap: false
      },
      nodeData: {
        props: {
          // flex: 0,
          space: 10,
          justify: 'start',
          align: 'center'
        }
      },
      control: {
        props: {
          flex: {
            label: '水平容器占比',
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
        },

      }
    },
    HBox: {
      label: '盒子',
      tag: 'HBox',
      uiConfig: {
        isHidden: true,
        isContainer: false,
        isBoxWrap: false
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
            label: '水平容器占比',
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
