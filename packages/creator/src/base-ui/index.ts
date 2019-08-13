import HView from './view.vue'
import HContainer from './container.vue'
import HBox from './box.vue'
import Vue, { VueConstructor } from 'vue'

export type MegH5Plugin = {
  installed: boolean
  install: (Vue: VueConstructor, {}) => void
}
export default {
  installed: false,
  install (Vue, opts = {}) {
    Vue.component('HView', HView)
    Vue.component('HContainer', HContainer)
    Vue.component('HBox', HBox)
  }
} as MegH5Plugin
