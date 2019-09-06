import Project, { UiNode } from '@/typings/project'
import Library from '@/typings/library'
import { ulid } from 'ulid'
import { getPathNode } from '@/utils'
import { setObjectData } from '@/store/utils'
import { arraySwap, deepCopy } from '@mobov/es-helper'
import { RootGetters, RootState } from '@/store/index'
import { merge } from 'lodash'

type nodeSetData = {
  uid: string
  style?: { [field: string]: any }
  props?: { [field: string]: any }
  attrs?: { [field: string]: any }
}

type nodeSetConfig = {
  uid: string
  [field: string]: any
}

type swapOpts = {
  pid: string
  from: number
  to: number
}

type sortOpts = {
  id: string
  oldIndex: number
  newIndex: number
}

export type State = {
  Data: any
  activeUid: string
}
export type Getters = {
  UiNodes: (state: State) => Project.UiNodes
  activeNode: (state: State, getters: Getters) => Project.UiNode
  activeNodeIsContainer: (state: State, getters: Getters, rootState: RootState, rootGetters: RootGetters) => boolean
}
export type Mutations = {
  SET_PROJECT: (state: State, val: Project.Options) => void
  SET_UI_NODES: (state: State, val: Project.UiNodes) => void
  SET_NODE_DATA: (state: State, val: nodeSetData) => void
  SET_NODE_BOX_CONFIG: (state: State, val: nodeSetConfig) => void
  SET_NODE_UI_CONFIG: (state: State, val: nodeSetConfig) => void
  SET_ACTIVE_NODE: (state: State, val: string) => void
  SWAP_NODE: (state: State, val: swapOpts) => void
  INSERT_NODE: (state: State, val: UiNode) => void
  REMOVE_NODE: (state: State, val: UiNode) => void
  CLEAR_NODE: (state: State, val: UiNode) => void
}

export type ActionsParams = {
  state: State,
  rootState: RootState,
  getters: Getters,
  rootGetters: RootGetters,
  commit: any,
  dispatch: any,
}

