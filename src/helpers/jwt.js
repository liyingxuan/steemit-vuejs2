/**
 * 将登陆用户的token保存到本地localStorage里。
 */
import Cookie from 'js-cookie'

export default {
  setToken(token) {
    window.localStorage.setItem('jwt_token', token)
  },
  getToken() {
    return window.localStorage.getItem('jwt_token')
  },
  removeToken() {
    window.localStorage.removeItem('jwt_token')
    Cookie.remove('auth_id')
  },
  setAuthId(authId) {
    Cookie.set('auth_id', authId)
  }
}
