<script>
export default {
  beforeCreate() {
    const id = this.$route.params.id;
    console.log(id);
  }
}
</script>

<template>
<!--  template 에서는 this 키워드 생략가능-->
  <h1>id: {{ $route.params.id }}</h1>
</template>

<style scoped>

</style>
