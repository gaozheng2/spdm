export default [
  {
    name: '五院',
    type: 'root'
  },
  {
    name: '星云一号',
    type: 'projectStage',
    code: 'XY-1',
    stage: 'C'
  },
  {
    name: '总体单位',
    type: 'unit',
    children: [
      {
        name: '领域',
        type: 'domain',
        children: [{
          name: '型号集',
          file: 'png',
          type: 'set',
          children: [{
            name: '型号一号02星',
            code: 'XXX-2(F3)',
            file: 'png',
            type: 'project',
            children: [{
              name: '电性星',
              code: 'C',
              file: 'none',
              type: 'stage'
            }, {
              name: '结构热控星',
              code: 'C',
              file: 'none',
              type: 'stage'
            }, {
              name: '正样星',
              code: 'Z',
              file: 'none',
              type: 'stage'
            }]
          }]
        }]
      },
      {
        name: 'favicon.ico',
        file: 'png',
        type: 'unit'
      },
      {
        name: 'index.html',
        file: 'html',
        type: 'domain'
      }
    ]
  },
  {
    name: '.gitignore',
    file: 'txt',
    type: 'set'
  },
  {
    name: 'babel.config.js',
    file: 'js',
    type: 'project'
  },
  {
    name: 'package.json',
    file: 'json',
    type: 'stage'
  },
  {
    name: 'README.md',
    file: 'md',
    type: 'part'
  },
  {
    name: 'vue.config.jssadfasdfasfsafsdfsadfasfas',
    file: 'js',
    type: 'sing'
  },
  {
    name: 'yarn.lock',
    file: 'txt',
    type: 'sing'
  }
]
