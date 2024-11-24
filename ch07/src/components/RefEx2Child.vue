<script setup>

import {computed, ref} from "vue";

const number = ref(5)
const doubleNumber = computed(() => number.value * 2)

// defineExpose() 함수로 지정한 값만 부모 컴포넌트에서 접근 가능
defineExpose({
  number, doubleNumber
})

setTimeout(() => {
  console.log('RefEx2Child.vue ...')
}, 1000)

</script>

<template>
  <fieldset>
    <legend>ref - 부모에게 노출할 값을 정의</legend>
    <h1>{{ number }}</h1>
    <h1>{{ doubleNumber }}</h1>
  </fieldset>
</template>

<style scoped>

</style>
