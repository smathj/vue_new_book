<script>
export default {
  name: "BasicMix",
  data() {
    return {
      name: 'child',
      count: 10,
    };
  },
};
</script>

<template>
  <slot name="header" :message="message"></slot>
  <slot name="main" :count="count"></slot>
  <slot name="footer"></slot>
</template>

<style scoped>

</style>
