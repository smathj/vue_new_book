<script setup>

import {useRouter} from "vue-router";

const router = useRouter();

//! 프로그래밍 방식으로 참조하는 경우
const navigateToHome = () => {
  router.push(6)
};

const replaceWithAbout = () => {
  router.replace('/about')
};

const go = () => {
  router.go(1)
};

const goForward = () => {
  router.forward()
};

const back = () => {
  router.back()
};

</script>

<template>
  <h1>About View</h1>
  <nav>
<!--    직접 라우터 참조하는 경우-->
    <a href="#" @click.prevent="router.push('/')">.push</a>
    <a href="#" @click.prevent="router.replace('/about')">.replace</a>
    <a href="#" @click.prevent="router.go(-1)">.go</a>
    <a href="#" @click.prevent="router.forward()">.forward</a>
    <a href="#" @click.prevent="router.back()">.back</a>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    flex-direction: column;
  }
</style>
