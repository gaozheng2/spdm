module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '宇航产品数据中心',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import \'~@/assets/scss/vuetify/variables\''
      },
      scss: {
        prependData: '@import \'~@/assets/scss/vuetify/variables\';'
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
