<script>
export default {
  name: "MixLayout"
}
</script>

<template>
  <slot name="header"></slot>
<!--
  <slot></slot> 은
    내부적으로
  <slot name="default"></slot>
    로 처리된다
  -->
  <slot>아무것도 안적으면 내가 나타난다</slot>
  <slot name="footer"></slot>
</template>

<style scoped>

</style>
