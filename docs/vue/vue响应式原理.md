# vue响应式原理

# Vue2中
通过Object.defineProperty()来实现响应式，Object.defineProperty()可以直接对一个对象添加一个属性，并将这个属性的configurable、enumerable、writable、get、set属性设置为true，这样就可以实现一个响应式的属性

1.性能问题：
Object.defineProperty()会将所有属性都转为getter/setter属性，当需要对一个对象进行大量的属性添加响应式时，会产生大量的getter/setter属性，会影响性能

2.无法检测到属性的删除和添加：
Object.defineProperty()无法检测到属性的删除，会将属性的值设置为undefined，导致无法检测到属性的删除，会造成内存泄露
Object.defineProperty()无法检测到属性的添加，只有当属性首次被访问时，才会调用getter函数，所以无法检测到属性的添加，会造成无法响应
所以,vue2中使用vue.$set()来添加响应式属性，vue.$delete()来删除响应式属性

3.无法检测数据（可以检测 但是性能太弱）：
vue2中重写了数组的push、pop、shift、unshift、splice、sort、reverse等方法，使得数组的响应式也能被检测到。


# Vue3中
通过Proxy来实现响应式，Proxy可以拦截对象属性的读取、设置、删除等操作，并在这些操作的前后调用钩子函数，从而实现响应式。

1.浏览器支持问题：
Proxy是ES6的新特性，需要浏览器支持，IE11及以下不支持

