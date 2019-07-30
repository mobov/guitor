import { RootState, RootGetters } from '@/store/index'

export type State = {
  mode: 'pc' | 'mobile'
}

export type Getters = {
  height: (state: State) => number
  width: (state: State) => number
  UiNodes: (state: State, getters: Getters, rootState: RootState, rootGetters: RootGetters) => any
}

export type Mutations = {

}

export const ModeSize = {
  pc: {
    height: 768,
    width: 1024
  },
  mobile: {
    height: 805,
    width: 350
  }
}

export default {
  namespaced: true,
  state: <State> {
    mode: 'pc'
  },
  getters: <Getters> {
    width: state => ModeSize[state.mode].width,
    height: state => ModeSize[state.mode].height,
    UiNodes: (state, getters, rootState, rootGetters) => rootGetters['project/UiNodes']
  },
  mutations: <Mutations> {

  }
}
