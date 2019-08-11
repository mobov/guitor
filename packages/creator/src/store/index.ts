import Vue from 'vue'
import Vuex from 'vuex'
import previewer from './previewer'
import project from './project'
import library from './library'

Vue.use(Vuex)

export interface RootState {
  previewer: typeof previewer.state
  project: typeof project.state
  library: typeof library.state
}

export interface RootGetters {
  ['previewer/UiNodes']: typeof previewer.getters.UiNodes
  ['project/UiNodes']: typeof project.getters.UiNodes
  ['library/getComponent']: typeof library.getters.getComponent
  ['library/getTemplate']: typeof library.getters.getTemplate
  ['library/isContainer']: typeof library.getters.isContainer

}

export default new Vuex.Store({
  modules: {
    previewer,
    project,
    library
  }
})
