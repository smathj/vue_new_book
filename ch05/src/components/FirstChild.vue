<script>
export default {
  name: "FirstChild",
  data() {
    return {
      num: 1,
      text: 'aaaa'
    }
  }
}
</script>

<template>
  <div>
    <h1>FirstChild 컴포넌트</h1>
    <h5 class="red bold">내가 만든 첫 번쨰 컴포넌트</h5>
  </div>
</template>

<style scoped>
/*  h1 {
    color: red;
  }
  p {
    color: green;
  }*/
  .red {
    color: red;

    &.bold {
      font-weight: bold;
    }
  }
</style>
