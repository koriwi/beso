<template lang='pug'>
  div
    h1.title lel
    nep.title ich bin nep
    h1.title(v-if='$route.params.id') {{ $route.params.id }}
    p {{ $route.params.id }}
</template>

<script>
export default {
  name: 'lel',
  mounted () {
    console.log('mounted')
  }
}
</script>
