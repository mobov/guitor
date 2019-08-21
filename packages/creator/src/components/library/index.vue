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
    .el-menu {
      border-right: none;
    }
  }
</style>
<template>
  <m-frame class="library" :header-size="50" :elevation="2">
    <m-app-bar slot="header" :size="50" :font-size="16">
      UI构建器
    </m-app-bar>
    <m-flex padding="sm" width="100%">
      <el-input size="small" v-model="search" type="text" clearable></el-input>
    </m-flex>
    <el-menu :default-openeds="defaultOpeneds">
      <el-submenu :index="template.name" :key="template.name" v-for="(template, index) in Templates">
        <template slot="title">
          <span>{{template.label || template.name}}</span>
        </template>
        <component-item :value="item" :library="template.name" type="template" v-for="(item) in template.templates">></component-item>
      </el-submenu>
      <el-submenu :index="library.name" :key="library.name" v-for="(library, index) in Libraries">
        <template slot="title">
          <span>{{library.label}}</span>
        </template>
        <component-item v-if="isShow(item)" :value="item" :library="library.name" type="component" v-for="(item) in library.components">></component-item>
      </el-submenu>
    </el-menu>
    <!--<div :key="library.name" v-show="library.templates.length > 0" v-for="library in Templates">-->
      <!--<el-divider content-position="left">{{library.label}}</el-divider>-->
      <!--<m-row paddingX="sm">-->
        <!--<m-col class="item" v-if="isShow(item)" :padding="2" :xs="8" :key="item.name" v-for="item in library.templates">-->
          <!--<component-item :value="item" :library="library.name" type="template"></component-item>-->
        <!--</m-col>-->
      <!--</m-row>-->
    <!--</div>-->
    <!--<div :key="library.name" v-for="library in Libraries">-->
      <!--<el-divider content-position="left">{{library.label}}</el-divider>-->
      <!--<m-row paddingX="sm">-->
        <!--<m-col class="item" v-if="isShow(item)" :padding="2" :xs="8" :key="item.name" v-for="item in library.components">-->
          <!--<component-item :value="item" :library="library.name" type="component"></component-item>-->
        <!--</m-col>-->
      <!--</m-row>-->
    <!--</div>-->
  </m-frame>
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
        search: '',
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
      },
      defaultOpeneds () {
        return [
          ...this.Templates.map(_ => _.name),
          ...this.Libraries.map(_ => _.name)
        ]
      }
    },
    methods: {
      isShow (data) {
        let result = true
        if (!!data.uiConfig && !!data.uiConfig.isHidden) {
          result = false
        } else if (this.search.trim() !== '') {
          result = data.label.indexOf(this.search) !== -1
        }
        return result
      }
    }
  }
</script>
