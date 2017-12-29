import axios from 'axios'
import * as types from "../mutation-type"

export default {
  state: {
    myBlogList: [],
    blogList: [],
    blog: []
  },
  mutations: {
    [types.GET_MY_BLOG](state, payload) {
      state.myBlogList = payload.blog
    },
    [types.BLOG_LIST](state, payload) {
      state.blogList = payload.blog
    },
    [types.GET_BLOG](state, payload) {
      state.blog = payload.blog
    }
  },
  actions: {
    postRequest({dispatch}, formData) {
      return axios.post(process.env.API_URL + 'post/create', formData).then(response => {
        // dispatch('postSuccess', response.data)
      }).catch(error => {
        dispatch('showNotification', {level: 'danger', msg: 'Something Err!'})
        return false
      })
    },
    myPostList({commit}) {
      return axios.get(process.env.API_URL + 'post/my-blog').then(response => {
        commit({
          type: types.GET_MY_BLOG,
          blog: response.data.data
        })
      }).catch(error => {
        dispatch('showNotification', {level: 'danger', msg: 'Get myPostList error.'})
        return false
      })
    },

    // 变更blog数据
    commitBlog({commit}, responseData) {
      commit({
        type: types.GET_BLOG,
        blog: responseData
      })
    },
    oneBlog({dispatch}, id) {
      return axios.get(process.env.API_URL + 'post/blog/' + id).then(response => {
        dispatch('commitBlog', response.data.data)
      }).catch(error => {
        return axios.get(process.env.API_URL + 'blog/' + id).then(response => {
          dispatch('commitBlog', response.data.data)
        })
      })
    },

    // 变更blog list数据
    commitBlogList({commit}, responseData) {
      commit({
        type: types.BLOG_LIST,
        blog: responseData
      })
    },
    axiosGetBlogListData({dispatch}, path) {
      return axios.get(process.env.API_URL + 'post/' + path).then(response => {
        dispatch('commitBlogList', response.data.data)
      }).catch(error => {
        return axios.get(process.env.API_URL + path).then(response => {
          dispatch('commitBlogList', response.data.data)
        })
      })
    },
    normalPostList({dispatch}) {
      dispatch('axiosGetBlogListData', 'blogs')
    },
    newPostList({dispatch}) {
      dispatch('axiosGetBlogListData', 'new-blog')
    },
    hotPostList({dispatch}) {
      dispatch('axiosGetBlogListData', 'hot-blog')
    },
    tagPostList({dispatch}, tagName) {
      dispatch('axiosGetBlogListData', 'tag-blog/' + tagName)
    }
  }
}
