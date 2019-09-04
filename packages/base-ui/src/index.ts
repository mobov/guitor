import HView from './components/view.vue'
import HContainerY from './components/container-y.vue'
import HContainerX from './components/container-x.vue'
import HBox from './components/box.vue'
import HFrame from './components/frame.vue'
import { VueConstructor } from 'vue'

export type BaseUIPlugin = {
  installed: boolean
  install: (Vue: VueConstructor, {}) => void
}
const BaseUi = {
  installed: false,
  install (Vue, opts = {}) {
    Vue.component('HFrame', HFrame)
    Vue.component('HView', HView)
    Vue.component('HContainerY', HContainerY)
    Vue.component('HContainerX', HContainerX)
    Vue.component('HBox', HBox)
  }
} as BaseUIPlugin


// @ts-ignore
if (typeof window !== 'undefined' && window.Vue) {
// @ts-ignore
  window.Vue.use(BaseUi)
}

export default BaseUi
