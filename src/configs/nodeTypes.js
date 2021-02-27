export default {
  root: {
    text: '五院',
    icon: 'mdi-home-outline',
    icon_open: 'mdi-folder-open',
    icon_size: 16,
    tabs: [
      {
        text: '驾驶舱',
        component: 'PageDashboard'
      },
      {
        text: '五院管理',
        component: 'PageRootConfig'
      }
    ]
  },
  unit: {
    text: '总体单位',
    icon: 'mdi-home',
    icon_open: 'mdi-home-minus-outline',
    icon_size: 16,
    singleFold: true, // 是否展开本节点时关闭其他节点
    tabs: [
      {
        text: '驾驶舱',
        component: 'PageDashboard'
      },
      {
        text: '单位管理',
        component: 'PageUnitConfig'
      }
    ]
  },
  domain: {
    text: '领域',
    icon: 'mdi-satellite-variant',
    tabs: [
      {
        text: '领域信息',
        component: 'PageDomainInfo'
      }
    ]
  },
  set: {
    text: '型号集',
    icon: 'mdi-plus-box-outline',
    icon_open: 'mdi-minus-box-outline',
    tabs: [
      {
        text: '型号集信息',
        component: 'PageSetInfo'
      }
    ]
  },
  project: {
    text: '型号',
    icon: 'mdi-android-auto',
    hasStar: true, // 是否能够收藏
    tabs: [
      {
        text: '型号信息',
        component: 'PageProjectInfo'
      },
      {
        text: '型号配置',
        component: 'PageProjectConfig'
      }
    ]
  },
  stage: {
    text: '阶段',
    icon: '',
    showSing: true, // 点击是否显示产品树
    tabs: [
      {
        text: '阶段信息',
        component: 'PageStageInfo'
      },
      {
        text: '配套管理',
        component: 'PageListConfig'
      },
      {
        text: '总体数据包',
        component: 'PageProjectData'
      }
    ]
  },
  projectStage: {
    text: '型号+阶段',
    icon: 'mdi-android-auto',
    hasStar: true, // 是否能够收藏
    showSing: true, // 点击是否显示产品树
    tabs: [
      {
        text: '型号阶段信息',
        component: 'PageProjectStageInfo'
      },
      {
        text: '型号配置',
        component: 'PageProjectConfig'
      },
      {
        text: '配套管理',
        component: 'PageListConfig'
      },
      {
        text: '总体数据包',
        component: 'PageProjectData'
      }
    ]
  },
  part: {
    text: '分系统',
    icon: 'mdi-plus-box-outline',
    icon_open: 'mdi-minus-box-outline',
    isSing: true, // 是否属于产品树
    singleFold: true, // 是否展开本节点时关闭其他节点
    tabs: [
      {
        text: '分系统信息',
        component: 'PagePartInfo'
      },
      {
        text: '分系统管理',
        component: 'PagePartConfig'
      },
      {
        text: '分系统数据包',
        component: 'PagePartData'
      }
    ]
  },
  sing: {
    text: '单机',
    icon: 'mdi-radiobox-marked',
    hasStar: true, // 是否能够收藏
    isSing: true, // 是否属于产品树
    tabs: [
      {
        text: '单机信息',
        component: 'PageSingInfo'
      },
      {
        text: '数据验收',
        component: 'PageDataCheck'
      }
    ]
  }
}
