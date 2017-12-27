import axios from 'axios'
import * as types from "../mutation-type";

export default {
  state: {
    myBlogList: []
  },
  mutations: {
    [types.GET_MY_BLOG](state, payload) {
      state.myBlogList = payload.blog
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
    postList({commit}) {
      return axios.get(process.env.API_URL + 'post/my-blog').then(response => {
        commit({
          type: types.GET_MY_BLOG,
          blog: response.data.data
        })
      }).catch(error => {
        //
      })
    },
  }
}
