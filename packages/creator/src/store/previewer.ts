import { RootState, RootGetters } from '@/store/index'

export type State = {
  mode: 'pc' | 'mobile'
  view: 'preview' | 'editor'
}

export type Getters = {
  // height: (state: State) => number
  // width: (state: State) => number
  UiNodes: (state: State, getters: Getters, rootState: RootState, rootGetters: RootGetters) => any
}

export type Mutations = {
  SET_MODE: (state: State, val: 'pc' | 'mobile') => void
  SET_VIEW: (state: State, val: 'preview' | 'editor') => void
}

export default {
  namespaced: true,
  state: <State> {
    mode: 'pc',
    view: 'editor'
  },
  getters: <Getters> {
    UiNodes: (state, getters, rootState, rootGetters) => rootGetters['project/UiNodes']
  },
  mutations: <Mutations> {
    SET_MODE (state, val) {
      state.mode = val
    },
    SET_VIEW (state, val) {
      state.view = val
    }
  }
}
