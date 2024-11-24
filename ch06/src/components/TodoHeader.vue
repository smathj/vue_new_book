<script>
export default {
  name: "TodoHeader",
  props: {
    current: {
      type: String,
      default() {
        return 'all';
      }
    }
  },
  /**
   * App.vue 에서 전달 받은 컴포넌트 이벤트 를 emits 에 할당
   */
  emits: ['update-tab'],
  methods: {
    updateTab(tab) {
      // 부모 쪽의 이벤트를 호출한다
      this.$emit('update-tab', tab);
    }
  }
}
</script>

<template>
  <div class="todo__title">
    <h1 class="todo__Text">Todo List</h1>
    <ul class="todo__tab">
      <li
          :class="{'todo__tab--active' : current === 'all'}"
          @click="updateTab('all')">전체</li>
      <li
          :class="{'todo__tab--active' : current === 'completed'}"
          @click="updateTab('completed')">완료</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
