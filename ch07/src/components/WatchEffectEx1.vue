<script setup>

import {reactive, ref, watch, watchEffect} from "vue";

const count = ref(0)
const state = reactive({
  count: 0
})


// 아무 의미도 없이 console.log 출력 해도
// 콜백 함수 내부에서 반응형 데이터를 사용한 것이 되어 감시 대상이 됨
watchEffect(() => {
  console.log(count.value)  // count 값이 변경되면 호출
  console.log(state.count)  // state.count 값이 변경되면 호출
})



</script>

<template>
  <fieldset>
    <legend>watchEffect - 첫번째 예제</legend>

    <h1>ref: {{ count }}</h1>
    <button @click="count++">count ref 증가</button>

    <h1>ref: {{ state.count }}</h1>
    <button @click="state.count++">state.count ref 증가</button>

  </fieldset>
</template>

<style scoped>

</style>
