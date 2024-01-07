# 如何实现一个tabs :heart:
实现一个跟element-ui的tabs组件，需要实现以下功能：


![tabs](/vue/tabs.gif)


## 分析
1. 该组件由2个组件构成一个是 `Tabs` 一个是 `TabsPanel`
2. `Tabs` 中需要获取所有 `TabsPanel` 的 `label` 和 `name` 并将它们渲染出来
3. `Tabs` 中的 `v-model` 需要控制 `TabsPanel` 的显示和隐藏

::: tip
难点：
如何让 `Tabs` 和 `TabsPanel` 通信，以及如何让 `TabsPanel` 的显示和隐藏

可以通过 `provide` 和 `inject` 来管理通信, 我们使用 `vue-use` 中 [createInjectionState](http://www.vueusejs.com/shared/createInjectionState/)

:::

## 目录
通过vite创建一个 `vue` 项目，并创建一个 `Tabs` 组件，该组件包含一个 `TabsPanel` 组件
```
.
├─ app.vue
├─ components
│  ├─ tabs
│     ├─ index.vue
│     └─ panel.vue

```

首先在 `app.vue` 中引入 `Tabs` 跟 `TabsPanel` 组件
然后编写 `Tabs` 组件和 `TabsPanel` 组件:
::: code-group
```vue [app.vue]
<template>
  <Tabs v-model="activeName">
    <TabsPanel label="User" name="User">User</TabsPanel>
    <TabsPanel label="Config" name="Config">Config</TabsPanel>
    <TabsPanel label="Role" name="Role">Role</TabsPanel>
    <TabsPanel label="Task" name="Task">Task</TabsPanel>
  </Tabs>
</template>

<script setup lang="ts">
const activeName = ref('Task')
</script>
```


```vue [tabs/index.vue]
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

```vue [tabs/panel.vue]
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  label: string,
  name: string
}>()
</script>
```
 ::: code-group
