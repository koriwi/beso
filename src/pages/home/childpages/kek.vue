<template lang='pug'>
  div
    h1.title kek
    pen ich bin pen
    h1.title(v-if='$route.params.id') {{ $route.params.id }}
    p {{ $route.params.id }}
</template>

<script>
export default {
  name: 'kek',
  mounted () {
    console.log('mounted')
  }
}
</script>
