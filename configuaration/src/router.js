import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/global-conf'
    },
    {
      path: '/global-conf',
      name: 'GlobalConf',
      component: () => import('./views/GlobalConf.vue')
    },
    {
      path: '/local-conf',
      name: 'LocalConf',
      component: () => import('./views/LocalConf.vue')
    }
  ]
})
