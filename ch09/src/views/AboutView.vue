<script setup>

  import {onMounted} from "vue";
  import {useCountOptionStore} from "@/stores/countOption.js";
  import {useCountSetupStore} from "@/stores/countSetup.js";
  import {storeToRefs} from "pinia";

  onMounted(() => {
    console.log('About View 마운트')
  })

  const optionStore = useCountOptionStore() // 옵션 스토어 객체로 인스턴스 생성
  const setupStore = useCountSetupStore() // 셋업 스토어 객체로 인스턴스 생성

  console.log(optionStore.num)
  console.log(setupStore.doubleNum)
  optionStore.increment()
  setupStore.getJSON('https://jsonplaceholder.typicode.com/posts')
  const {num, doubleNum} = storeToRefs(optionStore);
  console.log(`num.value = ${num.value}`)
  console.log(`doubleNum.value = ${doubleNum.value}`)


</script>

<template>
  <h1>About View</h1>
  <h2>num: {{ num }}</h2>
  <h2>doubleNum: {{ doubleNum }}</h2>
</template>

<style scoped>

</style>
