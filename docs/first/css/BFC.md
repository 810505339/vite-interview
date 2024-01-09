# BFC
## BFC 概念
具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。
通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。
## 触发 BFC
只要元素满足下面任一条件即可触发 BFC 特性：

1. html 根元素
2. 浮动元素：float 除 none 以外的值
3. 绝对定位元素：position (absolute、fixed)
4. display 为 inline-block、table-cells、flex
5. overflow 除了 visible 以外的值 (hidden、auto、scroll)

## BFC 特性及应用
 同一个BFC下外边距会发生折叠
 ```html
<style>
div{
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
</style>
<body>
    <div></div>
    <div></div>
</body>
 ```
 如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。

 ```html
<style>
   .container {
    overflow: hidden;
}
p {
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
</style>

 <div class="container">
    <p></p>
</div>
<div class="container">
    <p></p>
</div>

 ```
