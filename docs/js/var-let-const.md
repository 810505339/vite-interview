# var let const 的区别
## 1.序言
var、let 和 const 都是 JavaScript 中用来声明变量的关键字，并且 let 和 const 关键字是在 ES6 中才新增的。既然都是用来声明变量的，那它们之间有什么区别呢？让我们来一探究竟。

## 2.var 与 let 的区别
  **作用域不同**

  var 声明的变量的作用域只能是全局或者整个函数块的。而 let 声明的变量的作用域则是它当前所处代码块，即它的作用域既可以是全局或者整个函数块，也可以是 if、while、switch等用`{}`限定的代码块。

``` ts
 //作用域不同
function getName() {
  for (var index = 0; index < 3; index++) {

  }
  console.log(index); //打印3 因为var没有块级作用域
}
getName()

```

  **重复声明**

  var 允许在同一作用域中重复声明，而 let 不允许在同一作用域中重复声明，否则将抛出异常。
``` ts
 //重复声明
function getName() {
  var name='小明'
  var name ='小张'
  console.log(name) //小张 var可以重复声明

  let age=15
  let age=18 
   console.log(name) //Uncaught SyntaxError: Identifier 'age' has already been declared
   
}
getName()

```

  **绑定全局对象**

 var 在全局环境声明变量，会在全局对象里新建一个属性，而 let 在全局环境声明变量，则不会在全局对象里新建一个属性。

 ```ts
var foo = 'global'
let bar = 'global'

console.log(this.foo) // global
console.log(this.bar) // undefined 绑定到script中
 ```


  **变量提升与暂存死区**

 1.var 声明的变量在执行上下文创建阶段就会被`「创建」`和`「初始化」`，因此对于执行阶段来说，可以在声明之前使用。

2.let 声明的变量在执行上下文创建阶段只会被`「创建」`而不会被`「初始化」`，因此对于执行阶段来说，如果在其定义执行前使用，相当于使用了未被初始化的变量，会报错。

示例代码 1：
```ts
console.log(bar); // undefined
console.log(foo); // ReferenceError: foo is not defined

var bar = 1;
let foo = 2;

```

示例代码2:

```ts
var foo = 33;
{
  let foo = (foo + 55); // ReferenceError: foo is not defined
}

```
