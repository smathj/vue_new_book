<script setup>

import {ref, watch} from "vue";

const state = ref({
  count: 0
})
watch(state, (currentValue, preValue) => {
  console.log(`preValue = ${preValue}`)
  console.log(`currentValue = ${currentValue}`)
});

</script>

<template>
  <fieldset>
    <legend>watch - 두번째 예제</legend>
    <h1>ref: {{ state.count }}</h1>
    <button @click="state.count++">ref 증가</button>
  </fieldset>
</template>

<style scoped>

</style>
