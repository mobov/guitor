import { RootState, RootGetters } from '@/store/index'
import { deepCopy, findNode } from '@mobov/es-helper'
import Library from '@/typings/library'
import { merge } from 'lodash'

export type State = {
  Data: Array<Library.Plugin>
}

export type Getters = {
  getLibrary: (state: State) => (name: string) => any
  getComponent:  (state: State) => (name: string) => any
}

export type Mutations = {
  SET_DATA: (state: State, val: Library.Plugin) => void
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
  register: (params: ActionsParams, val: Library.Plugin) => Promise<void>
}

export default {
  namespaced: true,
  state: <State> {
    Data: []
  },
  getters: <Getters> {
    getLibrary: (state) => (name) => state.Data.find(_ => _.name === name),
    getComponent: (state) => (name) => {
      const library: any = state.Data.find(_ => _.components[name] !== undefined)
      return library !== undefined && library.components !== undefined
        ? library.components[name]
        : undefined
    }
  },
  mutations: <Mutations> {
    SET_DATA (state, val) {
      const result = deepCopy(val) as any
      Object.keys(result.components).forEach(key => {
        const item = result.components[key]

        result.components[key] = merge({
          name: key,
          library: result.name,
          uiConfig: {
            isContainer: false,
            isBoxWrap: true,
            isLocked: false
          },
          nodeData: {
            style: {},
            props: {}
          },
          children: []
        }, item)

        // if (result.components[key].uiConfig.isContainer) {
        //   merge(result.components[key], {
        //     children: []
        //   })
        // }
        if (result.components[key].uiConfig.isBoxWrap) {
          merge(result.components[key], {
            boxConfig: {
              flex: 0,
              space: 5
            }
          })
        }
        // console.log(item)
        // console.log(result.components[key])
      })
      state.Data.push(result)
    }
  },
  actions: <Actions> {
    register ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      commit('SET_DATA', data)
    }
  }
}
