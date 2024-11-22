<script>
export default {
  name: "BasicScope2",
  data() {
    return {
      message: 'child',
      count: 10,
    }
  }
}
</script>

<template>
  <slot :message="message" :count="count"></slot>
</template>

<style scoped>
</style>
