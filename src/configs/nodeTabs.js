export default {
  root: {
    text: '五院',
    icon: 'mdi-pan',
    icon_open: 'mdi-folder-open',
    items: [
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
    icon: 'mdi-pan',
    icon_open: 'mdi-folder-open',
    items: [
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
    icon: 'mdi-folder',
    icon_open: 'mdi-folder-open',
    items: [
      {
        text: '领域信息',
        component: 'PageDomainInfo'
      }
    ]
  },
  set: {
    text: '型号集',
    icon: 'mdi-folder',
    icon_open: 'mdi-folder-open',
    items: [
      {
        text: '型号集信息',
        component: 'PageSetInfo'
      }
    ]
  },
  project: {
    text: '型号',
    icon: 'mdi-android-auto',
    items: [
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
    items: [
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
    items: [
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
    icon: 'mdi-folder',
    icon_open: 'mdi-folder-open',
    items: [
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
    items: [
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
