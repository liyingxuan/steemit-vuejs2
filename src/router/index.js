import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/index'
import JwtToken from '../helpers/jwt'

import Home from '@/components/home/Index'
import Register from '@/components/register/Register'
import Login from '@/components/login/Login'
import Post from '@/components/posts/Post'
import ProfileBlog from '@/components/user/ProfileBlog'
import ProfileComments from '@/components/user/ProfileComments'
import ProfileSettings from '@/components/user/ProfileSettings'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {}
  },
  {
    path: '/articles/:name',
    name: 'Articles',
    component: Home,
    meta: {}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {requiresGuest: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {requiresGuest: true}
  },
  {
    path: '/posts/:id',
    name: 'Posts',
    component: Post,
    meta: {}
  },
  {
    path: '/blog',
    name: 'Blog',
    component: ProfileBlog,
    meta: {requiresAuth: true}
  },
  {
    path: '/comments',
    name: 'Comments',
    component: ProfileComments,
    meta: {requiresAuth: true}
  },
  {
    path: '/settings',
    name: 'Settings',
    component: ProfileSettings,
    meta: {requiresAuth: true}
  }
]

const router = new Router({
  routes: routes
})

/**
 * 路由判断
 */
router.beforeEach((to, from, next)=> {
  // 如果登录了，可以访问profile
  if (to.meta.requiresAuth) {
    if (!Store.state.AuthUser.authenticated && !JwtToken.getToken()) {
      return next({'name': 'Login'})
    }
  }

  // 如果登录了，不能访问login
  if (to.meta.requiresGuest) {
    if (Store.state.AuthUser.authenticated || JwtToken.getToken()) {
      return next({'name': 'Home'})
    }
  }

  next()
})

export default router
