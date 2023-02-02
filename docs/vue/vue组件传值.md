# vue组件传值

## 父组件给子组件传值
  子组件通过props接收
子组件:
```vue
<template>
  {{props.name}}  //父组件传过来的props
</template>
<script setup lang="ts">
const props=defineProps<{name:string}>()
</script>
```

父组件:
```vue
<template>
  <Child name='parent' />
</template>
<script setup lang="ts">

</script>
```


## 子组件给父组件传值
  子组件通过`emits` 像父组件发射事件 父组件通过`@`接受
  
子组件:
```vue
<template>
  <button @click="getName">click</button>
</template>
<script setup>
const emits=defineEmits(['change'])
function getName(){
emits('change','Child')
}
</script>
```

父组件:
```vue
<template>
  <Child @change="change" />
</template>
<script setup>
function change(name){
  console.log(name) //Child
}

</script>
```

## 通过ref传值
子组件:
```vue
<template>
  
</template>
<script setup>
const name=ref('我是子组件')
defineExpose({
 name
})  //vue3 3.2+ 新增

</script>
```
父组件:
```vue
<template>
  <Child  ref="childDom" />
</template>
<script setup lang="ts">
  const childDom=ref<HtmlElement||null>(null)
  function getName(){
       console.log(childDom.value.name) //我是子组件
  }
</script>
```

## 兄弟组件传值(依赖注入)
父组件:
```vue
<template>
  <Child1 />
  <Child2 />
</template>
<script setup lang="ts">
    provide(/* key */ 'message', /* value */ 'hello!')
</script>
```

子组件:
```vue
<template>
 
</template>
<script setup lang="ts">
    const message = inject('message')  //hello! 
</script>
```

## 使用pinia (vuex)
