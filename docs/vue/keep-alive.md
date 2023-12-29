# keep-alive的理解

## 1.什么是keep-alive

keep-alive是一种优化手段，可以让浏览器在一个页面中，保存多个页面的状态，当用户再次访问时，可以直接从缓存中获取之前保存的页面，而不是重新请求。

## 2.keep-alive的使用场景

- 页面切换时，如从列表页切换到详情页，可以直接从缓存中获取详情页的状态，避免重新请求数据。

## 3.如何使用？
```ts
<!-- comma-delimited string -->
<KeepAlive include="a,b" :max="10">
  <component :is="view" />
</KeepAlive>

<!-- regex (use `v-bind`) -->
<KeepAlive :include="/a|b/"  :exclude="a,b" >
  <component :is="view" />
</KeepAlive>

<!-- Array (use `v-bind`) -->
<KeepAlive :include="['a', 'b']">
  <component :is="view" />
</KeepAlive>

<script setup lang="ts">
import {activated,deactivated} from 'vue'
activated(()=>{
  console.log('activated')
})
deactivated(()=>{
  console.log('deactivated')
})
</script>
```

- include：指定需要缓存的组件名，支持字符串、正则表达式、数组三种类型的值。
- exclude：指定不缓存的组件名，支持字符串、正则表达式、数组三种类型的值。
- max：指定缓存的最大组件数，默认值为-1，即不限制缓存的最大组件数。
- activated:组件激活时触发
- deactivated:组件失活时触发

## 4.keep-alive的实现原理
- 第一步：获取keep-alive包裹着的第一个子组件对象及其组件名；
- 第二步：根据设定的黑白名单（如果有）进行条件匹配，决定是否缓存。不匹配，直接返回组件实例（VNode），否则执行第三步；
- 第三步：根据组件ID和tag生成缓存Key，并在缓存对象中查找是否已缓存过该组件实例。如果存在，直接取出缓存值并更新该key在this.keys中的位置（更新key的位置是实现LRU置换策略的关键），否则执行第四步；
- 第四步：在this.cache对象中存储该组件实例并保存key值，之后检查缓存的实例数量是否超过max的设置值，超过则根据LRU置换策略删除最近最久未使用的实例（即是下标为0的那个key）。
- 第五步：最后并且很重要，将该组件实例的keepAlive属性值设置为true。这个在@不可忽视：钩子函数 章节会再次出场。
