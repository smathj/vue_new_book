<script setup>

import {reactive, watch} from "vue";

const state = reactive({
  count: 0
})

watch(state, (currentValue, preValue) => {
  // currentValue, preValue 서로 같은값을 가짐 이딴거왜써
  console.log(preValue)
  console.log(currentValue)
});

</script>

<template>
  <fieldset>
    <legend>watch - 네번째 예제</legend>
    <h1>ref: {{ state.count }}</h1>
    <button @click="state.count++">ref 증가</button>
  </fieldset>
</template>

<style scoped>

</style>
