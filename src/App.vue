<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import jwtToken from './helpers/jwt'

  export default {
    name: 'app',
    created() {
      // 登录保持
      if(jwtToken.getToken()) {
        this.$store.dispatch('setAuthUser')
      }
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900");

  body {
    font-family: "Montserrat", Verdana, "Microsoft YaHei", "微软雅黑", sans-serif;
    background-color: #fcfcfc;
  }
</style>

