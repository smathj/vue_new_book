<script setup>

import DataEx1 from "@/components/DataEx1.vue";
import DataEx2 from "@/components/DataEx2.vue";
import DataEx3 from "@/components/DataEx3.vue";
import DataEx4 from "@/components/DataEx4.vue";
import RefEx1 from "@/components/RefEx1.vue";
import RefEx2 from "@/components/RefEx2.vue";
import ComputedEx1 from "@/components/ComputedEx1.vue";
import ComputedEx2 from "@/components/ComputedEx2.vue";
import ComputedEx3 from "@/components/ComputedEx3.vue";
import ComputedEx4 from "@/components/ComputedEx4.vue";
import WatchEx1 from "@/components/WatchEx1.vue";
import WatchEx2 from "@/components/WatchEx2.vue";
import WatchEx3 from "@/components/WatchEx3.vue";
import WatchEx4 from "@/components/WatchEx4.vue";
import WatchEx5 from "@/components/WatchEx5.vue";
import WatchEffectEx1 from "@/components/WatchEffectEx1.vue";
import WatchPostEffectEx1 from "@/components/WatchPostEffectEx1.vue";
import LifeCycleHooks from "@/components/LifeCycleHooks.vue";
import {computed, provide, reactive, ref} from "vue";
import DefineProps from "@/components/DefineProps.vue";
import DefineEmits from "@/components/DefineEmits.vue";
import Inject from "@/components/Inject.vue";

const showComponent = ref(true);
const toggleComponent = () => {
  showComponent.value = !showComponent.value
}

const count = ref(0);
const state = reactive({
  count: 0,
})


const countIncrement = (num1, num2, num3) => {
  // count.value++
  count.value = num1 + num2 + num3
}

const stateCountIncrement = (direct, arr) => {
  console.log(direct)
  console.log(arr)
  // state.count++
  state.count = direct + arr[0]
}


const fruits = reactive(['apples', 'bananas', 'oranges'])
const fruitsTxt = computed(() => `I like ${fruits[0]}`)

provide('fruitsArr', fruits)
provide('fruitsTxt', fruitsTxt)
provide('userObj', {name: 'sucoding', age: 20})

</script>

<template>
<!--  <DataEx1 />-->
<!--  <DataEx2 />-->
<!--  <DataEx3 />-->
<!--  <DataEx4 />-->
<!--  <RefEx1 />-->
<!--  <RefEx2 />-->
<!--  <ComputedEx1 />-->
<!--  <ComputedEx2 />-->
<!--  <ComputedEx3 />-->
<!--  <ComputedEx4 />-->
<!--  <WatchEx1 />-->
<!--  <WatchEx2 />-->
<!--  <WatchEx3 />-->
<!--  <WatchEx4 />-->
<!--  <WatchEx5 />-->
<!--  <WatchEffectEx1 />-->
<!--  <WatchPostEffectEx1 />-->
<!--  <LifeCycleHooks v-if="showComponent" @click="toggleComponent"/>-->
<!--  <DefineProps :count="count" :state="state" />-->
<!--  <fieldset>-->
<!--  <legend>emit - 첫번째 예제</legend>-->
<!--    <h1>{{ count }}</h1>-->
<!--    <h1>{{ state.count }}</h1>-->
<!--    <DefineEmits-->
<!--        @count-increment="countIncrement"-->
<!--        @state-count-increment="(arr) => stateCountIncrement(50, arr)"-->
<!--    />-->
<!--  </fieldset>-->
  <Inject />
</template>

<style scoped>

</style>
