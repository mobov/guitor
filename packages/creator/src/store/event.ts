import Project, { UiNode, UiNodes } from '@/typings/project'

import { arraySwap, deepCopy } from '@mobov/es-helper'
import { RootGetters, RootState } from '@/store/index'
import { merge } from 'lodash'

type nodeSetData = {
  data: UiNodes,
  shot: any
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
  Data: Array<nodeSetData>
  timelineShot: boolean
}

export type Getters = {

}

export type Mutations = {
  SET_DATA: (state: State, val: nodeSetData) => void
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
  save: (params: ActionsParams, val: any) => Promise<void>
}

export default {
  namespaced: true,
  state: <State> {
    timelineShot: false,
    Data: []
  },
  mutations: <Mutations> {
    SET_DATA (state, val) {
      state.Data.unshift(val)
    }
  },
  actions: <Actions> {
    async save ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      const $previewer: any = document.querySelector('.previewer-screen')
      const shot = await domtoimage.toPng($previewer, {
        filter (node: Node | any): boolean {
          return (node.tagName !== 'link')
        }
      })
      const history = {
        data: deepCopy(rootState.project.Data.UiNodes),
        shot
      }
      state.Data.unshift(history)
    },
  }
}
