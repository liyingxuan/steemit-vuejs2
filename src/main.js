// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import router from './router/index'
import store from './store/index'
import jwtToken from './helpers/jwt'
import axios from 'axios'
import VueAxios from 'vue-axios'

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'

import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';



/**
 * 设置JWT用户认证所需的http Authorization头信息
 */
axios.interceptors.request.use(function (config) {
  if(jwtToken.getToken()) {
    // Bearer后需要一个空格！！！
    config.headers['Authorization'] = 'Bearer' + ' ' + jwtToken.getToken()
  }
  return config
}, function (error) {
  return Promise.reject(error)
})


/**
 * Vee Validate 中文提示设置
 * 打开下面的zh_CN的注释就可以显示中文了。
 * 其中前端input自定义字段名的汉化需要：data-vv-as显示
 */
Validator.localize('zh_CN', zh_CN);
Vue.use(VeeValidate, {
  // locale: 'zh_CN'
});


Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  name: '{locale}'
})