export type Actions = {
  insertComponent: (params: ActionsParams, val: Project.UiNode) => { status: boolean, msg?: string }
  insertTemplate: (params: ActionsParams, val: { name: string, pid: string, UiNode: UiNode }) => Promise<void>
  sortNode: (params: ActionsParams, val: sortOpts) => Promise<void>
  removeNode: (params: ActionsParams, val: Project.UiNode) => Promise<void>
  clearNode: (params: ActionsParams, val: Project.UiNode) => Promise<void>
  moveNode: (params: ActionsParams, val: sortOpts) => Promise<void>
  setNodeLock: (params: ActionsParams, val: Project.UiNode) => Promise<void>
  activeNodeInner: (params: ActionsParams, val: Project.UiNode) => Promise<void>
  activeNodeOuter: (params: ActionsParams, val: Project.UiNode) => Promise<void>
  activeNodePrev: (params: ActionsParams, val: Project.UiNode) => Promise<void>
  activeNodeNext: (params: ActionsParams, val: Project.UiNode) => Promise<void>
}
console.log(process.env.NPM_CDN)
export default {
  namespaced: true,
  state: <State> {
    Data: {
      ProjectConfig: {
        name: 'guitor-project',
        version: '0.0.1',
        npmCDN: process.env.NPM_CDN,
        dependencies: {
          'vue': '2.6.10',
          'element-ui': '2.10.0',
          '@mobov/es-helper': '1.1.8',
          '@guitor/base-ui': '0.1.8'
        }
      },
      // UiNodes: [{
      //
      // }]
      // UiNodes: [{
      //   name: 'HFrame',
      //   tag: 'HFrame',
      //   uid: 'root',
      //   uiConfig: {
      //     isLocked: false,
      //     isContainer: true
      //   },
      //   nodeData: {
      //     props: {
      //       isHeader: true,
      //       isFooter: false
      //       // direction: 'y',
      //       // space: 5,
      //       // flex: 1
      //     },
      //     style: {
      //
      //     }
      //   },
      //   children: [{
      //     name: 'HView',
      //     tag: 'HView',
      //     uid: 'root-l',
      //     pid: 'root',
      //     uiConfig: {
      //       isLocked: false,
      //       isContainer: true
      //     },
      //     nodeData: {
      //       slot: 'left',
      //       props: {
      //       },
      //       style: {
      //
      //       }
      //     },
      //     children: []
      //   }, {
      //     name: 'HView',
      //     tag: 'HView',
      //     uid: 'root-r',
      //     pid: 'root',
      //     nodeData: {
      //       slot: 'right',
      //       props: {
      //       },
      //       style: {
      //
      //       }
      //     },
      //     uiConfig: {
      //       isLocked: false,
      //       isContainer: false
      //     },
      //     children: []
      //   }, {
      //     name: 'HContainer',
      //     tag: 'HContainer',
      //     nodeData: {
      //       slot: 'header',
      //       props: {
      //         direction: 'y',
      //       },
      //       style: {
      //
      //       }
      //     },
      //     uid: 'root-h',
      //     pid: 'root',
      //     uiConfig: {
      //       isLocked: false,
      //       isContainer: true
      //     },
      //     children: []
      //   }, {
      //     name: 'HContainer',
      //     tag: 'HContainer',
      //     nodeData: {
      //       slot: 'footer',
      //       props: {
      //         direction: 'y',
      //       },
      //       style: {
      //
      //       }
      //     },
      //     uid: 'root-b',
      //     pid: 'root',
      //     uiConfig: {
      //       isLocked: false,
      //       isContainer: true
      //     },
      //     children: []
      //   }, {
      //     name: 'HView',
      //     tag: 'HView',
      //     uid: 'root-m',
      //     pid: 'root',
      //     uiConfig: {
      //       isLocked: false,
      //       isContainer: true
      //     },
      //     nodeData: {
      //       props: {
      //
      //       },
      //       style: {
      //
      //       }
      //     },
      //     children: []
      //   }]
      // }]
      UiNodes: [{
        name: 'HView',
        tag: 'HView',
        uid: 'root',
        uiConfig: {
          isLocked: false,
          isContainer: true,
          isBoxWrap: false
        },
        boxConfig: {
          flex: 1
        },
        nodeData: {
          props: {
            space: 5,
            flex: 1
          },
          style: {

          }
        },
        children: []
      }]
    },
    activeUid: 'root',
    Templates: []
  },
  getters: <Getters> {
    UiNodes: state => state.Data.UiNodes,
    activeNode: state => getPathNode(state.activeUid, state.Data.UiNodes),
    activeNodeIsContainer: (state, getters, rootState, rootGetters) => {
      const compData = rootGetters['library/getComponent'](getters.activeNode.name as any) as any

      return compData.uiConfig !== undefined
        ? compData.uiConfig.isContainer !== undefined
          ? compData.uiConfig.isContainer
          : false
        : false
    }
  },
  mutations: <Mutations> {
    SET_PROJECT (state, val) {
      // @ts-ignore
      if (val !== state.activeUid) {
        state.Data = val
      }
    },
    SET_UI_NODES (state, val) {
      // @ts-ignore
      state.Data.UiNodes = deepCopy(val)
    },
    SET_NODE_DATA (state, val) {
      const $target = getPathNode(val.uid, state.Data.UiNodes)
      setObjectData($target.nodeData.style, val.style)
      setObjectData($target.nodeData.props, val.props)
      setObjectData($target.nodeData.attrs, val.attrs)
    },
    SET_NODE_BOX_CONFIG (state, val) {
      const $target = getPathNode(val.uid, state.Data.UiNodes)
      setObjectData($target.boxConfig, val.boxConfig)
    },
    SET_NODE_UI_CONFIG (state, val) {
      const $target = getPathNode(val.uid, state.Data.UiNodes)
      setObjectData($target.uiConfig, val.uiConfig)
    },
    SET_ACTIVE_NODE (state, val) {
      state.activeUid = val
    },
    SWAP_NODE (state, val) {
      const parentNode = getPathNode(val.pid, state.Data.UiNodes)
      parentNode.children.splice(val.to, 0,   parentNode.children.splice(val.from, 1)[0])

      // 同容器
      // if (fromNode.pid === toNode.pid) {
      //   const parentNode = getPathNode(fromNode.pid, state.Data.UiNodes)
      //   const fromIndex = parentNode.children.findIndex(_ =>_.uid === fromNode.uid)
      //   const toIndex = parentNode.children.findIndex(_ =>_.uid === toNode.uid)
      //   // console.log(fromIndex, toIndex)
      //   // parentNode.children.splice()
      //   // if (fromIndex > toIndex) {
      //   //   arraySwap(parentNode.children, fromIndex, toIndex)
      //   // } else {
      //   //   arraySwap(parentNode.children, toIndex, fromIndex)
      //   // }
      //   const fromTemp = parentNode.children[fromIndex]
      //   const toTemp = parentNode.children[toIndex]
      //   parentNode.children.splice(fromIndex,1)
      //   parentNode.children.splice(toIndex,1)
      // } else {
      //   const fromParentNode = getPathNode(fromNode.pid, state.Data.UiNodes)
      //   const fromIndex = fromParentNode.children.findIndex(_ =>_.uid === fromNode.uid)
      //   const toParentNode = getPathNode(toNode.pid, state.Data.UiNodes)
      //   const toIndex = toParentNode.children.findIndex(_ =>_.uid === toNode.uid)
      //   fromNode.pid = toParentNode.uid
      //   toNode.pid = fromParentNode.uid
      //   fromParentNode.children.splice(fromIndex, 1, toNode)
      //   toParentNode.children.splice(toIndex, 1, fromNode)
      // }
    },
    REMOVE_NODE (state, val) {
      const parentNode = getPathNode(val.pid, state.Data.UiNodes)
      const nodeIndex = parentNode.children.findIndex(_ => _.uid === val.uid)
      parentNode.children.splice(nodeIndex, 1)
    },
    CLEAR_NODE (state, val) {
      const node = getPathNode(val.uid, state.Data.UiNodes)
       if (node.children.length) {
         node.children.splice(0, node.children.length)
       }
    },
    INSERT_NODE (state, val) {
      const parentNode = getPathNode(val.pid, state.Data.UiNodes)
      parentNode.children.push(val)
    }
  },
  actions: <Actions> {
    insertComponent ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      const node = deepCopy(data)
      const parentNode = getPathNode(node.pid, state.Data.UiNodes)
      const nodeComponent = rootGetters['library/getComponent'](node.name as any) as any
      if (nodeComponent.uiConfig && nodeComponent.uiConfig.containers) {
        if (!nodeComponent.uiConfig.containers.includes(parentNode.name)) {
          return {
            status: false,
            msg: '该组件插入位置受限制'
          }
        }
      }
      const handleNode = (node: any, pid: string) => {
        const nodeComp = rootGetters['library/getComponent'](node.name as any) as any
        const nodeCompData = deepCopy(nodeComp)
        const nodeCopy = deepCopy(node)
        console.log(nodeComp.uiConfig)

        merge(node, {
          uid: ulid(),
          pid
        }, nodeCompData, nodeCopy)

        if (typeof node.children !== 'string' && node.children.length > 0) {
          node.children.forEach((child: any) => handleNode(child, node.uid))
        }
      }
      handleNode(node, node.pid)

      commit('INSERT_NODE', node)

      return {
        status: true
      }
    },
    insertTemplate ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      // @ts-ignore
      const template = rootGetters['template/getTemplate'](data.library, data.name) as any

      const templateNode = deepCopy(template.UiNode)
      const handleIds = (node: any, pid: string) => {
        node.uid = ulid()
        node.pid = pid
        if (typeof node.children !== 'string' && node.children.length > 0) {
          node.children.forEach((child: any) => handleIds(child, node.uid))
        }
      }
      handleIds(templateNode, data.pid)
      console.log(templateNode)

      commit('INSERT_NODE', templateNode)
    },
    sortNode ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      // console.log(data)
      // const parentNode = getPathNode(data.id, state.Data.UiNodes)
      // const from = parentNode.children[data.oldIndex]
      // const to = parentNode.children[data.newIndex]
      commit('SWAP_NODE', { pid:data.id, from: data.oldIndex, to: data.newIndex })
    },
    removeNode ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      commit('SET_ACTIVE_NODE', data.pid)
      commit('REMOVE_NODE', data)
    },
    setNodeLock ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      commit('SET_NODE_UI_CONFIG', {
        uid: data.uid,
        uiConfig: {
          isLocked: !data.uiConfig.isLocked
        }
      })
    },
    clearNode ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      commit('CLEAR_NODE', data)
    },
    moveNode ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {

    },
    activeNodePrev ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      if (data.pid) {
        const parentNode = getPathNode(data.pid, state.Data.UiNodes)
        const index = parentNode.children.findIndex(_ => _.uid === data.uid)
        const nextIndex = (index === 0) ? (parentNode.children.length - 1) : (index - 1)
        commit('SET_ACTIVE_NODE', parentNode.children[nextIndex].uid)
      }
    },
    activeNodeNext ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      if (data.pid) {
        const parentNode = getPathNode(data.pid, state.Data.UiNodes)
        const index = parentNode.children.findIndex(_ => _.uid === data.uid)
        const nextIndex = (index + 1 === parentNode.children.length) ? 0 : (index + 1)
        commit('SET_ACTIVE_NODE', parentNode.children[nextIndex].uid)
      }
    },
    activeNodeInner ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      if (data.children && data.children.length > 0 && typeof data.children !== 'string') {
        commit('SET_ACTIVE_NODE', data.children[0].uid)
      }
    },
    activeNodeOuter ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      if (data.pid) {
        commit('SET_ACTIVE_NODE', data.pid)
      }
    }
  }
}
