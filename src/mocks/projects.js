export default [
  {
    id: '1',
    name: '五院',
    type: 'root'
  },
  {
    id: '2',
    name: '星云一号',
    type: 'projectStage',
    code: 'XY-1',
    stage: 'C'
  },
  {
    id: '3',
    name: '总体单位',
    type: 'unit',
    children: [
      {
        id: '31',
        name: '领域',
        type: 'domain',
        children: [{
          id: '311',
          name: '型号集',
          file: 'png',
          type: 'set',
          children: [{
            id: '3111',
            name: '型号一号02星',
            code: 'XXX-2(F3)',
            file: 'png',
            type: 'project',
            children: [{
              id: '31111',
              name: '电性星',
              code: 'C',
              file: 'none',
              type: 'stage'
            }, {
              id: '3112',
              name: '结构热控星',
              code: 'C',
              file: 'none',
              type: 'stage'
            }, {
              id: '3113',
              name: '正样星',
              code: 'Z',
              file: 'none',
              type: 'stage'
            }]
          }]
        }]
      },
      {
        id: '32',
        name: 'favicon.ico',
        file: 'png',
        type: 'unit'
      },
      {
        id: '33',
        name: 'index.html',
        file: 'html',
        type: 'domain'
      }
    ]
  },
  {
    id: '4',
    name: '.gitignore',
    file: 'txt',
    type: 'set'
  },
  {
    id: '5',
    name: 'babel.config.js',
    file: 'js',
    type: 'project'
  },
  {
    id: '6',
    name: 'package.json',
    file: 'json',
    type: 'stage'
  },
  {
    id: '7',
    name: 'README.md',
    file: 'md',
    type: 'part'
  },
  {
    id: '8',
    name: 'vue.config.jssadfasdfasfsafsdfsadfasfas',
    file: 'js',
    type: 'sing'
  },
  {
    id: '9',
    name: 'yarn.lock',
    file: 'txt',
    type: 'sing'
  }
]
