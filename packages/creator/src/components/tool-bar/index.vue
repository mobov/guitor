<template>
  <m-flex class="tool-bar" justify="center">
    <m-flex :elevation="2" class="tool-bar-main">
      <m-tooltip content="定位到根节点 " placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleActiveRoot">
          <m-icon value="adjust"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="向上" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleActivePrev">
          <m-icon value="arrow_upward"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="向下" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleActiveNext">
          <m-icon value="arrow_downward"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="向里" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleActiveInner">
          <m-icon value="unfold_less"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="向外" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  :disabled="isRoot"
                  @click="handleActiveOuter">
          <m-icon value="unfold_more"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="锁定" placement="top">
        <m-button :disabled="!isContainer" height="100%" :width="40"
                  :color="lockColor" variety="flat" shape="square"
                  @click="handleLock">
          <m-icon :value="lockIcon"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="删除节点" placement="top">
        <m-button height="100%" :width="40" color="error" variety="flat" shape="square"
                  :disabled="isRoot"
                  @click="handleRemove">
          <m-icon value="delete"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="清空节点" placement="top">
        <m-button :disabled="!isContainer" height="100%" :width="40" color="error" variety="flat" shape="square"
                  @click="handleClear">
          <m-icon value="delete_outline"></m-icon>
        </m-button>
      </m-tooltip>
      <!--<div class="tool-bar-divider"></div>-->
      <!--<div style="width: 40px"></div>-->
      <div class="tool-bar-divider"></div>
      <el-popover
        placement="bottom"
        title="保存模板"
        v-model="template.show"
        width="300"
        trigger="click">
        <m-flex width="100%" marginY="sm">
          <el-input v-model="template.value"></el-input>
        </m-flex>
        <m-flex width="100%" justify="end">
          <m-button :size="40" @click="template.show = !template.show" paddingX="sm" marginRight="sm" color="default" variety="flat">
            取消
          </m-button>
          <m-button :size="40" @click="handleTemplate" paddingX="sm" color="success" variety="flat">
            保存
          </m-button>
        </m-flex>
        <el-tooltip slot="reference" content="保存为模板" placement="top">
          <m-button :disabled="isRoot" height="100%" :width="40" color="primary" variety="flat" shape="square">
            <m-icon value="folder_shared"></m-icon>
          </m-button>
        </el-tooltip>
      </el-popover>
      <div class="tool-bar-divider"></div>
      <m-tooltip :content="isModeMobile ? 'PC模式' : '移动端模式'" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleMode">
          <m-icon :value="modeIcon"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip :content="isViewPreview ? '编辑视图' : '预览视图'" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleView">
          <m-icon :value="viewIcon"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="新窗口预览" placement="top">
        <m-button height="100%" :width="40" color="success" variety="flat" shape="square"
                  @click="handlePreviewHtml">
          <m-icon value="tv"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="保存快照" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleSaveShot">
          <m-icon value="save"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="导出VUE组件" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleExportVue">
          <m-icon value="screen_share"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="导出虚拟节点" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleExportTemplate">
          <m-icon value="screen_share"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="导出工程" placement="top">
        <m-button height="100%" :width="40" color="success" variety="flat" shape="square"
                  @click="handleExportProject">
          <m-icon value="cloud_upload"></m-icon>
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="导入工程" placement="top">
        <m-button height="100%" :width="40" color="success" variety="flat" shape="square">
          <m-icon value="cloud_download"></m-icon>
          <input @change="handleImportProject" style="cursor:pointer;opacity: 0;width: 100%;height: 100%;position: absolute;left: 0;top:0;z-index: 2" type="file" id="file" name="file" />
        </m-button>
      </m-tooltip>
      <div class="tool-bar-divider"></div>
      <m-tooltip content="导出HTML" placement="top">
        <m-button height="100%" :width="40" color="success" variety="flat" shape="square"
                  @click="handleExportHtml">
          <m-icon value="cloud_upload"></m-icon>
        </m-button>
      </m-tooltip>
    </m-flex>
  </m-flex>
