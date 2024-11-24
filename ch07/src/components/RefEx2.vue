<script setup>

import {ref} from "vue";
import RefEx2Child from "@/components/RefEx2Child.vue";

const componentRef = ref(null);


setTimeout(() => {
  console.log('RefEx2.vue ...')
  console.log(`componentRef.value.number = ${componentRef.value.number}`)
  console.log(`componentRef.value.doubleNumber = ${componentRef.value.doubleNumber}`)
}, 1000)

</script>

<template>
  <fieldset>
    <legend>ref - Dom 접근 첫번째 예제</legend>
    <RefEx2Child ref="componentRef" />
  </fieldset>
</template>

<style scoped>

</style>
