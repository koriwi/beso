// all Vue.js 2 extension are loaded here

// import extensions from node_modules
import AsyncComputed from 'vue-async-computed';

export default {
  // register everything with i.use(XXX);
  register (i) {
    i.use(AsyncComputed);
  }
};
