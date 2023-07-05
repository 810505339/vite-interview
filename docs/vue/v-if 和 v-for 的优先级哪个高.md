# v-if 和 v-for 的优先级哪个高

## 在vue2中
v-for 优先级高于 v-if

```html
<!-- 在vue2中 3,4,5 -->
<template>   
   <div v-for="item in 5" v-if="item>2">
   	<span>{{item}}</span>
  </div>
</template>
```

## 在vue3中
`vue3`中无法直接使用`v-for`跟`v-if`

```html
<div v-for="item in 5">
<template v-if="item<3">
  {{ item }}
</template>
</div>

```
