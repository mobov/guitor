import { RootState, RootGetters } from '@/store/index'
import { deepCopy, findNode } from '@mobov/es-helper'
import Template from '@/typings/template'
import { merge } from 'lodash'
import { setStorage, getStorage } from '@/utils/storage'

export type State = {
  Data: Array<Template.Plugin>
}

export type Getters = {
  getLibrary: (state: State) => (name: string) => any
  getTemplate: (state: State) => (library: string, name: string) => any
}

export type Mutations = {
  SET_DATA: (state: State, val: Template.Plugin) => void
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
  register: (params: ActionsParams, val: Template.Plugin) => Promise<void>
  saveLocalTemplate: (params: ActionsParams, val: Template.Plugin) => Promise<void>
  removeLocalTemplate: (params: ActionsParams, val: string) => Promise<void>
  renameLocalTemplate: (params: ActionsParams, val: { oldName: string, newName: string }) => Promise<void>
}

const cacheKey = 'localTemplates'
const templates = getStorage(cacheKey)
export default {
  namespaced: true,
  state: <State> {
    Data: [{
      name: 'local-templates',
      label: '本地模板',
      templates: templates instanceof Array ? templates : []
    }]
  },
  getters: <Getters> {
    getLibrary: (state) => (name) => state.Data.find(_ => _.name === name),
    getTemplate: (state) => (libraryName, name) => {
      // @ts-ignore
      const library = state.Data.find(_ => _.name === libraryName)
      // @ts-ignore
      return library.templates.find(_ => _.name === name)
    }
  },
  mutations: <Mutations> {
    SET_DATA (state, val) {
      const result = deepCopy(val) as any
      Object.keys(result.templates).forEach(key => {
        const item = result.templates[key]

        result.templates[key] = merge({
          library: result.name,
        }, item)
      })
      state.Data.push(result)
    }
  },
  actions: <Actions> {
    register ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      commit('SET_DATA', data)
    },
    saveLocalTemplate ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      // @ts-ignore
      state.Data[0].templates.push(data)
      //
      setStorage(cacheKey, state.Data[0].templates)
    },
    removeLocalTemplate ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      const index = state.Data[0].templates.findIndex(_ => _.name === data)
      if (index !== -1) {
        state.Data[0].templates.splice(index, 1)
        setStorage(cacheKey, state.Data[0].templates)
      }
    },
    renameLocalTemplate ({ state, rootState, commit, dispatch, getters, rootGetters }, data) {
      const item = state.Data[0].templates.find(_ => _.name === data.oldName)
      if (item) {
        item.name = data.newName
        setStorage(cacheKey, state.Data[0].templates)
      }
    }
  },
}
