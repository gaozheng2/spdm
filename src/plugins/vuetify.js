import '@mdi/font/css/materialdesignicons.css' // 图标字体文件
import Vue from 'vue'

// For full framework
// import Vuetify from 'vuetify/lib/framework'
// For a-la-carte components - https://vuetifyjs.com/en/customization/a-la-carte/
import Vuetify from 'vuetify/lib'

import * as directives from 'vuetify/lib/directives'
import config from '../configs'

const localConfig = JSON.parse(localStorage.getItem('configs'))

Vue.use(Vuetify, {
  directives
})

export default new Vuetify({
  theme: {
    dark: (localConfig && localConfig.themeDark) || false,
    options: {
      customProperties: true
    },
    themes: {
      dark: config.theme.dark,
      light: config.theme.light
    }
  }
})
