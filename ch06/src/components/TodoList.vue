<script>
export default {
  name: "TodoList",
  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    console.log('TodoList 마운트')
    console.log(this.computedTodo)
  },
  methods: {
    deleteTodo(id) {
      this.$emit('delete-todo', id)
    },
    updateTodo(id) {
      this.$emit('update-todo', id)
    }

  }
}
</script>

<template>
    <div class="todo__list">
<!--      할 일 목록이 있을 때(완료 시 todo__item&#45;&#45;completed 클래스 추가-->
      <div
          v-for="item in computedTodo"
          :key="item.id" class="todo__item"
          :class="{ 'todo__item--completed' : item.completed}">

        <!--체크 박스-->
        <input
            type="checkbox"
            :id="`chk${item.id.toString()}`"
            :checked="item.completed"
            @click="updateTodo(item.id)"
        />

        <!--내용-->
        <label
            :for="`chk${item.id.toString()}`"
            class="todo__checkbox-label"></label>
        <span class="todo__item-text">{{ item.msg }}</span>

        <!--삭제 버튼-->
        <span
            class="material-symbols-outlined todo__delete-icon"
            @click="deleteTodo(item.id)"
        >
          delete
        </span>
      </div>
<!--      목록에 할 일이 없을 때-->
      <div v-if="computedTodo.length === 0" class="todo__item--no">
        <p>할 일이 없습니다.</p>
      </div>
    </div>
</template>

<style scoped>

</style>
