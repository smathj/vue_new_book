<script setup>

import {reactive, watch} from "vue";

const state = reactive({
  count: 0
})

//* 1. 첫번째 인자 - 반응형 데이터
//* 2. 두번째 인자 - 콜백 함수 (newValue, preValue) => {...}
//! watch 의 한계 , newValue, preValue 둘이 같은 값이다 ...
watch(() => state.count, (currentValue, preValue) => {
  console.log(`이전값 = ${preValue}`)
  console.log(`변경된값 = ${currentValue}`)
  // console.log(`반응형 데이터 값 = ${state.count}`)
})


</script>

<template>
  <fieldset>
    <legend>watch - 다섯번째 예제(정답 - reactive 객체형)</legend>
    <h1>ref: {{ state.count }}</h1>
    <button @click="state.count++">ref 증가</button>
  </fieldset>
</template>

<style scoped>

</style>
