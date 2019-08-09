<template>
  <m-flex class="tool-bar" justify="center">
    <m-flex :elevation="2" class="tool-bar-main">
      <el-tooltip content="向上" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleActivePrev">
          <m-icon value="arrow_upward"></m-icon>
        </m-button>
      </el-tooltip>
      <div class="tool-bar-divider"></div>
      <el-tooltip content="向下" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleActiveNext">
          <m-icon value="arrow_downward"></m-icon>
        </m-button>
      </el-tooltip>
      <div class="tool-bar-divider"></div>
      <el-tooltip content="向里" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  @click="handleActiveInner">
          <m-icon value="unfold_less"></m-icon>
        </m-button>
      </el-tooltip>
      <div class="tool-bar-divider"></div>
      <el-tooltip content="向外" placement="top">
        <m-button height="100%" :width="40" color="primary" variety="flat" shape="square"
                  :disabled="isRoot"
                  @click="handleActiveOuter">
          <m-icon value="unfold_more"></m-icon>
        </m-button>
      </el-tooltip>
      <div class="tool-bar-divider"></div>
      <el-tooltip content="锁定" placement="top">
        <m-button :disabled="!isContainer" height="100%" :width="40"
                  :color="lockColor" variety="flat" shape="square"
                  @click="handleLock">
          <m-icon :value="lockIcon"></m-icon>
        </m-button>
      </el-tooltip>
      <div class="tool-bar-divider"></div>
      <el-tooltip content="删除节点" placement="top">
        <m-button height="100%" :width="40" color="error" variety="flat" shape="square"
                  :disabled="isRoot"
                  @click="handleRemove">
          <m-icon value="delete"></m-icon>
        </m-button>
      </el-tooltip>
      <div class="tool-bar-divider"></div>
      <el-tooltip content="清空节点" placement="top">
        <m-button :disabled="!isContainer" height="100%" :width="40" color="error" variety="flat" shape="square"
                  @click="handleClear">
          <m-icon value="delete_outline"></m-icon>
        </m-button>
      </el-tooltip>
    </m-flex>
  </m-flex>
</template>
<script>
  import { createNamespacedHelpers } from 'vuex'

  const { mapGetters, mapState, mapMutations, mapActions } = createNamespacedHelpers('project')

  export default {
    name: 'tool-bar',
    data () {
      return {
      }
    },
    computed: {
      ...mapState([
        'activeUid'
      ]),
      ...mapGetters([
        'activeNode',
        'activeNodeIsContainer'
      ]),
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
      }
    },
    methods: {
      ...mapActions([
        'activeNodePrev',
        'activeNodeNext',
        'activeNodeOuter',
        'activeNodeInner',
        'setNodeLock',
        'removeNode',
        'clearNode'
      ]),
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
      }
    }
  }
</script>
<style lang="scss">
  .tool-bar {
    height: 50px;
    width: 100%;
    margin-top: 20px;
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
