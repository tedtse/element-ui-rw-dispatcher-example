import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/edit'
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./views/Form.vue'),
      meta: {
        state: 'write'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/Form.vue'),
      meta: {
        state: 'read'
      }
    }
  ]
})
