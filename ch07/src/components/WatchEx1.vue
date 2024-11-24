<script setup>

import {ref, watch} from "vue";


/**
 * watch - 감시자 기본형
 */

const count = ref(0);

//* 1. 첫번째 인자 - 반응형 데이터
//* 2. 두번째 인자 - 콜백 함수 (newValue, preValue) => {...}
watch(count, (currentValue, preValue) => {
  console.log(`이전값 = ${preValue}`)
  console.log(`변경된값 = ${currentValue}`)
  console.log('\n')
});

</script>

<template>
  <fieldset>
    <legend>watch - 첫번째 예제(정답 - 순수 ref 기본값)</legend>
    <h1>ref: {{ count }}</h1>
    <button @click="count++">ref 증가</button>
  </fieldset>
</template>

<style scoped>

</style>
