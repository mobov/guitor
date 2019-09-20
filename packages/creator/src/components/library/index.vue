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
    .side-panel-navs {
      .m-app-bar-main {
        justify-content: center;
      }
      .el-tabs {
        .el-tabs__header  {
          margin-bottom: 0;
          .el-tabs__item {
            height: 50px;
            line-height: 50px;
          }
          .el-tabs__active-bar {
            height: 2px;
            background-color: orange;
          }
          .el-tabs__nav-wrap {
            margin-bottom: 0;
            &:after {
              display: none;
            }
          }
        }
      }
    }
  }
</style>
<template>
  <m-frame class="library" :header-size="50" :elevation="2">
    <m-app-bar slot="header" :size="50" :elevation="1"  class="side-panel-navs">
      <el-tabs v-model="activeName">
        <el-tab-pane label="组件库" name="component"></el-tab-pane>
        <el-tab-pane label="模板库" name="template"></el-tab-pane>
      </el-tabs>
    </m-app-bar>
    <m-flex padding="sm" width="100%">
      <el-input size="small" v-model="search" type="text" clearable></el-input>
    </m-flex>
    <el-menu :default-openeds="defaultOpeneds" v-if="activeName === 'template'">
      <el-submenu :index="template.name" :key="template.name" v-for="(template, index) in Templates">
        <m-flex width="90%" align="center" slot="title">
          <div style="flex:1">{{template.label || template.name}}</div>
        </m-flex>
        <component-item :value="item" :key="index" :library="template.name" type="template" v-for="(item, index) in template.templates"></component-item>
      </el-submenu>
    </el-menu>
    <el-menu :default-openeds="defaultOpeneds" v-else-if="activeName === 'component'">
      <el-submenu :index="library.name" :key="library.name" v-for="(library, index) in Libraries">
        <template slot="title">
          <span>{{library.label}}</span>
        </template>
        <component-item v-if="isShow(item)" :value="item" :key="index" :library="library.name" type="component" v-for="(item, index) in library.components"></component-item>
      </el-submenu>
    </el-menu>
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
        activeName: 'component', // component, template
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
