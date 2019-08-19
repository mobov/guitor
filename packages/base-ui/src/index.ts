import HView from './components/view.vue'
import HContainerY from './components/container-y.vue'
import HContainerX from './components/container-x.vue'
import HBox from './components/box.vue'
import HFrame from './components/frame.vue'
import { VueConstructor } from 'vue'

export type MegH5Plugin = {
  installed: boolean
  install: (Vue: VueConstructor, {}) => void
}
export default {
  installed: false,
  install (Vue, opts = {}) {
    Vue.component('HFrame', HFrame)
    Vue.component('HView', HView)
    Vue.component('HContainerY', HContainerY)
    Vue.component('HContainerX', HContainerX)
    Vue.component('HBox', HBox)
  }
} as MegH5Plugin
