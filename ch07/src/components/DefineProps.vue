<script setup>

/**
 * defineProps({...}) 로 프로퍼티를 정의한다
 */
const props = defineProps({
  count: Number,
  // v1.
  // state: [Object, Array]  // Object OR Array 둘중하나

  // v2.
  state: {
    type: Object,
    default() {
      return {}
    }
  }
})

</script>

<template>
  <fieldset>
    <legend>Props - 첫번째 예제</legend>
    <h1>props.count => {{props.count}}</h1>
    <h1>props.state.count => {{props.state.count}}</h1>
  </fieldset>
</template>

<style scoped>

</style>
