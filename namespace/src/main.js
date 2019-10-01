import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUIRWDispatcher from 'element-ui-rw-dispatcher'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common.scss'

Vue.use(ElementUI)
Vue.use(ElementUIRWDispatcher, {
  namespace: 'my-ns'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
