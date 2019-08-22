/* eslint-disable */

export default `
  import Vue from 'vue'
  import App from './App.vue'
  import ElementUI from 'element-ui'
  import BaseUI from '@guitor/base-ui'
  
  Vue.config.productionTip = false
  Vue.use(ElementUI)
  Vue.use(BaseUI)
    
  new Vue({
    render: h => h(App)
  }).$mount('#app')
`
