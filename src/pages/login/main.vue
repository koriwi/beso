<template lang='pug'>
.page
  bedgebar.is-tablet(color='primary', lighter-color=true, border='bottom')
    img.image.is-64x64(slot='left', src='../../assets/logo.png')
    bselect(slot='right', name='language_selector', :dataSource='listLangs()', :onChange='changeLang')
  .content-box
    bcenter-box
      router-view
  bedgebar(color='primary', lighter-color=true, border='top')
    a
</template>

<script>
// import the lang mixin to provide the changeLang and listLangs functions
import langMixin from '@/mixins/lang';

export default {
  name: 'loginIndex',
  mixins: [langMixin]
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
