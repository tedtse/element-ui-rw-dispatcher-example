import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import ElementUIRWDispatcher from 'element-ui-rw-dispatcher';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui-rw-dispatcher/styles/index.scss';

Vue.use(ElementUI);
Vue.use(ElementUIRWDispatcher);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
