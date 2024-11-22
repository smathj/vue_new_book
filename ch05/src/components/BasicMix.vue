<script>
export default {
  name: "BasicMix",
  data() {
    return {
      message: 'BasicMix 의 data 속성값',
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
