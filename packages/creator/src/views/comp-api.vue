<style lang="scss">
  .comp-api {

  }
</style>
<template>
  <m-view class="comp-api" paddingY="md" paddingX="sm">
    <control-item class="m-mb-sm m-px-sm"
                  v-model="item.value"
                  :type="item.type"
                  :key="index"
                  :label="item.label"
                  :config="item.config"
                  v-for="(item, index) in ApiData"></control-item>
  </m-view>
</template>
<script>
  import ControlItem from '@/components/control-item'

  export default {
    name: 'comp-api',
    components: {
      ControlItem
    },
    data () {
      return {
        ApiData: [{
          value: '',
          field: 'content',
          label: '文本',
          type: 'text',
          config: {}
        }, {
          value: '#010101',
          label: '颜色',
          type: 'color',
          field: 'color',
          config: {}
        }, {
          value: '#010101',
          label: '背景颜色',
          type: 'color',
          config: {}
        }, {
          value: 'data:image/jpeg;base64,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',
          label: '背景图片',
          type: 'image',
          config: {}
        }, {
          value: 'http://www.baidu.com',
          label: '链接',
          type: 'link',
          config: {}
        }, {
          value: 0,
          label: '种类',
          type: 'radio',
          config: {
            selections: [{
              label: '天使',
              value: 0
            }, {
              label: '恶魔',
              value: 1
            }]
          }
        }, {
          value: 'dog',
          label: '宠物',
          type: 'checkbox',
          config: {
            selections: [{
              label: '狗狗',
              value: 'dog'
            }, {
              label: '猫猫',
              value: 'cat'
            }, {
              label: '皮卡丘',
              value: 'pika'
            }]
          }
        }, {
          value: '100px',
          label: '宽度',
          type: 'size',
          config: {}
        }, {
          value: '100px',
          label: '高度',
          type: 'size',
          config: {}
        }]
      }
    },
    computed: {

    }
  }
</script>
