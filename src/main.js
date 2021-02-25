import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import configs from './configs'
import './assets/scss/theme.scss'
import 'animate.css'

Vue.config.productionTip = false

Vue.prototype.$configs = configs

export default new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
