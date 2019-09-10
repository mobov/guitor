export default {
  name: '通用搜索表格',
  UiNode: {
    "name": "HContainerY",
    "library": "base-ui",
    "pid": "root",
    "uid": "01DMCWV537BD9E1EBRG8ECZBM8",
    "uiConfig": {
      "isContainer": true,
      "isBoxWrap": false,
      "isLocked": false
    },
    "nodeData": {
      "style": {},
      "props": {
        "space": 10,
        "justify": "start",
        "align": "stretch",
        "flex": 1
      }
    },
    "children": [
      {
        "name": "HContainerX",
        "library": "base-ui",
        "pid": "01DMCWV537BD9E1EBRG8ECZBM8",
        "uid": "01DMCWV8GFCS2NBQEC9FFRH73K",
        "uiConfig": {
          "isContainer": true,
          "isBoxWrap": false,
          "isLocked": false
        },
        "nodeData": {
          "style": {},
          "props": {
            "space": "0px 0px 0px 0px",
            "flex": 1,
            "wrap": false,
            "justify": "start",
            "align": "center"
          }
        },
        "children": [
          {
            "name": "ElInput",
            "library": "element-ui",
            "pid": "01DMCWV8GFCS2NBQEC9FFRH73K",
            "uid": "01DMCWVCP69WVF43CF797RVRR2",
            "boxConfig": {
              "space": 5,
              "flex": 1,
              "width": "100%"
            },
            "uiConfig": {
              "isContainer": false,
              "isBoxWrap": true,
              "isLocked": false
            },
            "nodeData": {
              "style": {},
              "props": {
                "value": "输入值",
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
              }
            },
            "children": [],
            "tag": "ElInput",
            "label": "输入框",
            "control": {
              "props": {
                "value": {
                  "label": "输入值",
                  "type": "text",
                  "model": true
                },
                "placeholder": {
                  "label": "占位文本",
                  "type": "text"
                },
                "size": {
                  "label": "尺寸",
                  "type": "radio",
                  "toolTip": "输入框尺寸，只在 type!=\"textarea\" 时有效",
                  "config": {
                    "selections": [
                      {
                        "label": "medium",
                        "value": "medium"
                      },
                      {
                        "label": "small",
                        "value": "small"
                      },
                      {
                        "label": "mini",
                        "value": "mini"
                      }
                    ]
                  }
                },
                "type": {
                  "label": "类型",
                  "type": "radio",
                  "toolTip": "text，textarea 和其他 原生 input 的 type 值",
                  "config": {
                    "selections": [
                      {
                        "label": "text",
                        "value": "text"
                      },
                      {
                        "label": "textarea",
                        "value": "textarea"
                      },
                      {
                        "label": "number",
                        "value": "number"
                      }
                    ]
                  }
                },
                "maxlength": {
                  "label": "最大输入长度",
                  "type": "number",
                  "toolTip": "最大输入长度"
                },
                "minlength": {
                  "label": "最小输入长度",
                  "type": "number",
                  "toolTip": "最小输入长度"
                },
                "showWordLimit": {
                  "label": "字数统计",
                  "type": "boolean",
                  "toolTip": "是否显示输入字数统计，只在 type = \"text\" 或 type = \"textarea\" 时有效"
                },
                "clearable": {
                  "label": "可清空",
                  "type": "boolean"
                },
                "showPassword": {
                  "label": "是否显示切换密码图标",
                  "type": "boolean"
                },
                "prefixIcon": {
                  "label": "输入框头部图标",
                  "type": "text"
                },
                "suffixIcon": {
                  "label": "输入框尾部图标",
                  "type": "text"
                },
                "rows": {
                  "label": "输入框行数",
                  "type": "number",
                  "toolTip": "输入框行数，只对 type=\"textarea\" 有效"
                },
                "autosize": {
                  "label": "自适应内容高度",
                  "type": "boolean"
                },
                "autocomplete": {
                  "label": "自动补全",
                  "type": "radio",
                  "toolTip": "原生属性，自动补全",
                  "config": {
                    "selections": [
                      {
                        "label": "on",
                        "value": "on"
                      },
                      {
                        "label": "off",
                        "value": "off"
                      }
                    ]
                  }
                },
                "autofocus": {
                  "label": "自动聚焦",
                  "type": "boolean"
                },
                "readonly": {
                  "label": "只读",
                  "type": "boolean"
                },
                "resize": {
                  "label": "缩放",
                  "type": "radio",
                  "toolTip": "控制是否能被用户缩放",
                  "config": {
                    "selections": [
                      {
                        "label": "none",
                        "value": "none"
                      },
                      {
                        "label": "both",
                        "value": "both"
                      },
                      {
                        "label": "horizontal",
                        "value": "horizontal"
                      },
                      {
                        "label": "vertical",
                        "value": "vertical"
                      }
                    ]
                  }
                }
              }
            }
          },
          {
            "name": "ElButton",
            "library": "element-ui",
            "pid": "01DMCWV8GFCS2NBQEC9FFRH73K",
            "uid": "01DMCWVF1Y0RMXT69HZ948HBWG",
            "boxConfig": {
              "space": 5,
              "flex": 0
            },
            "uiConfig": {
              "isContainer": false,
              "isBoxWrap": true,
              "isLocked": false
            },
            "nodeData": {
              "style": {},
              "props": {
                "type": "primary",
                "size": "medium",
                "plain": false,
                "round": false,
                "circle": false,
                "loading": false,
                "autofocus": false,
                "icon": "el-icon-search",
                "nativeType": "button"
              }
            },
            "children": "搜索",
            "label": "按钮",
            "tag": "ElButton",
            "control": {
              "props": {
                "type": {
                  "label": "主题",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "primary",
                        "value": "primary"
                      },
                      {
                        "label": "success",
                        "value": "success"
                      },
                      {
                        "label": "warning",
                        "value": "warning"
                      },
                      {
                        "label": "danger",
                        "value": "danger"
                      },
                      {
                        "label": "info",
                        "value": "info"
                      },
                      {
                        "label": "text",
                        "value": "text"
                      }
                    ]
                  }
                },
                "size": {
                  "label": "尺寸",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "medium",
                        "value": "medium"
                      },
                      {
                        "label": "small",
                        "value": "small"
                      },
                      {
                        "label": "mini",
                        "value": "mini"
                      }
                    ]
                  }
                },
                "plain": {
                  "label": "是否朴素按钮",
                  "type": "boolean"
                },
                "round": {
                  "label": "是否圆角按钮",
                  "type": "boolean"
                },
                "circle": {
                  "label": "是否圆形按钮",
                  "type": "boolean"
                },
                "loading": {
                  "label": "是否加载中状态",
                  "type": "boolean"
                },
                "autofocus": {
                  "label": "是否默认聚焦",
                  "type": "boolean"
                },
                "icon": {
                  "label": "图标类名",
                  "type": "text"
                },
                "nativeType": {
                  "label": "原生 type 属性",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "button",
                        "value": "button"
                      },
                      {
                        "label": "submit",
                        "value": "submit"
                      },
                      {
                        "label": "reset",
                        "value": "reset"
                      }
                    ]
                  }
                }
              },
              "children": {
                "label": "按钮文案",
                "type": "text"
              }
            }
          }
        ],
        "label": "水平容器",
        "tag": "HContainerX",
        "control": {
          "props": {
            "space": {
              "label": "留白",
              "type": "space",
              "config": {
                "step": 5
              }
            },
            "flex": {
              "label": "水平容器占比",
              "type": "number",
              "config": {
                "step": 1
              }
            },
            "wrap": {
              "label": "溢出换行",
              "type": "boolean"
            },
            "justify": {
              "label": "子元素的内容对齐方式",
              "type": "radio",
              "config": {
                "selections": [
                  {
                    "label": "左对齐",
                    "value": "start"
                  },
                  {
                    "label": "居中",
                    "value": "center"
                  },
                  {
                    "label": "右对齐",
                    "value": "end"
                  },
                  {
                    "label": "环绕",
                    "value": "around"
                  },
                  {
                    "label": "两边",
                    "value": "between"
                  }
                ]
              }
            },
            "align": {
              "label": "子元素的浮动对齐方式",
              "type": "radio",
              "config": {
                "selections": [
                  {
                    "label": "置顶",
                    "value": "start"
                  },
                  {
                    "label": "居中",
                    "value": "center"
                  },
                  {
                    "label": "置底",
                    "value": "end"
                  },
                  {
                    "label": "填充",
                    "value": "stretch"
                  }
                ]
              }
            }
          }
        }
      },
      {
        "name": "ElTable",
        "library": "element-ui",
        "pid": "01DMCWV537BD9E1EBRG8ECZBM8",
        "uid": "01DMCWVXH7ZS7Q749BMQTGY447",
        "boxConfig": {
          "space": 5,
          "flex": 1
        },
        "uiConfig": {
          "isContainer": false,
          "isBoxWrap": true,
          "isLocked": false
        },
        "nodeData": {
          "style": {
            "width": "100%"
          },
          "props": {
            "data": [
              {
                "date": "2016-05-02",
                "name": "王小虎",
                "address": "上海市普陀区金沙江路 1518 弄"
              },
              {
                "date": "2016-05-02",
                "name": "王小虎",
                "address": "上海市普陀区金沙江路 1518 弄"
              },
              {
                "date": "2016-05-02",
                "name": "王小虎",
                "address": "上海市普陀区金沙江路 1518 弄"
              },
              {
                "date": "2016-05-02",
                "name": "王小虎",
                "address": "上海市普陀区金沙江路 1518 弄"
              },
              {
                "date": "2016-05-02",
                "name": "王小虎",
                "address": "上海市普陀区金沙江路 1518 弄"
              },
              {
                "date": "2016-05-02",
                "name": "王小虎",
                "address": "上海市普陀区金沙江路 1518 弄"
              }
            ],
            "stripe": false,
            "border": true,
            "size": "medium",
            "fit": true,
            "showHeader": true,
            "highlightCurrentRow": false,
            "emptyText": "暂无数据",
            "defaultExpandAll": false,
            "showSummary": false,
            "sumText": "合计",
            "indent": 16
          }
        },
        "children": [
          {
            "name": "ElTableColumn",
            "nodeData": {
              "props": {
                "label": "日期",
                "prop": "date",
                "type": "none",
                "width": "auto",
                "sortable": false,
                "resizable": true,
                "showOverflowTooltip": false,
                "align": "left",
                "headerAlign": "left"
              },
              "style": {}
            },
            "children": [],
            "uid": "01DMCWVXH9DVRK6MYJRFYDZP0F",
            "pid": "01DMCWVXH7ZS7Q749BMQTGY447",
            "library": "element-ui",
            "uiConfig": {
              "isContainer": false,
              "isBoxWrap": false,
              "isLocked": false,
              "isHidden": true
            },
            "label": "表格单元",
            "tag": "ElTableColumn",
            "control": {
              "props": {
                "type": {
                  "label": "列类型",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "selection",
                        "value": "selection"
                      },
                      {
                        "label": "index",
                        "value": "index"
                      },
                      {
                        "label": "expand",
                        "value": "expand"
                      },
                      {
                        "label": "none",
                        "value": "none"
                      }
                    ]
                  }
                },
                "label": {
                  "label": "列标题",
                  "type": "text"
                },
                "width": {
                  "label": "宽度",
                  "type": "size"
                },
                "fixed": {
                  "label": "固定列",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      }
                    ]
                  }
                },
                "sortable": {
                  "label": "排序",
                  "type": "boolean"
                },
                "resizable": {
                  "label": "拖动改变宽度",
                  "type": "boolean"
                },
                "showOverflowTooltip": {
                  "label": "当内容过长被隐藏时显示 tooltip",
                  "type": "boolean"
                },
                "align": {
                  "label": "对齐方式",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      }
                    ]
                  }
                },
                "headerAlign": {
                  "label": "头部对齐方式",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      }
                    ]
                  }
                }
              }
            }
          },
          {
            "name": "ElTableColumn",
            "nodeData": {
              "props": {
                "label": "标题",
                "prop": "name",
                "type": "none",
                "width": "auto",
                "sortable": false,
                "resizable": true,
                "showOverflowTooltip": false,
                "align": "left",
                "headerAlign": "left"
              },
              "style": {}
            },
            "children": [],
            "uid": "01DMCWVXH9ZG0RXM3WMV03H5TC",
            "pid": "01DMCWVXH7ZS7Q749BMQTGY447",
            "library": "element-ui",
            "uiConfig": {
              "isContainer": false,
              "isBoxWrap": false,
              "isLocked": false,
              "isHidden": true
            },
            "label": "表格单元",
            "tag": "ElTableColumn",
            "control": {
              "props": {
                "type": {
                  "label": "列类型",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "selection",
                        "value": "selection"
                      },
                      {
                        "label": "index",
                        "value": "index"
                      },
                      {
                        "label": "expand",
                        "value": "expand"
                      },
                      {
                        "label": "none",
                        "value": "none"
                      }
                    ]
                  }
                },
                "label": {
                  "label": "列标题",
                  "type": "text"
                },
                "width": {
                  "label": "宽度",
                  "type": "size"
                },
                "fixed": {
                  "label": "固定列",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      }
                    ]
                  }
                },
                "sortable": {
                  "label": "排序",
                  "type": "boolean"
                },
                "resizable": {
                  "label": "拖动改变宽度",
                  "type": "boolean"
                },
                "showOverflowTooltip": {
                  "label": "当内容过长被隐藏时显示 tooltip",
                  "type": "boolean"
                },
                "align": {
                  "label": "对齐方式",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      }
                    ]
                  }
                },
                "headerAlign": {
                  "label": "头部对齐方式",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      }
                    ]
                  }
                }
              }
            }
          },
          {
            "name": "ElTableColumn",
            "nodeData": {
              "props": {
                "label": "地址",
                "prop": "address",
                "type": "none",
                "width": "auto",
                "sortable": false,
                "resizable": true,
                "showOverflowTooltip": false,
                "align": "left",
                "headerAlign": "left"
              },
              "style": {}
            },
            "children": [],
            "uid": "01DMCWVXHAZR68QDTA7DY8XXYF",
            "pid": "01DMCWVXH7ZS7Q749BMQTGY447",
            "library": "element-ui",
            "uiConfig": {
              "isContainer": false,
              "isBoxWrap": false,
              "isLocked": false,
              "isHidden": true
            },
            "label": "表格单元",
            "tag": "ElTableColumn",
            "control": {
              "props": {
                "type": {
                  "label": "列类型",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "selection",
                        "value": "selection"
                      },
                      {
                        "label": "index",
                        "value": "index"
                      },
                      {
                        "label": "expand",
                        "value": "expand"
                      },
                      {
                        "label": "none",
                        "value": "none"
                      }
                    ]
                  }
                },
                "label": {
                  "label": "列标题",
                  "type": "text"
                },
                "width": {
                  "label": "宽度",
                  "type": "size"
                },
                "fixed": {
                  "label": "固定列",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      }
                    ]
                  }
                },
                "sortable": {
                  "label": "排序",
                  "type": "boolean"
                },
                "resizable": {
                  "label": "拖动改变宽度",
                  "type": "boolean"
                },
                "showOverflowTooltip": {
                  "label": "当内容过长被隐藏时显示 tooltip",
                  "type": "boolean"
                },
                "align": {
                  "label": "对齐方式",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      }
                    ]
                  }
                },
                "headerAlign": {
                  "label": "头部对齐方式",
                  "type": "radio",
                  "config": {
                    "selections": [
                      {
                        "label": "left",
                        "value": "left"
                      },
                      {
                        "label": "center",
                        "value": "center"
                      },
                      {
                        "label": "right",
                        "value": "right"
                      }
                    ]
                  }
                }
              }
            }
          }
        ],
        "label": "表格",
        "tag": "ElTable",
        "control": {
          "props": {
            "data": {
              "label": "表格数据",
              "type": "data"
            },
            "height": {
              "label": "高度",
              "type": "size"
            },
            "maxHeight": {
              "label": "最大高度",
              "type": "size"
            },
            "stripe": {
              "label": "是否为斑马纹 table",
              "type": "boolean"
            },
            "border": {
              "label": "是否带有纵向边框",
              "type": "boolean"
            },
            "size": {
              "label": "尺寸",
              "type": "radio",
              "config": {
                "selections": [
                  {
                    "label": "medium",
                    "value": "medium"
                  },
                  {
                    "label": "small",
                    "value": "small"
                  },
                  {
                    "label": "mini",
                    "value": "mini"
                  }
                ]
              }
            },
            "fit": {
              "label": "列的宽度是否自撑开",
              "type": "boolean"
            },
            "showHeader": {
              "label": "是否显示表头",
              "type": "boolean"
            },
            "highlightCurrentRow": {
              "label": "是否要高亮当前行",
              "type": "boolean"
            },
            "emptyText": {
              "label": "空数据时显示的文本内容",
              "type": "text"
            },
            "defaultExpandAll": {
              "label": "是否默认展开所有行",
              "type": "boolean"
            },
            "showSummary": {
              "label": "是否在表尾显示合计行",
              "type": "boolean"
            },
            "sumText": {
              "label": "合计行第一列的文本",
              "type": "text"
            },
            "indent": {
              "label": "展示树形数据时，树节点的缩进",
              "type": "number"
            }
          },
          "children": {
            "type": "array",
            "label": "列数据",
            "config": {
              "columns": [
                {
                  "field": "label",
                  "path": "nodeData/props",
                  "label": "标题",
                  "type": "text"
                },
                {
                  "field": "prop",
                  "path": "nodeData/props",
                  "label": "字段",
                  "type": "text"
                }
              ]
            }
          }
        }
      },
      {
        "name": "ElPagination",
        "library": "element-ui",
        "pid": "01DMCWV537BD9E1EBRG8ECZBM8",
        "uid": "01DMCWW03QCY5TKJ8XD2X9W79E",
        "boxConfig": {
          "space": 5,
          "flex": 0
        },
        "uiConfig": {
          "isContainer": false,
          "isBoxWrap": true,
          "isLocked": false
        },
        "nodeData": {
          "style": {},
          "props": {
            "small": false,
            "background": false,
            "pageSize": 10,
            "total": 100,
            "pagerCount": 7,
            "currentPage": 1,
            "layout": "prev, pager, next, jumper, ->, total",
            "pageSizes": [
              10,
              20,
              30,
              40,
              50,
              100
            ],
            "prevText": "",
            "nextText": "",
            "disabled": false,
            "hideOnSinglePage": false
          }
        },
        "children": [],
        "label": "分页器",
        "tag": "ElPagination",
        "control": {
          "props": {
            "small": {
              "label": "是否使用小型分页样式",
              "type": "boolean"
            },
            "background": {
              "label": "是否为分页按钮添加背景色",
              "type": "boolean"
            },
            "pageSize": {
              "label": "每页显示条目个数，支持 .sync 修饰符",
              "type": "number"
            },
            "total": {
              "label": "总条目数",
              "type": "number"
            },
            "pagerCount": {
              "label": "页码按钮的数量，当总页数超过该值时会折叠",
              "type": "number",
              "config": {
                "min": 5,
                "max": 21,
                "step": 2
              }
            },
            "currentPage": {
              "label": "当前页数，支持 .sync 修饰符",
              "type": "number"
            },
            "layout": {
              "label": "组件布局，子组件名用逗号分隔",
              "type": "text"
            },
            "pageSizes": {
              "label": "组件布局，子组件名用逗号分隔",
              "type": "array",
              "config": {
                "columns": [
                  {
                    "label": "选项",
                    "type": "number"
                  }
                ]
              }
            },
            "prevText": {
              "label": "替代图标显示的上一页文字",
              "type": "text"
            },
            "nextText": {
              "label": "替代图标显示的下一页文字",
              "type": "text"
            },
            "disabled": {
              "label": "禁用",
              "type": "boolean"
            },
            "hideOnSinglePage": {
              "label": "只有一页时是否隐藏",
              "type": "boolean"
            }
          }
        }
      }
    ],
    "label": "垂直容器",
    "tag": "HContainerY",
    "control": {
      "props": {
        "space": {
          "label": "留白",
          "type": "space",
          "config": {
            "step": 5
          }
        },
        "flex": {
          "label": "水平容器占比",
          "type": "number",
          "config": {
            "step": 1
          }
        },
        "justify": {
          "label": "子元素的内容对齐方式",
          "type": "radio",
          "config": {
            "selections": [
              {
                "label": "左对齐",
                "value": "start"
              },
              {
                "label": "居中",
                "value": "center"
              },
              {
                "label": "右对齐",
                "value": "end"
              },
              {
                "label": "环绕",
                "value": "around"
              },
              {
                "label": "两边",
                "value": "between"
              }
            ]
          }
        },
        "align": {
          "label": "子元素的浮动对齐方式",
          "type": "radio",
          "config": {
            "selections": [
              {
                "label": "置顶",
                "value": "start"
              },
              {
                "label": "居中",
                "value": "center"
              },
              {
                "label": "置底",
                "value": "end"
              },
              {
                "label": "填充",
                "value": "stretch"
              }
            ]
          }
        }
      }
    }
  }
}
