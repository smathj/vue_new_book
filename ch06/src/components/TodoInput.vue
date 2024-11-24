<script>
export default {
  name: "TodoInput",
  data() {
    return {
      inputMsg: '',
    };
  },
  // emits: ['addTodo', 'fnLog'],
  // emits: ['addTodo'],
  emits: ['add-todo'],
  methods: {
    addTodo() {
      console.log('TodoInput 의 addTodo 호출')
      // this.$emit('addTodo', this.inputMsg)
      this.$emit('add-todo', this.inputMsg)
      this.inputMsg = ''

    }
  }

}
</script>

<template>
  <div class="todo__input">
    <input
           v-model="inputMsg"
           @keydown.enter="addTodo"
           type="text"
           class="todo__input-text"
           placeholder="할 일을 입력하세요.">
    <button class="todo__input-btn" @click="addTodo">등록</button>
<!--    <button class="todo__input-btn" @click="() => $emit('my-test', '여기')">등록2</button>-->
<!--    <button class="todo__input-btn" @click="$emit('my-test', '여기')">등록3</button>-->
  </div>
</template>

<style scoped>

</style>
