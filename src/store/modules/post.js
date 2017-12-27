import axios from 'axios'
import * as types from "../mutation-type";

export default {
  state: {
    myBlogList: [],
    blogList: []
  },
  mutations: {
    [types.GET_MY_BLOG](state, payload) {
      state.myBlogList = payload.blog
    },
    [types.BLOG_LIST](state, payload) {
      state.blogList = payload.blog
    }
  },
  actions: {
    postRequest({dispatch}, formData) {
      return axios.post(process.env.API_URL + 'post/create', formData).then(response => {
        // dispatch('postSuccess', response.data)
      }).catch(error => {
        //
      })
    },
    myPostList({commit}) {
      return axios.get(process.env.API_URL + 'post/my-blog').then(response => {
        commit({
          type: types.GET_MY_BLOG,
          blog: response.data.data
        })
      }).catch(error => {
        //
      })
    },
    normalPostListLogged({commit}) {
      return axios.get(process.env.API_URL + 'post/blogs').then(response => {
        commit({
          type: types.BLOG_LIST,
          blog: response.data.data
        })
      }).catch(error => {
        //
      })
    },
    normalPostList({commit}) {
      return axios.get(process.env.API_URL + 'blogs').then(response => {
        commit({
          type: types.BLOG_LIST,
          blog: response.data.data
        })
      }).catch(error => {
        //
      })
    },
    newPostListLogged({commit}) {
      return axios.get(process.env.API_URL + 'post/new-blog').then(response => {
        commit({
          type: types.BLOG_LIST,
          blog: response.data.data
        })
      }).catch(error => {
        //
      })
    },
    newPostList({commit}) {
      return axios.get(process.env.API_URL + 'new-blog').then(response => {
        commit({
          type: types.BLOG_LIST,
          blog: response.data.data
        })
      }).catch(error => {
        //
      })
    },
    hotPostListLogged({commit}) {
      return axios.get(process.env.API_URL + 'post/hot-blog').then(response => {
        commit({
          type: types.BLOG_LIST,
          blog: response.data.data
        })
      }).catch(error => {
        //
      })
    },
    hotPostList({commit}) {
      return axios.get(process.env.API_URL + 'hot-blog').then(response => {
        commit({
          type: types.BLOG_LIST,
          blog: response.data.data
        })
      }).catch(error => {
        //
      })
    }
  }
}
