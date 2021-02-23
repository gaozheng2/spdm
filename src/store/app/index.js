import mutations from './mutations'

const localConfigs = JSON.parse(localStorage.getItem('configs'))

const state = {
  globalTheme: 'light',

  // 是否全屏
  fullScreen: false,

  // 布局方案
  layout: (localConfigs && localConfigs.layout) || 1,

  // 面包屑路径
  path: ['根节点1', '父节点2', '子节点3']
}

export default {
  namespaced: true,
  state,
  mutations
}
