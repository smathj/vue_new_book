<script setup>

import {reactive, watch} from "vue";

const state = reactive({
  count: 0
})

watch(() => state.count, (currentValue, preValue) => {
  console.log(`preValue = ${preValue}`)
  console.log(`currentValue = ${currentValue}`)
})


</script>

<template>
  <fieldset>
    <legend>watch - 다섯번째 예제</legend>
    <h1>ref: {{ state.count }}</h1>
    <button @click="state.count++">ref 증가</button>
  </fieldset>
</template>

<style scoped>

</style>
