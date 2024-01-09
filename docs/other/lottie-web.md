<script setup>
import { withBase, useData } from 'vitepress'
import HomeImage from '../.vitepress/theme/components/HomeImage.vue'
const { theme } = useData()
</script>

# lottie-web
`lottie-web`是一个lottie动画库,可以让前端直接使用ux动画,生成的动画可以使用`js`控制

## 安装
```
pnpm add lottie-web
```

## 使用

首先去[官网](https://lottiefiles.com/)下载对应动画的Json文件也可以使用官网提供的在线转换工具

也可以使用下方的这个[lottie.json](../.vitepress/theme/components/json/Animation.json)

<div flex="~" >
<img src="/lottiefiles.png" data-zoomable w="25%" rounded-2   />
<HomeImage w-250px />
</div>




## 代码
:::code-group
```ts [hooks/useLottieImage]
import { useToggle } from "@vueuse/core"
import lottie, { AnimationItem } from "lottie-web"
import { Ref, onMounted, ref, watch } from "vue"
type IProps = {
  lavContainer: Ref<HTMLElement | null>,
  animationData: any
}
export default function useHomeImage({ lavContainer, animationData }: IProps) {
  const [value, toggle] = useToggle()
  const lottieRef = ref<AnimationItem>()
  watch(() => value.value, (newVal) => {
    newVal ? lottieRef.value!.pause() : lottieRef.value!.play()  //监听是否切换 然后可以控制动画停止或者播放

    // 副作用函数
  }, { immediate: false })

  onMounted(() => {
    if (lavContainer.value) {
      lottieRef.value = lottie.loadAnimation({
        container: lavContainer.value, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData // the path to the animation json
      });
    }
  })
  return {
    toggle,
    lottieRef //导出动画的对象,可以让其控制动画 
  }
}

```

```vue [app.vue]

<template>
  <div p-15>
    <div ref="lavContainer" @click="toggle()"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from './json/Animation.json'  //动画json
import useHomeImage from './hooks/useHomeImage'
const lavContainer = ref()
const { toggle,lottieRef } = useHomeImage({ lavContainer, animationData: data })

</script>
```

:::

## 链接

[官网](https://lottiefiles.com/)
