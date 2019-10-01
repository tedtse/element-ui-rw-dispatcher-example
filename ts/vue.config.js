module.exports = {
  chainWebpack: config => {
    config.module
      .rule('tsx')
        .use('babel-loader')
          .loader('babel-loader')
          .tap((options = {}) => {
            options.include = ['node_modules/element-ui-rw-dispatcher']
            return options
          })
          .end()
        .end()
        .rule('js')
        .use('babel-loader')
          .loader('babel-loader')
          .tap((options = {}) => {
            options.include = ['node_modules/element-ui-rw-dispatcher']
            return options
          })
          .end()
        .end()
        .rule('ts')
        .use('babel-loader')
          .loader('babel-loader')
          .tap((options = {}) => {
            options.include = ['node_modules/element-ui-rw-dispatcher']
            return options
          })
          .end()
        .end()
  }
}