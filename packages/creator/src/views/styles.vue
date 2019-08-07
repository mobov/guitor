<style lang="scss">
  .style-group {
    .style-group-title {
      font-size: 14px;
    }
  }
</style>
<template>
  <m-view class="styles" paddingY="md" paddingX="sm">
    <div class="style-group" v-for="group in groups">
      <el-divider content-position="left">{{group.name}}</el-divider>
      <div class="style-group-main">
        <control-item class="m-mb-sm m-px-sm"
                      v-for="item in group.attrs"
                      :key="item"
                      v-model="styles[item].value"
                      @input="handleUpdate(item, arguments[0])"
                      :type="styles[item].type"
                      :label="styles[item].label"
                      :config="styles[item].config" />
      </div>
    </div>
  </m-view>
</template>
<script>
  import { groups, styles } from '@/utils/style.config'
  import ControlItem from '@/components/control-item'
  import { createNamespacedHelpers } from 'vuex'
  import { deepCopy } from '@mobov/es-helper'

  const { mapGetters, mapState, mapMutations } = createNamespacedHelpers('project')

  export default {
    name: 'styles',
    components: {
      ControlItem
    },
    data () {
      return {
        styles: deepCopy(styles),
        groups
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
      activeStyleKeys () {
        return Object.keys(this.activeStyles)
      }
    },
    watch: {
      activeUid: {
        immediate: true,
        handler (newVal) {
          console.log(this.activeUid)
          if (newVal) {
            this.init()
          }
        }
      }
    },
    methods: {
      ...mapMutations([
        'SET_NODE'
      ]),
      formatIStyle (data) {
        if (data.backgroundImage.length > 0) {
          data.value = data.value.substring(3, data.value.length - 2)
        }
      },
      formatOStyle (data) {
        if (data.hasOwnProperty('backgroundImage')) {
          data.backgroundImage = `url(${data.backgroundImage})`
        }
      },
      init () {
        const data = deepCopy(styles)
        this.activeStyleKeys.forEach(style => {
          data[style].value = this.activeStyles[style]
        })
        this.formatIStyle(data)
        this.styles = data
      },
      handleUpdate (field, val) {
        const style = {
          [field]: val
        }
        this.formatOStyle(style)
        this.SET_NODE({
          uid: this.activeUid,
          style
        })
      }
    }
  }
</script>
