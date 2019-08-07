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
  ['previewer/height']: typeof previewer.getters.height
  ['previewer/width']: typeof previewer.getters.width
  ['previewer/UiNodes']: typeof previewer.getters.UiNodes
  ['project/UiNodes']: typeof project.getters.UiNodes
  ['library/getComponent']: typeof library.getters.getComponent
}

export default new Vuex.Store({
  modules: {
    previewer,
    project,
    library
  }
})
