import theme from './theme'
import nodeTabs from './nodeTabs'
import menu from './menu'
import layout from '@/configs/layout'

export default {
  // product display information
  product: {
    name: '宇航产品数据中心',
    version: 'v1.0.1'
  },

  theme,
  layout, // 布局方案的参数
  menu,
  nodeTabs // 树节点类型对应的 Tabs 和 Components
}
