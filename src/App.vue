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

<style>
html, body, #app, .page {
  height: 100%;
}
</style>