</template>
<script>
  import { clip2Board } from '@mobov/es-helper'
  import { exportVueSFC, importProject, exportProject, exportHtml, previewHtml } from '../../project'
  import { createNamespacedHelpers } from 'vuex'

  const { mapGetters, mapState, mapMutations, mapActions } = createNamespacedHelpers('project')

  export default {
    name: 'tool-bar',
    data () {
      return {
        template: {
          show: false,
          value: '新建模板'
        }
      }
    },
    computed: {
      ...mapState([
        'Data',
        'activeUid'
      ]),
      ...mapGetters([
        'activeNode',
        'activeNodeIsContainer'
      ]),
      mode () {
        return this.$store.state.previewer.mode
      },
      view () {
        return this.$store.state.previewer.view
      },
      isContainer () {
        return this.activeNodeIsContainer
      },
      isRoot () {
        return this.activeNode.uid === 'root'
      },
      isLocked () {
        return this.activeNode.uiConfig.isLocked === true
      },
      lockColor () {
        return this.isLocked ? 'warning' : 'success'
      },
      lockIcon () {
        return this.isLocked ? 'lock_outline' : 'lock_open'
      },
      isModeMobile () {
        return this.mode === 'mobile'
      },
      modeIcon () {
        return this.isModeMobile ? 'phone_android' : 'laptop_chromebook'
      },
      isViewPreview () {
        return this.view === 'preview'
      },
      viewIcon () {
        return this.isViewPreview ? 'tv' : 'dvr'
      }
    },
    methods: {
      ...mapMutations([
        'SET_ACTIVE_NODE',
        'SET_PROJECT'
      ]),
      ...mapActions([
        'activeNodePrev',
        'activeNodeNext',
        'activeNodeOuter',
        'activeNodeInner',
        'setNodeLock',
        'removeNode',
        'clearNode'
      ]),
      handleActiveRoot () {
       this.SET_ACTIVE_NODE('root')
      },
      handleActivePrev () {
        this.activeNodePrev(this.activeNode)
      },
      handleActiveNext () {
        this.activeNodeNext(this.activeNode)
      },
      handleActiveOuter () {
        this.activeNodeOuter(this.activeNode)
      },
      handleActiveInner () {
        this.activeNodeInner(this.activeNode)
      },
      handleRemove () {
        this.removeNode(this.activeNode)
      },
      handleClear () {
        this.clearNode(this.activeNode)
      },
      handleLock () {
        this.setNodeLock(this.activeNode)
      },
      handleTemplate () {
        this.$store.dispatch('template/saveLocalTemplate', {
          name: this.template.value,
          UiNode: this.activeNode
        })
        this.template.show = !this.template.show
      },
      handleMode () {
        this.$store.commit('previewer/SET_MODE', this.isModeMobile ? 'pc' : 'mobile')
      },
      handleView () {
        this.$store.commit('previewer/SET_VIEW', this.isViewPreview ? 'editor' : 'preview')
      },
      handleExportVue () {
        const result = exportVueSFC(this.activeNode)
        clip2Board(result)
        this.$notify({
          title: '成功',
          message: '已导出到剪切板',
          type: 'success'
        })
      },
      handleExportTemplate () {
        const result = JSON.stringify(this.activeNode, null, 2)
        clip2Board(result)
        this.$notify({
          title: '成功',
          message: '已导出到剪切板',
          type: 'success'
        })
      },
      handleSaveShot () {
        this.$store.dispatch('timeline/save')
      },
      handleExportProject () {
        exportProject(this.Data)
      },
      async handleImportProject (e) {
        const result = await importProject(e.target.files[0])
        this.SET_PROJECT(result)
      },
      handleExportHtml () {
        exportHtml(this.Data)
      },
      handlePreviewHtml () {
        previewHtml(this.Data)
      }
    }
  }
</script>
<style lang="scss">
  .tool-bar {
    height: 50px;
    width: 100%;
    /*margin-top: 20px;*/
    /*padding: 2rem;*/
    .tool-bar-main {
      overflow: hidden;
      border-radius: 2px;
      height: 40px;
      /*border-radius: 2px;*/
      /*box-shadow: 0 0 0 4px #090a0d, 0 0 0 7px #9fa3a8, 0 0 17px 13px rgba(0,0,0,0.2);*/
    }
    .tool-bar-divider {
      height: 100%;
      width: 1px;
      background-color: var(--m-border-color)
    }
  }
</style>
