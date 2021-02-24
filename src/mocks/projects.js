export default [
  {
    name: '.git',
    type: 'projectStage'
  },
  {
    name: 'node_modules'
  },
  {
    name: '总体单位',
    children: [
      {
        name: '领域',
        children: [{
          name: '型号集',
          file: 'png',
          type: 'root',
          children: [{
            name: '型号',
            file: 'png',
            type: 'root',
            children: [{
              name: 'Z',
              file: 'pnfg',
              type: 'root'
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
    file: 'txt'
  }
]
