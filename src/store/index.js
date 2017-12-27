import Vue from 'vue'
import Vuex from 'vuex'

import AuthUser from './modules/auth-user'
import Login from './modules/login'
import Post from './modules/post'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthUser,
    Login,
    Post
  }
})
