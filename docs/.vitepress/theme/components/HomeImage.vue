<template>
  <div p-10 ref="lavContainer" @click="toggle()"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from './json/Animation.json'
import useHomeImage from './hooks/useHomeImage'
const lavContainer = ref()
const { toggle } = useHomeImage({ lavContainer, animationData: data })

</script>
