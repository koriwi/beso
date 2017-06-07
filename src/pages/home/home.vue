<template lang='pug'>
  .root
    img(src="../../assets/logo.png")
    p.title(v-text='msg')
    router-link(:to="{ name: 'home.lel', id: 151 }") Go to Lel
    router-link(:to="{ name: 'home.kek', id: 151 }") Go to Kek
    router-view
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log('mounted')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
