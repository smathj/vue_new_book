<script>


import {defineComponent} from "vue";
import TodoHeader from "@/components/TodoHeader.vue";
import TodoList from "@/components/TodoList.vue";
import TodoInput from "@/components/TodoInput.vue";

export default defineComponent({
  components: {TodoInput, TodoList, TodoHeader},
  data() {
    return {
      todo: [],
    }
  },
  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(),
        msg: inputMsg,
        completed: false,
      };
      console.log('item => ', JSON.stringify(item))
      this.todo.push(item)
    }
  }
})
</script>

<template>
  <div class="todo">
    <TodoHeader />
    <TodoList />
<!--
  TodoInput 에게 이벤트 게시
  TodoInput 은 해당 이벤트를 구독 한다
-->
    <TodoInput @add-todo="addTodo" />
  </div>
</template>

<style scoped>

</style>
