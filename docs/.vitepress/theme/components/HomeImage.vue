<template>
  <KinesisContainer>
    <KinesisElement :strength="50">
      <div p-15 all:transition-400>
        <div ref="lavContainer" @click="toggle()"></div>
        <div text-center pb-5 text="#a8b1ff" fw100 animate-bounce-alt animate-count-infinite animate-duration-1s>click me
        </div>
      </div>
    </KinesisElement>
  </KinesisContainer>
</template>

<script setup lang="ts">
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { ref } from 'vue'
import data from './json/Animation.json'
import useHomeImage from './hooks/useHomeImage'
const lavContainer = ref()
const { toggle } = useHomeImage({ lavContainer, animationData: data })

</script>
