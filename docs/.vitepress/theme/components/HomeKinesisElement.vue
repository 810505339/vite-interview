<template>
  <kinesis-container audio="/test.mp3">
    <kinesis-audio :audioIndex="10">
      <kinesis-element :strength="10" type="depth">
        123
      </kinesis-element>
    </kinesis-audio>
  </kinesis-container>
</template>

<script setup lang="ts">
import { KinesisContainer, KinesisElement, KinesisAudio } from 'vue-kinesis'
import { VPHomeHero, VPButton } from 'vitepress/theme'
</script>
