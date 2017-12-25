<template>
  <nav class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs fixed-top navbar-light bg-light navbar-elevation">
    <router-link class="navbar-brand" :to="{path: '/'}">Navbar</router-link>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="[(this.$route.params.name==='new') ? 'active' : '']">
          <router-link class="nav-link" :to="{name: 'articles', params: {name:'new'}}">New</router-link>
        </li>
        <li class="nav-item" :class="[(this.$route.params.name==='hot') ? 'active' : '']">
          <router-link class="nav-link" :to="{name: 'articles', params: {name:'hot'}}">Hot</router-link>
        </li>

        <li class="nav-item">
          <input class="form-control mr-sm-2 nav-search" type="text" placeholder="Search">
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item" v-if="!user.authenticated"
            :class="[(this.$route.name==='register') ? 'active' : '']">
          <router-link class="nav-link" :to="{name: 'register'}">Sign up</router-link>
        </li>
        <li class="nav-item" v-if="!user.authenticated"
            :class="[(this.$route.name==='login') ? 'active' : '']">
          <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
        </li>
        <li class="post-li" v-if="user.authenticated">
          <router-link class="btn btn-success post-btn" to="#">Post</router-link>
        </li>

        <li class="nav-item dropdown show" v-if="user.authenticated">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
            <img class="navbar-avatar" :src="demoAvatar" alt="">
          </a>
          <div class="dropdown-menu" x-placement="bottom-start">
            <a class="dropdown-item" href="#">
              <i class="fa fa-home" aria-hidden="true"></i>
              &nbsp;&nbsp;Blog
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa fa-comment" aria-hidden="true"></i>
              &nbsp;&nbsp;Comments
            </a>
            <a class="dropdown-item" href="#">
              <i class="fa fa-cog" aria-hidden="true"></i>
              &nbsp;&nbsp;Settings
            </a>
            <div class="dropdown-divider"></div>
            <a @click.prevent="logout" class="dropdown-item" href="#">
              <i class="fa fa-sign-out" aria-hidden="true"></i>
              &nbsp;&nbsp;Logout
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'TopNav',
    data() {
      return {
        demoAvatar: require('../../assets/img/avatar.png'),
      }
    },
    computed: {
      ...mapState({
        user: state => state.AuthUser
      })
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
      },
      logout() {
        this.$store.dispatch('logoutRequest').then(response => {
          this.$router.push({name: 'Home'})
        })
      }
    }
  }
</script>

<style>
  .navbar-elevation {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  }

  .nav-item {
    margin-left: 10px;
  }

  .nav-search {
    margin-left: 40px;
    border-radius: 0;
    border: 0;
  }

  .post-btn {
    margin-top: 7px;
    border-radius: 0;
    border: 0;
    font-size: 1.0rem;
    width: 88px;
    height: 40px;
  }

  .post-li {
    margin-left: 15px;
  }
  .post-li > a {
    background-color: #171F24;
    box-shadow: 0 0 0 0 transparent, 4px 4px 0 0 #06D6A9;
    color: #fcfcfc;
  }
  .post-li > a:hover {
    background-color: #06D6A9;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.1), 5px 5px 0 0 #171F24;
    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  }
  .post-li > a:not([href]):not([tabindex]) {
    color: white;
  }

  .navbar-avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-left: 20px;
  }

  .navbar {
    font-size: 1.1em;
  }

  .fa {
    width: 18px;
  }

  .dropdown-menu {
    position: absolute;
    transform: translate3d(-70px, 50px, 0px);
    top: 0;
    left: 0;
    will-change: transform;
  }

  .nav-item > input::-webkit-input-placeholder { color:#cacaca; }
  .nav-item > input::-moz-placeholder { color:#cacaca; } /* firefox 19+ */
  .nav-item > input:-ms-input-placeholder { color:#cacaca; } /* ie */
  .nav-item > input:-moz-placeholder { color:#cacaca; }
</style>
