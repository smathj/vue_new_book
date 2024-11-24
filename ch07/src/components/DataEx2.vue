<script setup>

import {ref} from "vue";

const arr1 = ref([10])  // 배열로 반응형 데이터 생성
const arr2 = ref([10])  // 배열로 반응형 데이터 생성


setTimeout(() => {
  arr1.value = [10, 20]  // 배열 값 자체를 변경

  // 이건 안통함
  // arr2.push(20)   // 배열 요소 추가
  arr2.value.push(20)

  console.log(arr2)
  console.log(arr2.value)

}, 1000);


</script>

<template>
  <fieldset>
    <legend>ref - 두번째 예제</legend>
    <h1>arr1 : {{ arr1 }}</h1>
    <h1>arr2 : {{ arr2 }}</h1>
  </fieldset>
</template>

<style scoped>

</style>
