<script setup>


import {ref} from "vue";

// 기본 자료형
const count = ref(10);

// 참조 자료형
const state = ref({
  count: 20,
});

// 내부 값에 접근하려면 .value 로 접근해야한다
console.log(count.value)
console.log(state.value.count)


setTimeout(() => {
  count.value++;
  state.value.count++;
}, 1000)
</script>

<template>

  <fieldset>
    <legend>ref - 첫번째 예제</legend>
    <div>[접근법] count => {{ count }}</div>
    <div>[접근법] state => {{ state }}</div>
    <div>[접근법] state.count => {{ state.count }}</div>
  </fieldset>

</template>

<style scoped>

</style>
