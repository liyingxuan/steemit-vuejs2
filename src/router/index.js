import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Index'
import Register from '@/components/register/Register'
import Login from '@/components/login/Login'
import Post from '@/components/posts/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles/:name',
      name: 'articles',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: Post
    }
  ]
})
