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
      current: 'all',

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
    },
    // fnLog(text) {
    //   console.log(`fnLog !!! ${text}`)
    // },
    updateTab(tab) {
      this.current = tab;
    },
    deleteTodo(id) {
      this.todo = this.todo.filter((v) => v.id !== id);
    },
    updateTodo(id) {
      this.todo = this.todo.map((v) =>
        v.id === id ? {...v, completed: !v.completed } : v
      )
    }
  },
  computed: {
    computedTodo() {
      console.log('App - 컴퓨티드 - computedTodo 호출')
      if (this.current === 'all') {
        return this.todo;
      } else {
        return this.todo.filter((v) => v.completed);
      }
    }
  }
})
</script>

<template>
  <div class="todo">
    <TodoHeader :current="current" @update-tab="updateTab"/>
    <TodoList
        :computed-todo="computedTodo"
        @delete-todo="deleteTodo"
        @update-todo="updateTodo"
    />

<!--
  TodoInput 에게 이벤트 게시
  TodoInput 은 해당 이벤트를 구독 한다
-->
<!--    <TodoInput @add-todo="addTodo" @my-test="fnLog"/>-->
    <TodoInput @add-todo="addTodo" />
  </div>
</template>

<style scoped>

</style>
