

# JS中的事件冒泡、事件捕获、事件委托

`DOM`事件流（`event flow`）存在三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段。

<img src="/js/事件冒泡.jpg"  data-zoomable/>

`Dom`标准事件流的触发的先后顺序为：先捕获再冒泡。即当触发dom事件时，会先进行事件捕获，捕获到事件源之后通过事件传播进行事件冒泡。

<h3>addEventListener的第三个参数</h3>

在我们平常用的`addEventListener`方法中，一般只会用到两个参数，一个是需要绑定的事件，另一个是触发事件后要执行的函数，然而`addEventListener`还可以传入第三个参数：


```ts 
//useCapture bool
document.addEventListener('click',()=>{} ,useCapture)
```



## 事件冒泡和事件捕获


试一试:
<div w-300px h-300px bg-red id="red">
  <div w="50%" h="50%" bg-green id="green">
    <div w="50%" h="50%" bg-blue id="blue"></div>
  </div>
</div>

```vue
<template>
<div w-300px h-300px bg-red id="red">
  <div w="50%" h="50%" bg-green id="green">
    <div w="50%" h="50%" bg-blue id="blue"></div>
  </div>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

function click1(){
  alert('red')
}
function click2(){
  alert('green')
}

function click3(){
  alert('blue')
}


onMounted(()=>{
/* 第三个参数默认值是false 为true的话是下到上  `red--green--blue` */
  document.getElementById('red').addEventListener('click',click1,false)
  document.getElementById('green').addEventListener('click',click2,false)
  document.getElementById('blue').addEventListener('click',click3,false)
})

</script>

```


# 事件委托

`事件委托`利用了`事件冒泡`，只指定一个事件处理程序，就可以管理某一类型的所有事件。

例如:有十个div每个div都需要添加同一个的点击事件:随机生成颜色。`这个时候就可以把点击事件绑定父组件上面,然后通过事件冒泡把事件传递给子组件,从而实现事件委托。`

试一试:
<div flex="~" @click="click4">
  <div v-for="i in 10" w-50px h-50px   bg-white border="~ solid" rounded text=" black" flex="~" items-center  justify-center  cursor-pointer >{{i}}</div>
</div>

```vue
<template>
<div flex="~" @click="click4">
  <div v-for="i in 10" w-50px h-50px   bg-white border="~ solid" rounded text=" black" flex="~" items-center  justify-center >{{i}}</div>
</div>
</template>
<script setup lang="ts">
function click4(event){
    console.log(event.target)
  event.target.style.backgroundColor = bgChange();
}

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

</script>
```

优点:
1. 减少内存消耗，提高性能。
2. 简化了`dom`节点更新时，相应事件的更新

缺点：
1. 事件委托基于冒泡，对于不冒泡的事件不支持。
2. 层级过多，冒泡过程中，可能会被某层阻止掉。
3. 理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。


<script setup lang="ts">
  import { onMounted } from 'vue'
function click1(){
  alert('red')
}
function click2(){
alert('green')
}

function click3(){
alert('blue')
}
onMounted(()=>{
  document.getElementById('red').addEventListener('click',click1,false)
  document.getElementById('green').addEventListener('click',click2,false)
  document.getElementById('blue').addEventListener('click',click3,false)
})


function click4(event){
    console.log(event.target)
  event.target.style.backgroundColor = bgChange();
}

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}


</script>
