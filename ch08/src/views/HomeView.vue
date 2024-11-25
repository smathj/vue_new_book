<script>

export default {
  methods: {
    //! 프로그래밍 방식으로 참조하는 경우
    navigateToHome() {
      this.$router.push('/')
    },
    replaceWithAbout() {
      this.$router.replace('/about')
    },
    goBack() {
      this.$router.go(-1)
    },
    goForward() {
      this.$router.go(1)
    },
  },
  beforeMount() {
    console.log(this.$route.meta)
    document.title = '홈'
  }
}

</script>

<template>
  <h1>Home View</h1>
  <nav>
<!--    직접 라우터 참조하는 경우-->
    <a href="#" @click.prevent="$router.push('/')">.push</a>
    <a href="#" @click.prevent="$router.replace('/about')">.replace</a>
    <a href="#" @click.prevent="$router.go(-1)">.go</a>
    <a href="#" @click.prevent="$router.forward()">.forward</a>
    <a href="#" @click.prevent="$router.back()">.back</a>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    flex-direction: column;
  }
</style>
