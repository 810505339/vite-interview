# new 做了什么

## new 关键字
**在JavaScript中， new 关键字用来创建一个类（模拟类）的实例对象。**

例如:
```ts
function Person(name,age)
{
 this.name = name;
  this.age = age;
}

Person.prototype.getName = function(){
  return this.name;
};
var person = new Person('james', 18);
console.log(person.name, person.age);
person.getName();
```
在以上代码中 `var person = new Person('james', 18);`中的new关键字做了些什么呢？用伪代码来模拟其执行的过程如下：
```ts
new Person('james', 18)={
  var obj={}
  obj.__pro__=Person.prototype
   var res = Person.call(obj, 'james', 18) //改变this
   return  typeof  res  === 'object'? res:obj 
}
```

在JavaScript中， 使用new关键字后， 意味着做了如下4件事：

* 创建一个新的空对象 {}
* 设置这个对象原型指向构造函数， 即上例中的obj.__proto = Person.prototype
* 执行构造函数， 当this关键字被提及的时候， 使用新创建的对象的属性。
* 返回新创建的对象（除非构造函数中返回的是“无原型”）。
在创建一个新对象成功之后， 如果调用一个新对象没有的属性或方法的时候， JavaScript会沿着原型链向上逐层查找对应的属性或方法。 这就类似于传递的“类继承”。


