import Vue from 'vue'
import Vuex from 'vuex'
import previewer from './previewer'
import project from './project'

Vue.use(Vuex)

export interface RootState {
  previewer: typeof previewer.state
  project: typeof project.state
}

export interface RootGetters {
  ['previewer/height']: typeof previewer.getters.height
  ['previewer/width']: typeof previewer.getters.width
  ['previewer/UiNodes']: typeof previewer.getters.UiNodes
  ['project/UiNodes']: typeof project.getters.UiNodes
}

export default new Vuex.Store({
  modules: {
    previewer,
    project
  }
})
