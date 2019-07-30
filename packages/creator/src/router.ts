import Vue from 'vue'
import Router from 'vue-router'
import Library from './views/library.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'library',
      component: Library
    },
    {
      path: '/comp-api',
      name: 'comp-api',
      component: () => import(/* webpackChunkName: "styles" */ './views/comp-api.vue')
    },
    {
      path: '/styles',
      name: 'styles',
      component: () => import(/* webpackChunkName: "styles" */ './views/styles.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import(/* webpackChunkName: "styles" */ './views/project.vue')
    }
  ]
})
