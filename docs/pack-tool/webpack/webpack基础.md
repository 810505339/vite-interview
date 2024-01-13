# webpack基础

`webpack`是一个打包工具,它可以打包一系列的例如:`js` `ts` `css` `图片` ···等资源文件,并且可以处理它们之间的依赖关系.


## 简单描述webpack的构建流程

1. `初始化参数`：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
2. `开始编译`：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
3. `确定入口`：根据配置中的 entry 找出所有的入口文件；
4. `编译模块`: 从入口文件出发，调用所有配置的 Loader 对模块进行编译，找出该模块依赖的模块，再递归本步骤直到所有依赖文件都经过本步骤的处理;
5. `完成模块编译`：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系;
6. `输出资源`：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会;
7. `完成输出`: 确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。  

## Loader 和 Plugin 的区别
`Loader` 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。
`test` 是需要处理的文件
`use`是需要使用哪个`loader`

```ts
module.exports = {
  module: { //loader  css 跟ts  用来识别css跟ts文件
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.ts$/, use: 'ts-loader' }, 
    ],
  }
  }
```

`Plugin` 插件 


## 描述一下 webpack 的热更新原理
webpack 的热更新又称为`热替换（Hot Module Replacement）`，缩写为`HMR`，这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
本质是利用 `WebSocket` 拉取`chunk diff`





## 如何减小打包体积？ 如何提高 webpack 的打包速度？
1. 使用 `tree-shaking` 和 `scope hoisting` 来剔除多余代码
2. 使用 `terser-webpack-plugin` 对 js 进行代码压缩
3. 使用 `optimize-css-assets-webpack-plugin` 来压缩css

## webpack 有哪些常见的 loader？你用过哪些 loader？
1. ` cache-loader`：可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里。
2. `file-loader`：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件（处理图片、字体、图标）。
3. `url-loader`：与file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader，小于阈值时返回文件 base64 形式编码（处理图片）。
4. `image-loader`：加载并且压缩图片文件。
5. `babel-loader`：把 ES6 转换成 ES5。
6. `ts-loader`：将 typescript 转换成 JavaScript。
7. `svg-inline-loader`：将压缩后的SVG内容注入代码中。
8. `raw-loader`：加载文件原始内容（utf-8）。
9. `sass-loader`：将 scss/sass 代码转换成 css。
10. `css-loader`：加载 css，支持模块化、压缩、文件导入等特性。
11. `less-loader`：将 less 代码转换成 css。
12. `style-loader`：生成 style 标签，将 js 中的样式资源插入，并添加到 header 中生效。
13. `postcss-loader`：扩展 css 语法，使用下一代 css，可以配合 autoprefixer 插件自动补齐 css3 前缀。
14. `eslint-loader`：通过 eslint 检查 JavaScript 代码。
15. `tslint-loader`：通过tslint 检查 ts 代码。
16. `vue-loader`：加载 vue.js 单文件组件。

## webpack 有哪些常见的 plugin？你用过哪些 plugin？

1. `html-webpack-plugin`：简化 html 文件创建
2. `clean-webpack-plugin`: 目录清理
3. `webpack-bundle-analyzer`：开启可视化的插件
4. `optimize-css-assets-webpack-plugin`:压缩css
