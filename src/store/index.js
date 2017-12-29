import Vue from 'vue'
import Vuex from 'vuex'

import Notification from './modules/notification'
import AuthUser from './modules/auth-user'
import Login from './modules/login'
import Post from './modules/post'
import Tags from './modules/tags'
import Likes from './modules/likes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Notification,
    AuthUser,
    Login,
    Post,
    Tags,
    Likes
  }
})
