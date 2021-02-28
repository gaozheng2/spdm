import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import configs from './configs'
import './assets/scss/theme.scss' // 全局 css
import 'animate.css' // 动画效果
import api from './http/apis'

import request from '@/http/request'

request({
  url: 'stars'
})

document.documentElement.style.setProperty('--animate-duration', '.3s') // 设置动画时间

Vue.config.productionTip = false

Vue.prototype.$configs = configs
Vue.prototype.$api = api

export default new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
