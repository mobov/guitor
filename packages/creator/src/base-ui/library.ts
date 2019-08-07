export default {
  name: 'base-ui',
  label: '基础组件库',
  components: {
    HBox: {
      label: '布局容器',
      isContainer: true,
      nodeData: {
        props: {
          flex: 1,
          wrap: false,
          direction: 'y',
          justify: 'start',
          align: 'start'
        },
        style: {
          padding: '5px',
          width: '100%',
          height: '100%'
        }
      },
      control: {
        props: {
          flex: {
            label: '容器占比',
            type: 'number',
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
            type: 'switch',
          },
          justify: {
            label: '子元素的垂直对齐',
            type: 'radio',
            config: {
              selections: [{
                label: 'start',
                value: 'start'
              }, {
                label: 'center',
                value: 'center'
              }, {
                label: 'end',
                value: 'end'
              }]
            }
          },
          align: {
            label: '子元素的水平对齐',
            type: 'radio',
            config: {
              selections: [{
                label: 'start',
                value: 'start'
              }, {
                label: 'center',
                value: 'center'
              }, {
                label: 'end',
                value: 'end'
              }]
            }
          }
        }
      }
    }
  }
}
