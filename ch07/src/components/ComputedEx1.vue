<script setup>

import {computed, reactive, ref} from "vue";

console.log('ComputedEx1.vue')

const refCount = ref(10);
const reactiveCount = reactive({count: 20});

// ref() 데이터를 활용할 때는 value 속성 사용
const refDoubleCount = computed(() => refCount.value * 2);

// reactive() 데이터는 value 속성이 필요 없다
const reactiveDoubleCount = computed(() => reactiveCount.count * 2);

console.log(`refDoubleCount = ${refDoubleCount}`)
console.log(`reactiveDoubleCount = ${reactiveDoubleCount}`)


</script>

<template>

  <fieldset>
    <legend>computed - 첫번째 예제</legend>
    <h1>{{ refDoubleCount }}</h1>
    <h1> {{ reactiveDoubleCount }}</h1>
  </fieldset>
</template>

<style scoped>

</style>
