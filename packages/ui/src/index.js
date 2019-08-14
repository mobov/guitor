import HView from './components/view.vue'
import HContainer from './components/container.vue'
import HBox from './components/box.vue'

export default {
  installed: false,
  install (Vue) {
    Vue.component('HView', HView)
    Vue.component('HContainer', HContainer)
    Vue.component('HBox', HBox)
  }
}
