<script setup>
  import {ref,computed,watch } from 'vue'
const firstName = ref('小')
const lastName = ref('明')

const getName = computed({
  get(){
   return `${firstName.value} ${lastName.value}`
  },
  set(val){
    const _getname=val.split(' ')
    firstName.value=_getname[0]
    lastName.value=_getname[1]
  }
})

const counter = ref(0)

const handle=()=>{
  counter.value+=1
}

const setCount = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(counter.value += 1)
    }, 2000)
  })
}

const flag = watch(counter, async (value) => {
  if (value === 4) {
    // 停止监听 但是不会跳出该函数
    flag()
    // 跳出该函数
    return
  }
  await setCount()
},{
  immediate: true,
})
</script>

# computed vs watch

## computed (计算缓存)
1. 响应式依赖(当依赖变化的时候才会触发更新)
2. 不支持异步更新


 
  <div>
    <div mb3 flex items-center>
      <p>firstName:</p>
      <input v-model="firstName" border="~ gray">
    </div>
    <div flex items-center>
      <p>lastName:</p>
      <input v-model="lastName" border="~ gray">
    </div>
     <div flex items-center>
      <p>getName:</p>
      <input v-model="getName" border="~ gray">
    </div>
    getName:{{ getName }}
  </div>

```html
<script setup>
  import {ref,computed } from 'vue'
const firstName = ref('小')
const lastName = ref('明')

const getName = computed({
  get(){
   return `${firstName.value} ${lastName.value}`
  },
  set(val){
    const _getname=val.split(' ')
    firstName.value=_getname[0]
    lastName.value=_getname[1]
  }
})
</script>
<template>
 
  <div>
    <input v-model="firstName"/>
    <input v-model="lastName"/>
    <input v-model="getName"/>
    {{ getName }}
  </div>
</template>
```




## watch(监听)
1. 当被监听的变化的时候立即发生变化
2. 支持异步跟新


<div>
counter：{{counter}} 
</div>

```html
<script setup>
const counter = ref(0)
const setCount = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(counter.value += 1)
    }, 2000)
  })
}
const flag = watch(counter, async (value) => {
  if (value === 4) {
    // 停止监听 但是不会跳出该函数
    flag()
    // 跳出该函数
    return
  }
  await setCount()
},{
  immediate: true,
})
</script>
```
