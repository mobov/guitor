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
    <div :key="library.name" v-show="library.templates.length > 0" v-for="library in Templates">
      <el-divider content-position="left">{{library.label}}</el-divider>
      <m-row paddingX="sm">
        <m-col class="item" v-if="isShow(item)" :padding="2" :xs="8" :key="item.name" v-for="item in library.templates">
          <component-item :value="item" :library="library.name" type="template"></component-item>
        </m-col>
      </m-row>
    </div>
    <div :key="library.name" v-for="library in Libraries">
      <el-divider content-position="left">{{library.label}}</el-divider>
      <m-row paddingX="sm">
        <m-col class="item" v-if="isShow(item)" :padding="2" :xs="8" :key="item.name" v-for="item in library.components">
          <component-item :value="item" :library="library.name" type="component"></component-item>
        </m-col>
      </m-row>
    </div>

  </m-view>
</template>
<script>
  import ComponentItem from '@/components/component-item'
  import { createNamespacedHelpers, mapGetters, mapState, mapMutations } from 'vuex'
  import { deepCopy } from '@mobov/es-helper'
  //
  // const { mapGetters, mapState, mapMutations } = createNamespacedHelpers('library')

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
      Libraries () {
        return this.$store.state.library.Data
      },
      Templates () {
        return this.$store.state.template.Data
      }
    },
    methods: {
      isShow (data) {
        return !(!!data.uiConfig && !!data.uiConfig.isHidden)
      }
    }
  }
</script>
