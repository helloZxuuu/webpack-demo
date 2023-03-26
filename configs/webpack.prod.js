const path = require('path')
const {merge} = require("webpack-merge")
const baseConfig = require("./webpack.base.js")
const CopyPlugin = require("copy-webpack-plugin")
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist/static/public'),
          filter: source => {
            return !source.includes('index.html')
          }
        }
      ]
    })
  ]
})
