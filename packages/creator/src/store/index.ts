import Vue from 'vue'
import Vuex from 'vuex'
import previewer from './previewer'
import project from './project'
import library from './library'
import template from './template'
import timeline from './timeline'

Vue.use(Vuex)

export interface RootState {
  previewer: typeof previewer.state
  project: typeof project.state
  library: typeof library.state
  template: typeof library.state
  timeline: typeof timeline.state
}

export interface RootGetters {
  ['previewer/UiNodes']: typeof previewer.getters.UiNodes
  ['project/UiNodes']: typeof project.getters.UiNodes
  ['library/getComponent']: typeof library.getters.getComponent
  ['template/getTemplate']: typeof template.getters.getTemplate

}

export default new Vuex.Store({
  modules: {
    previewer,
    project,
    library,
    template,
    timeline
  }
})
