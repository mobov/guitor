import { RootState, RootGetters } from '@/store/index'
import { findNode } from '@mobov/es-helper'
import Library from '@/typings/library'

export type State = {
  Data: Array<Library.Options>
}

export type Getters = {
  getLibrary: (state: State) => (name: string) => any
  getComponent:  (state: State) => (name: string) => any
}

export type Mutations = {
  SET_DATA: (state: State, val: Library.Options) => Array<Library.ComponentsPack>
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
  actions: {
  },
  mutations: <Mutations> {
    SET_DATA (state, val) {
      console.log(val)
      Object.keys(val.components).forEach(key => {
        val.components[key].library = val.name
      })
      state.Data.push(val)
    }
  }
}
