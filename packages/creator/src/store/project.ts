import Project from '@/typings/project'
import { getPathNode } from '@/utils'
import { setObjectData } from '@/store/utils'

type nodeSetData = {
  uid: string
  style?: { [field: string]: any }
  props?: { [field: string]: any }
}
export type State = {
  Data: Project.Data
  activeUid: string
}
export type Getters = {
  UiNodes: (state: State) => Project.UiNodes
  activeNode: (state: State, getters: Getters) => Project.UiNode
}
export type Mutations = {
  SET_PROJECT: (state: State, val: Project.Data) => void
  SET_NODE: (state: State, val: nodeSetData) => void
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
        name: 'el-container',
        uid: '0',
        uiConfig: {},
        nodeData: {
          props: {

          },
          style: {
            backgroundColor: 'gray',
            height: '500px',
            width: '100%'
          }
        },
        children: [{
          name: 'el-input',
          uid: '1',
          pid: '0',
          uiConfig: {

          },
          nodeData: {
            style: {
              margin: '20px'
            }
          },
          children: [{

          }]
        }]
      }]
    },
    activeUid: '0'
  },
  getters: <Getters> {
    UiNodes: state => state.Data.UiNodes,
    activeNode: state => getPathNode(state.activeUid, state.Data.UiNodes)
  },
  mutations: <Mutations> {
    SET_PROJECT (state, val) {
      state.Data = val
    },
    SET_NODE (state, val) {
      const $target = getPathNode(val.uid, state.Data.UiNodes)
      setObjectData($target.nodeData.style, val.style)
      setObjectData($target.nodeData.props, val.props)
      console.log($target)
    }
  }
}
