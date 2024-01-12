# webpack.config.js

```js
const path = require('path');
// 1. 引入打包html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

//引入单独打包css插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js', //webpack入口
  output: { //webpack出口 打包路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'development',
  module: { //loader  css 跟ts  用来识别css跟ts文件
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.ts$/, use: 'ts-loader' }, 
    ],
  },
  plugins: [
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      filename: "css/main.css",
    }),
    new HtmlWebpackPlugin({
      template: 'index.html', // 指定入口模板文件（相对于项目根目录）
      filename: 'index.html', // 指定输出文件名和位置（相对于输出目录）
      // 关于插件的其他项配置，可以查看插件官方文档
    })
  ]

};

```
