<template>
  <div>
    <top-nav></top-nav>
    <div class="container-div"></div>
    <notification></notification>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopNav from './common/TopNav'
  import Notification from './common/Notification'
  import jwtToken from './../helpers/jwt'
  import Cookie from 'js-cookie'
  import {mapActions} from 'vuex'

  export default {
    name: 'app',
    watch: {
      '$route': 'hideNotification'
    },
    methods: {
      ...mapActions([
        'hideNotification'
      ])
    },
    created() {
      // 登录保持；如果token没过期则直接获取用户信息，如果过期了去刷新token
      if (jwtToken.getToken()) {
        this.$store.dispatch('setAuthUser')
      } else if (Cookie.get('auth_id')) {
        this.$store.dispatch('refreshToken')
      }
    },
    components: {
      TopNav,
      Notification
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900");

  body {
    font-family: "Montserrat", Verdana, "Microsoft YaHei", "微软雅黑", sans-serif;
    background-color: #fcfcfc;
  }

  /* 和top nav的间距 */
  .container-div {
    height: 95px;
  }
</style>

