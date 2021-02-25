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
    status: '2',
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
          type: 'set',
          children: [{
            id: '3111',
            name: '型号一号02星',
            code: 'XXX-2(F3)',
            type: 'project',
            status: '1',
            children: [{
              id: '31111',
              name: '电性星',
              code: 'C',
              type: 'stage'
            }, {
              id: '3112',
              name: '结构热控星',
              code: 'C',
              type: 'stage'
            }, {
              id: '3113',
              name: '正样星',
              code: 'Z',
              type: 'stage'
            }]
          }]
        }]
      },
      {
        id: '32',
        name: 'favicon.ico',
        type: 'unit'
      },
      {
        id: '33',
        name: 'index.html',
        type: 'domain'
      }
    ]
  },
  {
    id: '4',
    name: '.gitignore',
    type: 'set'
  },
  {
    id: '5',
    name: 'babel.config.js',
    type: 'project',
    status: '3'
  },
  {
    id: '6',
    name: 'package.json',
    type: 'stage'
  },
  {
    id: '7',
    name: 'README.md',
    type: 'part'
  },
  {
    id: '8',
    name: 'vue.config.jssadfasdfasfsafsdfsadfasfas',
    type: 'sing',
    status: '2'
  },
  {
    id: '9',
    name: 'yarn.lock',
    type: 'sing',
    status: '1'
  }
]
