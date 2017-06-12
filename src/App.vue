<template lang='pug'>
  #app
    router-view
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route (to, from) {
      console.log(`changin from ${from.path} to ${to.path} :)`);
    }
  }
};
</script>

<style lang='sass'>

// import our own variables and THEN bulma, important
@import '../config/style.sass';
@import '../node_modules/bulma/bulma.sass';
// @import '../node_modules/font-awesome/scss/font-awesome.scss';
@import '../config/custom.sass';

html, body, #app, .page
  height: 100%;


html
  overflow: hidden;


</style>
