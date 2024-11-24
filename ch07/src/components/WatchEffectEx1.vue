<script setup>

import {reactive, ref, watch, watchEffect} from "vue";

const count = ref(0)
const state = reactive({
  count: 0
})


// 아무 의미도 없이 console.log 출력 해도
// 콜백 함수 내부에서 반응형 데이터를 사용한 것이 되어 감시 대상이 됨
//! 의존성 목록이 이 콜백함수가 쓰는 반응형 데이터이다, 리액트에서는 의존성 배열을 명시했지만, 뷰에는 쓰인놈을 대상으로함
watchEffect(() => {
  console.log('watchEffect 호출')
  console.log(count.value)  // count 값이 변경되면 호출
  console.log(state.count)  // state.count 값이 변경되면 호출
  console.log('\n')
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
