export default {
  methods: {
    changeLang (l) {
      window.localStorage.setItem('lang', l);
      this.$router.go({path: 'this.$router.path'});
    },
    listLangsP () {
      return new Promise((resolve, reject) => {
        resolve(JSON.parse(window.localStorage.getItem('lang_arr')));
      });
    },
    listLangs () {
      return JSON.parse(window.localStorage.getItem('lang_arr'));
    }
  }
};
