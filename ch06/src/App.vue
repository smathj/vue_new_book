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
<!--
    props 로 current 를 넘겨준다
    컴포넌트 커스텀 이벤트로 update-tab 라는 이름으로 updateTab 함수를 등록
-->
    <TodoHeader :current="current" @update-tab="updateTab"/>

<!--
    props 로 computed-todo 을 넘기지만 실제론 카멜케이스로
    TodoList 에서 computedTodo 로 받는다

    컴포넌트 커스텀 이벤트로 delete-todo, update-todo
    이때 emits 를 사용해서 사용할 수 있고
    이때 배열의 순서보단 글자수가 매칭되면된다
-->
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
