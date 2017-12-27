import JwtToken from '../../helpers/jwt'
import axios from 'axios'
import * as types from "../mutation-type";

export default {
  actions: {
    postRequest({dispatch}, formData) {
      return axios.post(process.env.API_URL + 'post/create', formData).then(response => {
        // dispatch('postSuccess', response.data)
      }).catch(error => {
        //
      })
    }
  }
}
