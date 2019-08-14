export default {
  name: '分页表格',
  UiNode: {
    "name": "HContainer",
    "library": "base-ui",
    "pid": "root",
    "uid": "01DJ7FHFSM5AA76ERQHEQ6P8EQ",
    "tag": "HContainer",
    "uiConfig": {
      "isLocked": true,
      "isContainer": true
    },
    "children": [
      {
        "name": "ElTable",
        "library": "element-ui",
        "pid": "01DJ7FHFSM5AA76ERQHEQ6P8EQ",
        "uid": "01DJ7FHJE3BE9T2TB41MKY39V9",
        "tag": "ElTable",
        "uiConfig": {
          "isLocked": false,
          "isContainer": false
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
              "style": {},
              "attrs": {}
            },
            "children": [],
            "uid": "01DJ7FHJE4JGK3ZXY248DWE8W0",
            "pid": "01DJ7FHJE3BE9T2TB41MKY39V9",
            "tag": "ElTableColumn",
            "uiConfig": {
              "isLocked": false,
              "isContainer": false,
              "isHidden": true
            },
            "boxConfig": {
              "flex": 0,
              "space": 5
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
              "style": {},
              "attrs": {}
            },
            "children": [],
            "uid": "01DJ7FHJE4DW1NEKYS113QQT5K",
            "pid": "01DJ7FHJE3BE9T2TB41MKY39V9",
            "tag": "ElTableColumn",
            "uiConfig": {
              "isLocked": false,
              "isContainer": false,
              "isHidden": true
            },
            "boxConfig": {
              "flex": 0,
              "space": 5
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
              "style": {},
              "attrs": {}
            },
            "children": [],
            "uid": "01DJ7FHJE5F72M7B5CZTV823HA",
            "pid": "01DJ7FHJE3BE9T2TB41MKY39V9",
            "tag": "ElTableColumn",
            "uiConfig": {
              "isLocked": false,
              "isContainer": false,
              "isHidden": true
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
        "boxConfig": {
          "flex": 0,
          "space": 5
        }
      },
      {
        "name": "ElPagination",
        "library": "element-ui",
        "pid": "01DJ7FHFSM5AA76ERQHEQ6P8EQ",
        "uid": "01DJ7FHW0KBFFXPXZB3P8WARP6",
        "tag": "ElPagination",
        "uiConfig": {
          "isLocked": false,
          "isContainer": false
        },
        "children": [],
        "nodeData": {
          "style": {},
          "attrs": {},
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
        "boxConfig": {
          "flex": 0,
          "space": 5
        }
      }
    ],
    "nodeData": {
      "style": {
        "height": "auto"
      },
      "attrs": {},
      "props": {
        "flex": 0,
        "space": 10,
        "wrap": false,
        "direction": "y",
        "justify": "start",
        "align": "stretch"
      }
    }
  }
}
