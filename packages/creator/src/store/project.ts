import Project, { UiNode } from '@/typings/project'
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
  domProps?: { [field: string]: any }
}

type nodeSetConfig = {
  uid: string
  [field: string]: any
}

type swapOpts = {
  from: Project.UiNode
  to: Project.UiNode
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
  insertNode: (params: ActionsParams, val: Project.UiNode) => Promise<void>
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

export default {
  namespaced: true,
  state: <State> {
    Data: {
      PackageConfig: {
        name: 'demo',
        version: '0.0.1',
        dependencies: {}
      },
      UiNodes: [{
        name: 'HContainerY',
        tag: 'HContainer',
        uid: 'root',
        uiConfig: {
          isLocked: false,
          isContainer: true
        },
        nodeData: {
          props: {
            direction: 'y',
            justify: 'start',
            align: 'start',
            space: 5
          },
          style: {
            minHeight: '100%',
            height: 'auto'
          },
          domProps: {}
        },
        children: []
      }]
    },
    activeUid: 'root'
  },
  getters: <Getters> {
    UiNodes: state => state.Data.UiNodes,
    activeNode: state => getPathNode(state.activeUid, state.Data.UiNodes),
    activeNodeIsContainer: (state, getters, rootState, rootGetters) => {
      console.log( rootGetters['library/getComponent'](getters.activeNode.name as any))
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
      state.Data = val
    },
    SET_NODE_DATA (state, val) {
      const $target = getPathNode(val.uid, state.Data.UiNodes)
      setObjectData($target.nodeData.style, val.style)
      setObjectData($target.nodeData.props, val.props)
      setObjectData($target.nodeData.attrs, val.attrs)
      setObjectData($target.nodeData.domProps, val.domProps)
    },
    SET_NODE_BOX_CONFIG (state, val) {
      console.log(val)
      const $target = getPathNode(val.uid, state.Data.UiNodes)
      console.log($target)
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
      const fromNode = val.from
      const toNode = val.to
      // 同容器
      if (fromNode.pid === toNode.pid) {
        const parentNode = getPathNode(fromNode.pid, state.Data.UiNodes)
        const fromIndex = parentNode.children.findIndex(_ =>_.uid === fromNode.uid)
        const toIndex = parentNode.children.findIndex(_ =>_.uid === toNode.uid)
        console.log(fromIndex, toIndex)
        arraySwap(parentNode.children, fromIndex, toIndex)
      } else {
        const fromParentNode = getPathNode(fromNode.pid, state.Data.UiNodes)
        const fromIndex = fromParentNode.children.findIndex(_ =>_.uid === fromNode.uid)
        const toParentNode = getPathNode(toNode.pid, state.Data.UiNodes)
        const toIndex = toParentNode.children.findIndex(_ =>_.uid === toNode.uid)
        fromNode.pid = toParentNode.uid
        toNode.pid = fromParentNode.uid
        fromParentNode.children.splice(fromIndex, 1, toNode)
        toParentNode.children.splice(toIndex, 1, fromNode)
      }
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
    insertNode ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      const node = deepCopy(data)

      const handleNode = (node: any, pid: string, root: boolean) => {
        const nodeComp = rootGetters['library/getComponent'](node.name as any) as any
        const nodeCompData = deepCopy(nodeComp)
        const nodeCopy = deepCopy(node)
        merge(node, {
          uid: ulid(),
          pid,
          tag: nodeCompData.tag,
          uiConfig: {
            isLocked: false
          },
          children: nodeCompData.children ? nodeCompData.children : [],
          nodeData: {
            style: {},
            attrs: {},
            props: {},
            domProps: {}
          }
        }, {
          nodeData: nodeCompData.nodeData,
          uiConfig: nodeCompData.uiConfig ? nodeCompData.uiConfig : {}
        }, nodeCopy)
        if (!node.uiConfig.isContainer) {
          node.boxConfig = nodeCompData.boxConfig
        }
        if (node.children.length > 0) {
          node.children.forEach((child: any) => handleNode(child, node.uid, false))
        }
      }
      handleNode(node, node.pid, true)

      console.log(node)

      commit('INSERT_NODE', node)
      // commit('SET_ACTIVE_NODE', node.uid)
    },
    sortNode ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      const parentNode = getPathNode(data.id, state.Data.UiNodes)
      const from = parentNode.children[data.oldIndex]
      const to = parentNode.children[data.newIndex]
      commit('SWAP_NODE', { from, to })
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
      if (data.children && data.children.length > 0) {
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
