<template lang='pug'>
.box
  bform(@success='login')
    binput(type='email', :placeholder='"login.username" | translate', name='username')
      | {{"login.username" | translate}}
    binput(type='password', :placeholder='"login.password" | translate', name='password')
      | {{"login.password" | translate}}
    bsubmit(spread=true)
      | {{"login.submit" | translate}}
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
