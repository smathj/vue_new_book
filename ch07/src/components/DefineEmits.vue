<script setup>


/**
 * 부모 컴포넌트에서 전달해준 커스텀 이벤트는
 * defineEmits([...]) 배열로 전달한다
 * 그리고 emit('이벤트명', 파라미터...) 형태로 사용한다
 */
const emit = defineEmits(['count-increment', 'state-count-increment']);


const increment = () => {
  emit('count-increment', 10, 20, 30);
}


</script>

<template>
    <button @click="increment">count 증가</button>
    <button @click="emit('state-count-increment', [50])">state.count 증가</button>
</template>

<style scoped>

</style>
