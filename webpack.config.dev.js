const config = require('./webpack.config')
const path = require('path')

module.exports = {
  ...config,
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    compress: true,
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        secure: false
      }
    }
  }
}
