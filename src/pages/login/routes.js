// this file contains the main and all its subpages for /login

// import all routes
import loginIndex from './main';
import loginLogin from './sub/login';
import loginForgot from './sub/forgot';

export default {
  path: '/login',
  name: 'login.index',
  component: loginIndex,
  children: [
    {
      path: '', // empty string means "default"
      name: 'login.login',
      component: loginLogin
    },
    {
      path: 'forgot',
      name: 'login.forgot',
      component: loginForgot
    }
  ]
};
