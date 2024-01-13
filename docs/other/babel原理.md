# babel原理
`Babel` 是 `JavaScript` 编译器：他能让开发者在开发过程中，直接使用各类方言（如 TS、Flow、JSX）或新的语法特性，而不需要考虑运行环境，因为 Babel 可以做到按需转换为低版本支持的代码；Babel 内部原理是将 JS 代码转换为 AST，对 AST 应用各种插件进行处理，最终输出编译后的 JS 代码。


## AST抽象语法树
`简单定义`：以树的形式来表现编程语言的语法结构。


## Babel编译流程
<img  src="/other/babel.jpg"/>





1. 解析阶段：`Babel` 默认使用`@babel/parser`将代码转换为 `AST`。解析一般分为两个阶段：词法分析和语法分析。
 
  词法分析：对输入的字符序列做标记化(tokenization)操作。

  语法分析：处理标记与标记之间的关系，最终形成一颗完整的 AST 结构。

2. 转换阶段：Babel 使用 `@babel/traverse` 提供的方法对 AST 进行深度优先遍历，调用插件对关注节点的处理函数，按需对 AST 节点进行增删改操作。
 
3. 生成阶段：Babel 默认使用 `@babel/generator` 将上一阶段处理后的 AST 转换为代码字符串。
