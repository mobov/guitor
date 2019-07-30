<style lang="scss">
  .comp-api {

  }
</style>
<template>
  <m-view class="styles" paddingY="md" paddingX="sm">
    背景
    <control-item class="m-mb-sm m-px-sm"
                  v-model="item.value"
                  @input="handleUpdate(item.field, arguments[0])"
                  :type="item.type"
                  :key="index"
                  :label="item.label"
                  :config="item.config"
                  v-for="(item, index) in data"></control-item>
  </m-view>
</template>
<script>
  import ControlTypes from '@/control-types/style'
  import ControlItem from '@/components/control-item'
  import { createNamespacedHelpers } from 'vuex'
  import { deepCopy } from '@mobov/es-helper'

  const {mapGetters, mapState, mapMutations} = createNamespacedHelpers('project')

  export default {
    name: 'styles',
    components: {
      ControlItem
    },
    data () {
      return {
        data: []
      }
    },
    computed: {
      ...mapGetters([
        'activeNode'
      ]),
      ...mapState([
        'activeUid'
      ]),
      activeStyles () {
        return this.activeNode.nodeData.style
      },
      styleKeys () {
        return Object.keys(ControlTypes)
      }
    },
    created () {
      this.initData()
      console.log(this.activeStyles)
    },
    methods: {
      ...mapMutations([
        'SET_NODE'
      ]),
      formatIStyle (data) {
        if (data.field === 'backgroundImage') {
          data.value = data.value.substring(3, data.value.length - 2)
          console.log(data.value)
        }
      },
      formatOStyle (data) {
        if (data.hasOwnProperty('backgroundImage')) {
          data.backgroundImage = `url(${data.backgroundImage})`
        }
      },
      initData () {
        console.log(this.activeStyles)
        this.styleKeys.forEach(style => {
          const result = Object.assign({
              field: style,
              config: {}
            },
            deepCopy(ControlTypes[style]),
            this.activeStyles[style] === undefined ? {} : {
            value: this.activeStyles[style]
          })
          this.formatIStyle(result)
          this.data.push(result)
        })
        console.log(this.data)
      },
      handleUpdate (field, val) {
        const style = {
          [field]: val
        }
        console.log(style)
        this.formatOStyle(style)
        console.log(style)
        this.SET_NODE({
          uid: this.activeUid,
          style
        })
      }
    }
  }
</script>
