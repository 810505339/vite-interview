# v-if 和 v-for 的优先级哪个高

## 在vue2中
在vue2中v-if的优先级高于v-for

```html
<!-- 在vue2中 3,4,5 -->
<template>   
   <div v-for="item in 5" v-if="item>2">
   	<span>{{item}}</span>
  </div>
</template>
```

