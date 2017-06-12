/* import Vue.js 2 */
import Vue from 'vue';

/* import font-awesome */
import 'font-awesome/scss/font-awesome.scss';

/* import the main COMPONENT */
import App from './App';

/* import the router */
import router from './router';

/* import the component loader */
import Components from './components';
Components.register(Vue); // and register all

/* import the filter loader */
import Filters from './filters';
Filters.register(Vue); // and register all

/* import the extensions loader */
import extensions from './extensions';
extensions.register(Vue); // and register all

// put into default behavior file **********
if (!window.localStorage.getItem('lang')) {
  const navLang = navigator.language.toLowerCase().slice(0, 2);
  window.localStorage.setItem('lang', navLang);
}
// *****************************************

// dunno what this is especially
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
