import * as types from '../mutation-type'
import axios from 'axios'

export default {
  state: {
    authenticated: false,
    name: null,
    email: null,
    joinDate: null
  },
  mutations: {
    [types.SET_AUTH_USER](state, payload) {
      state.authenticated = true
      state.name = payload.user.name
      state.email = payload.user.email
      state.joinDate = payload.user.created_at
    },
    [types.UNSET_AUTH_USER](state) {
      state.authenticated = false
      state.name = null
      state.email = null
      state.joinDate = null
    }
  },
  actions: {
    setAuthUser({commit, dispatch}) {
      return axios.get(process.env.API_URL + 'user/profile').then(response => {
        commit({
          type: types.SET_AUTH_USER,
          user: response.data.user
        })
      }).catch(error => {
        dispatch('refreshToken')
      })
    },
    unsetAuthUser({commit}) {
      commit({
        type: types.UNSET_AUTH_USER
      })
    },
    refreshToken({commit, dispatch}) {
      return axios.post(process.env.API_URL + 'token/refresh').then(response => {
        dispatch('loginSuccess', response.data)
      }).catch(error => {
        dispatch('logoutRequest')
      })
    }
  }
}
