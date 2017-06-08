import Vue from 'vue';
import App from './App';
import router from './router';
import Components from './components';
import Filters from './filters';
import extensions from './extensions';

// put into default behavior file **********
if (!window.localStorage.getItem('lang')) {
  const navLang = navigator.language.toLowerCase().slice(0, 2);
  window.localStorage.setItem('lang', navLang);
}
// *****************************************

Vue.config.productionTip = false;

// register components and filters globally
Components.register(Vue);
Filters.register(Vue);
extensions.register(Vue);
// ****************************************

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
