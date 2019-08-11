<style lang='scss'>
  @import "~@mobov/scss-helper/import";
  .library {
    width: 100%;
   .library-item {
     width: 100%;
     height: 80px;
     border: var(--m-border-base);
     cursor: grab;
   }
  }
</style>
<template>
  <m-view class="library" :elevation="2">
    <m-app-bar :font-size="16">
      UI构建器
    </m-app-bar>
    <div :key="library.name" v-for="library in Data">
      <el-divider content-position="left">{{library.label}}</el-divider>
      <m-row paddingX="sm">
        <m-col class="item" v-if="isShow(item)" :padding="2" :xs="8" :key="item.name" v-for="item in library.components">
          <component-item :value="item" type="component"></component-item>
        </m-col>
      </m-row>
    </div>
    <div>
      <el-divider content-position="left">本地模板</el-divider>
      <m-row paddingX="sm">
        <m-col class="item" :padding="2" :xs="8" :key="item.name" v-for="item in Templates">
          <component-item :value="item" type="template"></component-item>
        </m-col>
      </m-row>
    </div>
  </m-view>
</template>
<script>
  import ComponentItem from '@/components/component-item'
  import { createNamespacedHelpers } from 'vuex'
  import { deepCopy } from '@mobov/es-helper'

  const { mapGetters, mapState, mapMutations } = createNamespacedHelpers('library')

  export default {
    name: 'library',
    components: { ComponentItem },
    data () {
      return {
        dragOptions: {
          draggable: '.item'
        }
      }
    },
    computed: {
      ...mapState([
        'Data',
        'Templates'
      ])
    },
    methods: {
      isShow (data) {
        return !(!!data.uiConfig && !!data.uiConfig.isHidden)
      }
    }
  }
</script>
