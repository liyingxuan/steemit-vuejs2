<template>
  <div id="app">
    <top-nav></top-nav>

    <div class="container container-body">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import TopNav from './common/TopNav'
  import jwtToken from './../helpers/jwt'

  export default {
    name: 'app',
    created() {
      // 登录保持
      if(jwtToken.getToken()) {
        this.$store.dispatch('setAuthUser')
      }
    },
    components: {
      TopNav
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900");

  body {
    font-family: "Montserrat", Verdana, "Microsoft YaHei", "微软雅黑", sans-serif;
    background-color: #fcfcfc;
  }

  .container-body {
    margin-top: 95px;
  }
</style>

