// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'

import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

Validator.localize('zh_CN', zh_CN);
Vue.use(VeeValidate, {
  // locale: 'zh_CN' // 中文提示，取消注释前端验证提示就是中文了；需要配合前端的自定义显示字段名data-vv-as显示中文
});


Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  name: '{locale}'
})
