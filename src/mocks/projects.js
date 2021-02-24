export default [
  {
    name: '.git'
  },
  {
    name: 'node_modules'
  },
  {
    name: 'public',
    children: [
      {
        name: 'static',
        children: [{
          name: 'logo.png',
          file: 'png',
          type: 'root'
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
    name: 'vue.config.js',
    file: 'js',
    type: 'sing'
  },
  {
    name: 'yarn.lock',
    file: 'txt'
  }
]
