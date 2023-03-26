const path = require("path")
const { merge } = require("webpack-merge")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const baseConfig = require("./webpack.base")

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    port: 3000,
    compress: false, // gzip压缩，开发环境不开启提升更新速度
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../public")
    }
  }
})