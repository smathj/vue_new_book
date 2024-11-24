<script setup>

import {inject} from "vue";

/**
 * 프로바이더에서 데이터를 꺼낸다
 * - 기본값도 지정 가능
 */
const fruitsArr = inject('fruitsArr', [])
const fruitsTxt = inject('fruitsTxt')
const userObj = inject('userObj')




</script>

<template>
  <fieldset>
    <legend>Context(Provide, Inject) - 첫번째 예제</legend>
    <h1>{{ fruitsArr }}</h1>
    <h1>{{ fruitsTxt }}</h1>
    <h1>{{ userObj }}</h1>
  </fieldset>
</template>

<style scoped>

</style>
