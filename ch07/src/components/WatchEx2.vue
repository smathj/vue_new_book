<script setup>

import {ref, watch} from "vue";

const state = ref({
  count: 0
})


//* 1. 첫번째 인자 - 반응형 데이터
//* 2. 두번째 인자 - 콜백 함수 (newValue, preValue) => {...}
//! 호출 되지 않는다...
watch(state, (currentValue, preValue) => {
  alert('호출됨?')
  console.log(`이전값 = ${preValue}`)
  console.log(`변경된값 = ${currentValue}`)
  console.log('\n')
});

</script>

<template>
  <fieldset>
    <legend>watch - 두번째 예제(ref 객체형 감시하기)</legend>
    <h1>ref: {{ state.count }}</h1>
    <button @click="state.count++">ref 증가</button>
  </fieldset>
</template>

<style scoped>

</style>
