<template>
  <div h-300px w-300px ref="lavContainer"></div>
</template>

<script setup lang="ts">
import lottie from 'lottie-web'
import data from './json/Animation.json'
import { onMounted, ref } from 'vue'
const lavContainer = ref()

onMounted(() => {
  console.log(lottie)
  if (lavContainer.value) {
    lottie.loadAnimation({
      container: lavContainer.value, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: data // the path to the animation json
    });
  }

})



</script>
