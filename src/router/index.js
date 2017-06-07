import Vue from 'vue';
import Router from 'vue-router';

// routes
import login from '../pages/login/routes';

Vue.use(Router);

export default new Router({
  routes: [
    login
  ]
});
