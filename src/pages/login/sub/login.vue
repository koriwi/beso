<template lang='pug'>
.box
  bform(@success='login')
    binput(type='email', placeholder='Username', name='username') Username
    binput(type='password', placeholder='Password', name='password') Password
    bsubmit(spread=true) {{"login" | translate}}
</template>

<script>
export default {
  name: 'login-index',
  methods: {
    login () {
      console.log('logged in');
    }
  }
};
</script>

<style>
.box {
  width: 100%;
  max-width: 400px;
}
</style>
