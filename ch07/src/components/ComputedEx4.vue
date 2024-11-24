<script setup>

import {computed, reactive, ref} from "vue";

console.log('ComputedEx3.vue')

const refCount = ref(10);
const reactiveCount = reactive({count: 20});


// ref() 데이터를 활용할 때는 value 속성 사용
const refDoubleCount = computed({
  get() {
    return refCount.value * 2;
  },
  set(newValue) {
    refCount.value = newValue
  }
});

// reactive() 데이터는 value 속성이 필요 없다
const reactiveDoubleCount = computed({
  get() {
    return reactiveCount.count * 2
  },
  set(newValue) {
    reactiveCount.count = newValue;
  },
});

setTimeout(() => {

  /**
   * computed() 로 생성한 값은
   * 읽기 전용이다
   */
  // 1초 뒤에 경고 표시 (읽기 전용)
  refCount.value = 20;
  reactiveCount.count = 40;
}, 2000)



</script>

<template>

  <fieldset>
    <legend>computed - 네번째 예제(비권장)</legend>
    <h1>{{ refDoubleCount }}</h1>
    <h1> {{ reactiveDoubleCount }}</h1>
  </fieldset>
</template>

<style scoped>

</style>
