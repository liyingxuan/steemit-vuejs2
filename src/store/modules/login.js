import JwtToken from '../../helpers/jwt'
import axios from 'axios'

export default {
  actions: {
    loginRequest({dispatch}, formData) {
      axios.post(process.env.API_URL + 'login', formData).then(response => {
        JwtToken.setToken(response.data.token)
        dispatch('setAuthUser')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
