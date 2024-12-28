const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (pathName) => path.resolve(__dirname, pathName)

module.exports = {
  // webpack
  webpack: {
    // 配置别名
    alias: {
      '@': resolve('src')
    }
  },

  // less
  plugins: [{ plugin: CracoLessPlugin }]
}
