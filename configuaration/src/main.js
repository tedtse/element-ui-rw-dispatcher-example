import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUIRWDispatcher from 'element-ui-rw-dispatcher'
import 'element-ui-rw-dispatcher/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'
import globalRWDispatcherConf from './config/global-rw-dispatcher'
import './assets/common.scss'

Vue.use(ElementUI)
Vue.use(ElementUIRWDispatcher, globalRWDispatcherConf)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
