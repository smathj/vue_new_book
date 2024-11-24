<script setup>

import {ref, watch} from "vue";

const count = ref(0);
watch(count, (currentValue, preValue) => {
  console.log(`preValue = ${preValue}`)
  console.log(`currentValue = ${currentValue}`)
});

</script>

<template>
  <fieldset>
    <legend>watch - 첫번째 예제</legend>
    <h1>ref: {{ count }}</h1>
    <button @click="count++">ref 증가</button>
  </fieldset>
</template>

<style scoped>

</style>
