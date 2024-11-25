<script setup>

import {onBeforeMount} from "vue";
import {useRoute} from "vue-router";

// beforeMount() {
//   const name = this.$route.query.name
//   const age = this.$route.query.age
//   console.log(`name = ${name}`)
//   console.log(`age = ${age}`)
// }

const route = useRoute();
onBeforeMount(()=>{
  console.log('-----------------------')
  console.log(route.params)
  const { id } = route.params
  console.log(`id = ${id}`)
  const name = route.query.name
  const age = route.query.age
  console.log(`name = ${name}`)
  console.log(`age = ${age}`)
})
</script>

<template>
  <h1>UserView</h1>
</template>

<style scoped>

</style>
