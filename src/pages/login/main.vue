<template lang='pug'>
.page
  bselect(name='language_selector', :dataSource='listLangs()', :onChange='changeLang')
  bcenter-box
    router-view
</template>

<script>
export default {
  name: 'loginIndex',
  methods: {
    changeLang (l) {
      window.localStorage.setItem('lang', l);
      this.$router.go({path: 'this.$router.path'});
    },
    listLangs () {
      return new Promise((resolve, reject) => {
        resolve(JSON.parse(window.localStorage.getItem('lang_arr')));
      });
    }
  }
};
</script>


<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
