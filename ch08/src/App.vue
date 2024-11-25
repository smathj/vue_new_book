<script setup>
</script>

<template>
  <nav>
    <div><RouterLink to="/">home</RouterLink></div>
    <div><RouterLink to="/about">about</RouterLink></div>
    <div><RouterLink to="/user/info">/user/info</RouterLink></div>
    <div><RouterLink to="/user/tom?name=aaa&age=10">/user/tom?name=aaa&age=10</RouterLink></div>
    <div><RouterLink to="/user/tom/profile">/user/tom/profile</RouterLink></div>
     <RouterView />
  </nav>
</template>

<style scoped>

</style>
