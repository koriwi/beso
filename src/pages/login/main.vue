<template lang='pug'>
.page
  bedgebar.is-tablet
    img.image.is-64x64(slot='left', src='../../assets/logo.png')
    bselect(slot='right', name='language_selector', :dataSource='listLangs()', :onChange='changeLang')
  .content-box
    bcenter-box
      router-view
  bedgebar
    p lelelel
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
  /* width: 100%;
  max-width: 1384px; */
}
.text-center {
  text-align: center;
}
</style>
