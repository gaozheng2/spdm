import mutations from './mutations'

const localConfigs = JSON.parse(localStorage.getItem('configs'))

const state = {
  fullScreen: false, // 是否全屏

  layout: (localConfigs && localConfigs.layout) || 1, // 布局方案

  path: ['根节点1', '父节点2', '子节点3'], // 面包屑路径

  nodeType: 'root', // 导航树点击的节点类型
  nodeId: '' // 导航树点击的节点 ID
}

export default {
  namespaced: true,
  state,
  mutations
}
