/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './init-ui'
import './init-library'
import './init-template'
import './style/style.scss'

import '@/directives/drag-ani'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.eventBus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
