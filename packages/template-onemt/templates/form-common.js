export default {
  name: '通用表单',
  UiNode: {
    "name": "ElForm",
    "library": "element-ui",
    "pid": "root",
    "uid": "01DJ7MM21CTJW074GMCWM2R2TN",
    "tag": "ElForm",
    "uiConfig": {
      "isLocked": false,
      "isContainer": true,
      "parentExcludes": [
        "ElForm"
      ]
    },
    "children": [
      {
        "name": "ElFormItem",
        "nodeData": {
          "props": {
            "label": "标题",
            "labelWidth": "80px",
            "required": false,
            "size": "medium"
          },
          "style": {},
          "attrs": {}
        },
        "children": [
          {
            "name": "ElInput",
            "boxConfig": {
              "flex": 1,
              "space": 0,
              "width": "100%"
            },
            "nodeData": {
              "props": {
                "value": "文本",
                "placeholder": "",
                "size": "medium",
                "type": "text",
                "maxLength": 999999,
                "minlength": 0,
                "showWordLimit": false,
                "clearable": false,
                "showPassword": false,
                "prefixIcon": "",
                "suffixIcon": "",
                "rows": 2,
                "autosize": false,
                "autocomplete": "off",
                "autofocus": false,
                "readonly": false,
                "resize": "none",
                "maxlength": 1
              },
              "style": {},
              "attrs": {}
            },
            "uid": "01DJ7MM21FF5J4V504HRBTF75D",
            "pid": "01DJ7MM21EZ72KNM9G923BNKSP",
            "tag": "ElInput",
            "uiConfig": {
              "isLocked": false,
              "isContainer": false
            },
            "children": []
          }
        ],
        "uid": "01DJ7MM21EZ72KNM9G923BNKSP",
        "pid": "01DJ7MM21CTJW074GMCWM2R2TN",
        "tag": "ElFormItem",
        "uiConfig": {
          "isLocked": false,
          "isContainer": true,
          "parentIncludes": [
            "ElForm"
          ]
        }
      },
      {
        "name": "ElFormItem",
        "nodeData": {
          "props": {
            "label": "选择",
            "labelWidth": "80px",
            "required": false,
            "size": "medium"
          },
          "style": {},
          "attrs": {}
        },
        "uid": "01DJ7MM21FM0YPQET6NSQTCE57",
        "pid": "01DJ7MM21CTJW074GMCWM2R2TN",
        "tag": "ElFormItem",
        "uiConfig": {
          "isLocked": false,
          "isContainer": true,
          "parentIncludes": [
            "ElForm"
          ]
        },
        "children": [
          {
            "name": "ElRadioGroup",
            "library": "element-ui",
            "pid": "01DJ7MM21FM0YPQET6NSQTCE57",
            "uid": "01DJ7MQQ8NCG6XVVJZAJ2RT833",
            "tag": "ElRadioGroup",
            "uiConfig": {
              "isLocked": false,
              "isContainer": false
            },
            "children": [
              {
                "name": "ElRadio",
                "nodeData": {
                  "props": {
                    "label": "单选1",
                    "value": "单选1",
                    "border": false
                  },
                  "style": {},
                  "attrs": {}
                },
                "uid": "01DJ7MQQ8RYPQ37N700JZRRQPJ",
                "pid": "01DJ7MQQ8NCG6XVVJZAJ2RT833",
                "tag": "ElRadio",
                "uiConfig": {
                  "isLocked": false,
                  "isContainer": false
                },
                "children": [],
                "boxConfig": {
                  "flex": 0,
                  "space": 5
                }
              },
              {
                "name": "ElRadio",
                "nodeData": {
                  "props": {
                    "label": "单选2",
                    "value": "单选1",
                    "border": false
                  },
                  "style": {},
                  "attrs": {}
                },
                "uid": "01DJ7MQQ8RAC1Z4TX7HRNQR28B",
                "pid": "01DJ7MQQ8NCG6XVVJZAJ2RT833",
                "tag": "ElRadio",
                "uiConfig": {
                  "isLocked": false,
                  "isContainer": false
                },
                "children": [],
                "boxConfig": {
                  "flex": 0,
                  "space": 5
                }
              }
            ],
            "nodeData": {
              "style": {},
              "attrs": {},
              "props": {
                "value": "输入值",
                "textColor": "#ffffff",
                "fill": "#409EFF"
              }
            },
            "boxConfig": {
              "flex": 1,
              "space": 0
            }
          }
        ]
      },
      {
        "name": "ElFormItem",
        "nodeData": {
          "props": {
            "label": "开关",
            "labelWidth": "80px",
            "required": false,
            "size": "medium"
          },
          "style": {},
          "attrs": {}
        },
        "uid": "01DJ7MM21FYMRXRW3Q505PM69Q",
        "pid": "01DJ7MM21CTJW074GMCWM2R2TN",
        "tag": "ElFormItem",
        "uiConfig": {
          "isLocked": false,
          "isContainer": true,
          "parentIncludes": [
            "ElForm"
          ]
        },
        "children": [
          {
            "name": "ElSwitch",
            "library": "element-ui",
            "pid": "01DJ7MM21FYMRXRW3Q505PM69Q",
            "uid": "01DJ7MR3GCAY577V1613GWY2ZH",
            "tag": "ElSwitch",
            "uiConfig": {
              "isLocked": false,
              "isContainer": false
            },
            "children": [],
            "nodeData": {
              "style": {},
              "attrs": {},
              "props": {
                "value": false,
                "disabled": false,
                "activeColor": "#13ce66",
                "inactiveColor": "#ff4949",
                "activeText": "",
                "inactiveText": ""
              }
            },
            "boxConfig": {
              "flex": 0,
              "space": 0
            }
          }
        ]
      },
      {
        "name": "ElFormItem",
        "nodeData": {
          "props": {
            "label": "",
            "labelWidth": "80px",
            "required": false,
            "size": "medium"
          },
          "style": {},
          "attrs": {}
        },
        "uid": "01DJ7MM21GRMDA669T0HJ05450",
        "pid": "01DJ7MM21CTJW074GMCWM2R2TN",
        "tag": "ElFormItem",
        "uiConfig": {
          "isLocked": false,
          "isContainer": true,
          "parentIncludes": [
            "ElForm"
          ]
        },
        "children": [
          {
            "name": "HContainer",
            "library": "base-ui",
            "pid": "01DJ7MM21GRMDA669T0HJ05450",
            "uid": "01DJ7MMRECNY48MHP0MXJ7W181",
            "tag": "HContainer",
            "uiConfig": {
              "isLocked": false,
              "isContainer": true
            },
            "children": [
              {
                "name": "ElButton",
                "library": "element-ui",
                "pid": "01DJ7MMRECNY48MHP0MXJ7W181",
                "uid": "01DJ7MMYWCE2SFAPVNXEXNT5DG",
                "tag": "ElButton",
                "uiConfig": {
                  "isLocked": false,
                  "isContainer": false
                },
                "children": "确定",
                "nodeData": {
                  "style": {},
                  "attrs": {},
                  "props": {
                    "type": "primary",
                    "size": "small",
                    "plain": false,
                    "round": false,
                    "circle": false,
                    "loading": false,
                    "autofocus": false,
                    "icon": "",
                    "nativeType": "button"
                  }
                },
                "boxConfig": {
                  "flex": 0,
                  "space": 5
                }
              },
              {
                "name": "ElButton",
                "library": "element-ui",
                "pid": "01DJ7MMRECNY48MHP0MXJ7W181",
                "uid": "01DJ7MN0ZDMNSM4P7ABBKJNG1Z",
                "tag": "ElButton",
                "uiConfig": {
                  "isLocked": false,
                  "isContainer": false
                },
                "children": "取消",
                "nodeData": {
                  "style": {},
                  "attrs": {},
                  "props": {
                    "type": "info",
                    "size": "small",
                    "plain": false,
                    "round": false,
                    "circle": false,
                    "loading": false,
                    "autofocus": false,
                    "icon": "",
                    "nativeType": "button"
                  }
                },
                "boxConfig": {
                  "flex": 0,
                  "space": 5
                }
              }
            ],
            "nodeData": {
              "style": {},
              "attrs": {},
              "props": {
                "flex": 1,
                "space": 0,
                "wrap": false,
                "direction": "x",
                "justify": "start",
                "align": "center"
              }
            }
          }
        ]
      },
      {
        "name": "ElFormItem",
        "library": "element-ui",
        "pid": "01DJ7MM21CTJW074GMCWM2R2TN",
        "uid": "01DJ7MRH0X3G9ESXA38EN3DBEC",
        "tag": "ElFormItem",
        "uiConfig": {
          "isLocked": false,
          "isContainer": true,
          "parentIncludes": [
            "ElForm"
          ]
        },
        "children": [
          {
            "name": "ElSelect",
            "library": "element-ui",
            "pid": "01DJ7MRH0X3G9ESXA38EN3DBEC",
            "uid": "01DJ7MRV5WJC9CABC44HXG193P",
            "tag": "ElSelect",
            "uiConfig": {
              "isLocked": false,
              "isContainer": false
            },
            "children": [
              {
                "name": "ElOption",
                "nodeData": {
                  "props": {
                    "label": "选项1",
                    "value": "选项1"
                  },
                  "style": {},
                  "attrs": {}
                },
                "uid": "01DJ7MRV5XS3P5B07VAFVB7E23",
                "pid": "01DJ7MRV5WJC9CABC44HXG193P",
                "tag": "ElOption",
                "uiConfig": {
                  "isLocked": false,
                  "isContainer": false,
                  "isHidden": true
                },
                "children": [],
                "boxConfig": {
                  "flex": 0,
                  "space": 5
                }
              },
              {
                "name": "ElOption",
                "nodeData": {
                  "props": {
                    "label": "选项2",
                    "value": "选项2"
                  },
                  "style": {},
                  "attrs": {}
                },
                "uid": "01DJ7MRV5YXTJ13MMT6ZJ5KHWZ",
                "pid": "01DJ7MRV5WJC9CABC44HXG193P",
                "tag": "ElOption",
                "uiConfig": {
                  "isLocked": false,
                  "isContainer": false,
                  "isHidden": true
                },
                "children": [],
                "boxConfig": {
                  "flex": 0,
                  "space": 5
                }
              }
            ],
            "nodeData": {
              "style": {},
              "attrs": {},
              "props": {
                "value": "选项1",
                "multiple": false,
                "size": "medium",
                "max": 100,
                "step": 1,
                "disabled": false,
                "clearable": false,
                "multipleLimit": 0,
                "filterable": false,
                "allowCreate": true,
                "loading": false,
                "loadingText": "加载中",
                "noMatchText": "无匹配数据",
                "noDataText": "无数据",
                "placeholder": "请选择"
              }
            },
            "boxConfig": {
              "flex": 1,
              "space": 0
            }
          }
        ],
        "nodeData": {
          "style": {},
          "attrs": {},
          "props": {
            "label": "下拉选择",
            "labelWidth": "80px",
            "required": false,
            "size": "medium"
          }
        }
      }
    ],
    "nodeData": {
      "style": {
        "padding": "5px",
        "width": "100%"
      },
      "attrs": {},
      "props": {
        "inline": false,
        "labelPosition": "left",
        "labelWidth": "80px",
        "labelSuffix": "",
        "hideRequiredAsterisk": false,
        "size": "medium"
      }
    }
  }
}
