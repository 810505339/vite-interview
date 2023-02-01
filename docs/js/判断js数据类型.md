# 判断js数据类型
判断类型有四种方法
1. **typeof**
2. **instanceof**
3. **Object.prototype.toString.call**
4. **constructor**

##  typeof
typeof是js内置的一个操作符，后面接一个对象的实例或者原始类型，例如:
```ts
console.log(typeof '123') // string
console.log(typeof 123) // number
console.log(typeof false) // boolean
console.log(typeof null) //object
console.log(typeof undefined) // undefined
console.log(typeof new Array) // object
console.log(typeof (()=>'')) // function
```

::: warning
* type of null  返回的是`object`
* typeof  函数 返回的是`function`
* typeof 对象实例，返回的是object，这里注意，除了函数，其他的实例应该都返回的object

:::

## instance of
使用方法:`obj instanceof Object` 左边是对象的实例 右边是构造函数

instanceof关键字判断的方式如下，假定o是对象实例、c是构造函数： 如果o继承自c.prototype，则o instanceof c的值为true。这里的继承可以是直接继承，也可以是间接继承

```ts
let array = new Array()
array instanceof Array // true
array instanceof Object // true
```
::: warning
只能判断是是否是构造函数的实例,不能去掉具体类型。
:::

## Object.prototype.toString.call

js是有类型的概念的，通过Object默认的toString方法，我们可以拿到类型字符串，比如[object Array]。
但是大部分内置对象，都会重写toString方法，所以我们不能直接调用obj.toString方法，需要调用Object.prototype.toString来访问默认的toString方法。

```ts
console.log(Object.prototype.toString.call(new Date)) // [object Date]
console.log(Object.prototype.toString.call(JSON)) // [object JSON]
console.log(Object.prototype.toString.call(Math)) // [object Math]
console.log(Object.prototype.toString.call(new f)) // [object Object]
console.log(Object.prototype.toString.call(f)) // [object Function]

```

对于大部分的内置类型，我们都可以通过Object.prototype.toString获取到类型字符串。
但是我们不能通过获取到自定义构造函数的具体的类型，在上例中，我们获取new f的类型字符串，返回的是[object Object]。解决这个问题，一种方式是重写f.prototype.toString，让其返回[object f]。但是当我们的toString另有他用的时候（参考Date的toString），这种方式就行不通了，而且每个新的构造函数都要重写toString，很麻烦

## constructor
我们知道，通过原型对象的constructor属性，可以获取到构造函数，我们能不能通过构造函数取到构造函数的名字呢？构造函数的名字也可以代表类型。

ES6里面提供了函数的name属性，我们可以通过func.name这种方式拿到函数名，例如：

```ts
function f() {}
console.log(f.name) // f
```
## 总结
1. 如果只是想要判断某一个对象是不是某一个构造函数的实例，使用instanceof
2. 如果希望区分内置对象和自定义对象，可以使用Object.prototype.toString.call
3. 如果希望判断是不是基础类型的或者对象，或者是函数，可以使用typeof 
4. 如果希望得到自定义对象的具体的类型的字符串，可以使用constructor


