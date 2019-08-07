<style lang="scss">
  .comp-api {

  }
</style>
<template>
  <m-view class="comp-api" paddingY="md" paddingX="sm">
    <control-item class="m-mb-sm m-px-sm"
                  v-model="item.value"
                  :type="item.type"
                  :key="`props${index}`"
                  :label="item.label"
                  :config="item.config"
                  @input="handleUpdate('props', item.field, arguments[0])"
                  v-for="(item, index) in propsData"></control-item>
    <control-item class="m-mb-sm m-px-sm"
                  v-model="item.value"
                  :type="item.type"
                  :key="`attrs${index}`"
                  :label="item.label"
                  :config="item.config"
                  @input="handleUpdate('attrs', item.field, arguments[0])"
                  v-for="(item, index) in attrsData"></control-item>
    <control-item class="m-mb-sm m-px-sm"
                  v-model="item.value"
                  :type="item.type"
                  :key="`attrs${index}`"
                  :label="item.label"
                  :config="item.config"
                  @input="handleUpdate('domProps', item.field, arguments[0])"
                  v-for="(item, index) in domPropsData"></control-item>
  </m-view>
</template>
<script>
  import ControlItem from '@/components/control-item'
  import { createNamespacedHelpers } from 'vuex'
  import { deepCopy } from '@mobov/es-helper'

  const { mapGetters, mapState, mapMutations } = createNamespacedHelpers('project')

  export default {
    name: 'comp-api',
    components: {
      ControlItem
    },
    data () {
      return {
        propsData: [],
        attrsData: [],
        domPropsData: []
      }
    },
    computed: {
      ...mapGetters([
        'activeNode'
      ]),
      ...mapState([
        'activeUid'
      ]),
      compData () {
        return this.$store.getters['library/getComponent'](this.activeNode.name)
      },
      propsApi () {
        return this.compData.control.props || {}
      },
      attrsApi () {
        return this.compData.control.attrs || {}
      },
      domPropsApi () {
        return this.compData.control.domProps || {}
      },
      propsApiKeys () {
        return Object.keys(this.propsApi)
      },
      attrsApiKeys () {
        return Object.keys(this.attrsApi)
      },
      domPropsApiKeys () {
        return Object.keys(this.domPropsApi)
      }
    },
    watch: {
      activeUid: {
        immediate: true,
        handler () {
          this.init()
        }
      }
    },
    methods: {
      ...mapMutations([
        'SET_NODE'
      ]),
      init () {
        this.initData('props')
        this.initData('attrs')
        this.initData('domProps')
      },
      initData (type = 'props') {
        const apiKeys = this[`${type}ApiKeys`]
        const api = this[`${type}Api`]
        const fieldData = this.activeNode.nodeData[type]
        const data = []
        apiKeys.forEach(field => {
          const result = Object.assign({
              field,
              config: {}
            },
            deepCopy(api[field]),
            fieldData[field] === undefined ? {} : {
              value: fieldData[field]
            })
          data.push(result)
        })
        this[`${type}Data`] = data
      },
      handleUpdate (type = 'props', field, val) {
        const data = {
          [field]: val
        }
        this.SET_NODE({
          uid: this.activeUid,
          [type]: data
        })
      }
    },
    mounted () {
    }
  }
</script>
