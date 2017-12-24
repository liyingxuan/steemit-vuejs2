/**
 * 将登陆用户的token保存到本地localStorage里。
 */

export default {
  setToken(token) {
    window.localStorage.setItem('jwt_token', token)
  },
  getToken() {
    return window.localStorage.getItem('jwt_token')
  },
  removeToken() {
    window.localStorage.removeItem('jwt_token')
  }
}
