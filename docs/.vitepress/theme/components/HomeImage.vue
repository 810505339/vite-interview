<template>
  <div p-15>
    <div ref="lavContainer" @click="toggle()"></div>
    <div text-center pb-5 text="#a8b1ff">click me</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from './json/Animation.json'
import useHomeImage from './hooks/useHomeImage'
const lavContainer = ref()
const { toggle } = useHomeImage({ lavContainer, animationData: data })

</script>
