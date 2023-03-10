# 为什么vue2中根节点只有一个？

1. 参考https://github.com/vuejs/vue/issues/7088

![foo](/vue/gen.jpg){data-zoomable}

原因：**因为vue2中diff算法的限制所以根组件只能是一个**

## vue3中为什么跟实例可以有多个？
**因为vue3引入了`fragment`**

如果在 `vue` 页面中有多个元素节点，那么编译时 vue 会在这些元素节点上添加一个 `<Fragment></Fragment>` 标签，并且该标签不会出现在 `dom` 树中。

![foo](/vue/fragment.jpg)
