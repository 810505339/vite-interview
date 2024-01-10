# 在vue中开启浏览器自定义格式化
在`vue3`中打印`ref`的时候在浏览中,开启自定义格式化,可以更加清楚的打印出`ref`的值

```vue
<script setup lang="ts">
  const str=ref('这是一个自定义字符串')
  console.log(str)
</script>

```
`未开启`之前控制台会输出：
<img src="/vue/未开启.jpg" rounded />
`开启`之前控制台会输出：
<img src="/vue/开启.jpg" rounded />

## 开启方法
<img src="/vue/开启方法.jpg" rounded  data-zoomable/>
