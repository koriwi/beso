import Vue from 'vue';
import App from './App';
import router from './router';
import Components from './components';
import Filters from './filters';

Vue.config.productionTip = false;

Components.register(Vue);
Filters.register(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
