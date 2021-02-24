export default {
  project: { // 型号发射状态
    1: {
      text: '在研',
      color: 'n_default'
    },
    2: {
      text: '已发射',
      color: 'n_blue'
    },
    3: {
      text: '已离轨',
      color: 'n_red'
    }
  },
  sing: { // 单机交付状态
    1: {
      text: '未交付',
      color: 'n_grey'
    },
    2: {
      text: '验收中',
      color: 'n_blue'
    },
    3: {
      text: '验收通过',
      color: 'green lighten-1'
    },
    4: {
      text: '拒收',
      color: 'n_red'
    },
    5: {
      text: '更改中',
      color: 'n_orange'
    },
    6: {
      text: '紧急放行',
      color: 'n_purple'
    }
  }
}
