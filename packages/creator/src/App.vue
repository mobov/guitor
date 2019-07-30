<style lang="scss">
  .app {
    user-select: none;
  }
  .side-panel-navs {
    .el-tabs {
      .el-tabs__header  {
        margin-bottom: 0;
        .el-tabs__item {
          height: 50px;
          line-height: 50px;
          color: #fff;
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
    .mu-tabs {
      background-color: transparent;
      .mu-tab {
        height: 50px
      }
    }
  }

  html {
    overflow-y: hidden !important;
  }
</style>
<template>
  <m-app id="app" class="app">
    <m-frame
      rightSize="500px"
      headerSize="50px"
      leftSize="50px"
      fillHeader="none"
      :leftIndex="5"
      :rightIndex="5">
      <m-flex width="100%" height="100%" align="center" justify="center">
        <previewer/>
      </m-flex>
      <m-frame slot="right" class="side-panel" :header-size="50" :elevation="2">
        <m-app-bar slot="header" :size="50" class="side-panel-navs">
          <el-tabs v-model="activeName">
            <el-tab-pane label="组件库" name="library"></el-tab-pane>
            <el-tab-pane label="组件API" name="comp-api"></el-tab-pane>
            <el-tab-pane label="样式" name="styles"></el-tab-pane>
            <el-tab-pane label="项目" name="project"></el-tab-pane>
          </el-tabs>
          <!--<mu-tabs :value.sync="activeName">-->
            <!--<mu-tab value="library">组件库</mu-tab>-->
            <!--<mu-tab value="comp-api">组件API</mu-tab>-->
            <!--<mu-tab value="styles">样式</mu-tab>-->
            <!--<mu-tab value="project">项目</mu-tab>-->
          <!--</mu-tabs>-->
          <!--<m-button :fontColor="isActive('library') ? 'gray' : 'white'" @click="handleTo('library')" height="100%" paddingX="md" marginRight="sm">组件库</m-button>-->
          <!--<m-button :fontColor="isActive('comp-api') ? 'gray' : 'white'" @click="handleTo('comp-api')" height="100%" paddingX="md" marginRight="sm">组件API</m-button>-->
          <!--<m-button :fontColor="isActive('styles') ? 'gray' : 'white'" @click="handleTo('styles')" height="100%" paddingX="md" marginRight="sm">样式</m-button>-->
          <!--<m-button :fontColor="isActive('project') ? 'gray' : 'white'" @click="handleTo('project')" height="100%" paddingX="md" marginRight="sm">项目</m-button>-->
        </m-app-bar>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </m-frame>
    </m-frame>
  </m-app>
</template>
<script>
  import Vue from 'vue'
  import Previewer from '@/components/previewer'

  export default {
    name: 'app',
    components: {
      Previewer
    },
    data () {
      return {
      }
    },
    computed: {
      activeName: {
        get () {
          return this.$route.name || 'library'
        },
        set (name) {
          console.log(name)
          this.$router.push({
            name
          })
        }
      }
    },
    // methods: {
    //   isActive (name) {
    //     return this.$route.name === name
    //   },
    //   handleTo (name) {
    //     this.$router.push({
    //       name
    //     })
    //   }
    // },
    created () {

    },
    mounted () {
    }
  }
</script>
