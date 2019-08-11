import { RootState, RootGetters } from '@/store/index'
import { deepCopy, findNode } from '@mobov/es-helper'
import Library from '@/typings/library'
import { merge } from 'lodash'
import Project from '@/typings/project'

export type State = {
  Data: Array<Library.Options>
  Templates: Array<Library.Template>
}

export type Getters = {
  isContainer: (state: State, getters: Getters) => (name: string) => boolean
  getLibrary: (state: State) => (name: string) => any
  getComponent:  (state: State) => (name: string) => any
  getTemplate:  (state: State) => (name: string) => any
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
  saveTemplate: (params: ActionsParams, val: Library.Template) => Promise<void>
}

export default {
  namespaced: true,
  state: <State> {
    Data: [],
    Templates: []
  },
  getters: <Getters> {
    getLibrary: (state) => (name) => state.Data.find(_ => _.name === name),
    getComponent: (state) => (name) => {
      const library: any = state.Data.find(_ => _.components[name] !== undefined)
      return library !== undefined && library.components !== undefined
        ? library.components[name]
        : undefined
    },
    getTemplate: (state) => (name) => state.Templates.find(_ => _.name === name),
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
            isLocked: false,
            isContainer: false
          },
          boxConfig: {
            flex: 0,
            space: 5
          },
          nodeData: {
            style: {},
            attrs: {},
            props: {},
            domProps: {}
          }
        }, item)
      })
      state.Data.push(result)
    }
  },
  actions: <Actions> {
    saveTemplate ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      const template = deepCopy(data)
      state.Templates.push(template)
    }
  },
}
