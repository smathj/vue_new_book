<script>
export default {
  name: "Button",
  props: {
    age: Number,
    name: String,
  },

}
</script>

<template>
<button>
  <slot></slot>
<!--  <slot name="이름"></slot>-->
</button>
</template>

<style scoped>

</style>
