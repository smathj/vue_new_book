<script setup>

import {reactive} from "vue";

console.log('DataEx3.vue ...')

// reactive 은 참조형 전용
const state = reactive({
  count: 0
})

console.log('state.count = ', state.count)

setTimeout(() => {
  state.count++;
}, 1000)

</script>

<template>
  <fieldset>
    <legend>reactive - 첫번째 예제</legend>
    <h1>state : {{ state.count }}</h1>
  </fieldset>
</template>

<style scoped>

</style>
