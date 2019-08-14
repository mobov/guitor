import HView from './components/view.vue'
import HContainer from './components/container.vue'
import HBox from './components/box.vue'
import { VueConstructor } from 'vue'

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
