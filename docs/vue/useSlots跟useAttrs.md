# useSlots跟useAttrs
这2个方法不经常使用,当时在封装组件的时候会比较经常用到。

## 作用
 `useSlots` 获取子组件的插槽内容
 `useAttrs` 获取子组件的属性
  [示例地址](https://play.vuejs.org/#eNqNU89rE0EU/leG8bAVYhbpRWIiVOlBD1psb46HNTtJt+7OLDOzMbAs9NBDsFAFRTCCPfkDD6IiKlTwn2k2+l/43kx214AN3dOb9773zff2fZPTjTRtjzJOO7Sr+ypKDdHcZCmJAzHsMWo0o9eYiJJUKkNuyCQlAyUT4rV9PGCrd5WJru+aAQoHw5M0DgyHEyFd2ySChANdH2JGSTDEw+UrlpvgV/eQC7s8CLmCeo5NRYMh5Y8v5fGzcvJ09vi4Q3JXLyoGf/laqw/CpTxtwUR9KQbRsL2npYCxc0Q7ZVHM1Z3URFLA1HCBY2Y0iGP56JbNGZXxVpXv7/L+w//k9/QYc4xuKa65GnFG65oJ1JAbV97cvs3HENfFRIZZDOgVxbtcyzhDjQ52PRMhyP4HZ9XetAuLxHBHb44NF7oaCoUisrB4RmGB+KPOGr2Ru95et31MFPAXq+Wfzzd5pvmGMUq3INiOpdHFwkboH6D1/d9H32dPXqRKppqc/pyWh2/LyYfZ59fl/jsmQj6IBN/C4to9D9fu3b/IhO+Xh79mk0/zk4PTk2/z6YFGaiZgwRr04KFXXbgGeJcPUAjmraImrzjco3a4Nj3b2nZGXGXubhiNnNuwozL5oo8SMrr0IBJhZeWOV778+Gd/On/+HuHOzR4YnPgLy9Z0dYC2lIILQzqRBqIlZbS6ERgRiDjHuooTwmbUmuHV1/LozZnNeW7/mntsdkmd5vktv7DiL1S9lbc=)
::: code-group
```vue [app.vue]
<script setup lang="ts">
import Comp from './Comp.vue';
</script>

<template>
  <Comp name="comp" age="18">
     <template #header="{name}">
      渲染成功: {{name}}
     </template>
  </Comp>
</template>
```

```vue [Comp.vue]
<script setup lang="ts">
import {useAttrs,useSlots} from 'vue'
 //获取props 会拦截属性
defineProps(['name'])
//拿到组件的slots
const slots=useSlots()
const attrs=useAttrs()
const renderTest=slots.header
</script>

<template>
 <div>
  <slot name="header"  v-bind="{name:'普通用slot渲染'}" />
  </div>
  <div>
  <component :is="slots.header" name="用compnent渲染" />
  </div>
  <div>
    <renderTest name="直接渲染" />
  </div>
  {{attrs}}
  props:{{name}}
</template>
```
::: code-group
