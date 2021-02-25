import theme from './theme'
import layout from './layout'
import menu from './menu'
import nodeTypes from './nodeTypes'
import btns from './btns'
import status from './status'

export default {
  // product display information
  product: {
    name: '宇航产品数据中心',
    version: 'v1.0.1'
  },

  theme,
  layout, // 布局方案的参数
  menu,
  nodeTypes, // 树节点类型对应的 Tabs 和 Components
  btns,
  status // 状态码对应的图标颜色
}
