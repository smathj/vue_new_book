<script setup>

import {ref} from "vue";

const inputRef = ref(null);

setTimeout(() => {
  console.log('RefEx1.vue ...')
  console.log(inputRef.value) // 실제 dom 접근
  console.log(inputRef.value.innerText) // 실제 dom 의 텍스트
}, 1000)

</script>

<template>
  <fieldset>
    <legend>ref - Dom 접근 첫번째 예제</legend>
    <h1 ref="inputRef">Hello, Ref!</h1>
  </fieldset>
</template>

<style scoped>

</style>
