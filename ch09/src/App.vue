<script setup>
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
  nav {
    display: flex;
    flex-direction: column;
  }
</style>
