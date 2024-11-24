<script setup>

import {ref, watch} from "vue";

const state = ref({
  count: 0
})
watch(state, (currentValue, preValue) => {
  // currentValue, preValue 서로 같은값을 가짐 이딴거왜써
  console.log(preValue)
  console.log(currentValue)
  console.log(state.value.count)
}, {
  deep: true
});

</script>

<template>
  <fieldset>
    <legend>watch - 세번째 예제</legend>
    <h1>ref: {{ state.count }}</h1>
    <button @click="state.count++">ref 증가</button>
  </fieldset>
</template>

<style scoped>

</style>
