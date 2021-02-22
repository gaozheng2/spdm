import Vuetify from '../../plugins/vuetify'

export default {
  setGlobalTheme: (state, theme) => {
    Vuetify.framework.theme.dark = theme === 'dark'
    state.globalTheme = theme
  },
  setFullScreen: (state) => {
    state.fullScreen = !state.fullScreen
  },
  setLayout: (state, layout) => {
    state.layout = layout
  }
}
