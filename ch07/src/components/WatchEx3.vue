<script setup>

import {ref, watch} from "vue";

const state = ref({
  count: 0
})



//* 1. 첫번째 인자 - 반응형 데이터
//* 2. 두번째 인자 - 콜백 함수 (newValue, preValue) => {...}
//! 깊은 감시자 depp 선언
watch(state, (currentValue, preValue) => {
  // currentValue, preValue 서로 같은값을 가짐 이딴거왜써
  console.log(`이전값 = ${preValue.count}`)
  console.log(`변경된값 = ${currentValue.count}`)
  // console.log(`반응형 데이터 값 = ${state.value.count}`)
  console.log('\n')
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
