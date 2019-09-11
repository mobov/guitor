import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/comp-api',
    },
    {
      path: '/comp-api',
      name: 'comp-api',
      component: () => import(/* webpackChunkName: "comp-api" */ './views/comp-api.vue')
    },
    {
      path: '/styles',
      name: 'styles',
      component: () => import(/* webpackChunkName: "styles" */ './views/styles.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import(/* webpackChunkName: "project" */ './views/project.vue')
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: () => import(/* webpackChunkName: "project" */ './views/FAQ.vue')
    }
  ]
})
