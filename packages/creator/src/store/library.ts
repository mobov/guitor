import { RootState, RootGetters } from '@/store/index'
import { deepCopy, findNode } from '@mobov/es-helper'
import Library from '@/typings/library'
import { merge } from 'lodash'

export type State = {
  Data: Array<Library.Options>
}

export type Getters = {
  isContainer: (state: State, getters: Getters) => (name: string) => boolean
  getLibrary: (state: State) => (name: string) => any
  getComponent:  (state: State) => (name: string) => any
}

export type Mutations = {
  SET_DATA: (state: State, val: Library.Plugin) => void
}

export default {
  namespaced: true,
  state: <State> {
    Data: [],
  },
  getters: <Getters> {
    getLibrary: (state) => (name) => state.Data.find(_ => _.name === name),
    getComponent: (state) => (name) => {
      console.log(name)
      const library: any = state.Data.find(_ => _.components[name] !== undefined)
      console.log(library)
      return library !== undefined && library.components !== undefined
        ? library.components[name]
        : undefined
    }
  },
  actions: {
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
  }
}
