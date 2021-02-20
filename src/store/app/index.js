import configs from '../../configs'
import mutations from './mutations'

const { product, theme } = configs
const { isRTL, globalTheme } = theme

// state initial values
const state = {
  product,

  // app theme dark or light
  globalTheme,

  // themes and layout configurations
  isRTL,

  // 是否全屏
  fullScreen: false
}

export default {
  namespaced: true,
  state,
  mutations
}
