// import Vue and the router
import Vue from 'vue';
import Router from 'vue-router';

// import all routes, maybe use default-webpack-path here
import login from '../pages/login/routes';

// tell Vue to use this specific router
Vue.use(Router);

export default new Router({
  // each main page defines it own routes
  // we just put the object to register
  routes: [
    login
  ]
});
