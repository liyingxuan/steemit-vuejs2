<template>
  <div>
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopNav from './common/TopNav'
  import jwtToken from './../helpers/jwt'
  import Cookie from 'js-cookie'

  export default {
    name: 'app',
    created() {
      // 登录保持；如果token没过期则直接获取用户信息，如果过期了去刷新token
      if (jwtToken.getToken()) {
        this.$store.dispatch('setAuthUser')
      } else if (Cookie.get('auth_id')) {
        this.$store.dispatch('refreshToken')
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

  /*提供给其他需要的组件使用*/
  .container-body {
    margin-top: 95px;
  }
  .container-fluid-body {
    margin-top: 65px;
  }
</style>

