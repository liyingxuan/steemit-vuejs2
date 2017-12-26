import JwtToken from '../../helpers/jwt'
import axios from 'axios'
import * as types from "../mutation-type";

export default {
  actions: {
    loginRequest({dispatch}, formData) {
      return axios.post(process.env.API_URL + 'login', formData).then(response => {
        JwtToken.setToken(response.data.token)
        dispatch('setAuthUser')
      })
    },
    logoutRequest({dispatch}) {
      return axios.post(process.env.API_URL + 'logout').then(response => {
        JwtToken.removeToken()
        dispatch('unsetAuthUser')
      })
    }
  }
}
