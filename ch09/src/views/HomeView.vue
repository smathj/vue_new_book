<script>
import {mapActions, mapState} from "pinia";
import {useCountOptionStore} from "@/stores/countOption.js";
import {useCountSetupStore} from "@/stores/countSetup.js";

export default {
  mounted() {
    console.log('Home View 마운트')
    console.log(`this.num = ${this.num}`)
    console.log(`this.doubleNum = ${this.doubleNum}`)
    console.log(`this.myNum = ${this.myNum}`)
    console.log(`this.myDouble = ${this.myDouble}`)
  },
  data() {

  },

  computed: {
    //! 첫번쨰 방식
    // this.num, this.doubleNum 에 등록됨
    //* state 랑 getter 하나씩 넣은거임
    ...mapState(useCountOptionStore, ['num', "doubleNum"]),

    //! 두번째 방식
    ...mapState(useCountSetupStore, {
      myNum: 'num', // 위에 첫번째 배열인자와 같지만 this.myNum 에 등록된다
      myDouble: 'doubleNum', // 위에 두번째 배열인자와 같지만 this.myDouble 에 등록된다

    })
  },
  methods: {
    //! 첫번쨰 방식
    // this.increment(), this.getJSON()에 등록된다
    ...mapActions(useCountOptionStore, ['increment', 'getJSON']),

    //! 두번째 방식
    ...mapActions(useCountSetupStore, {
      myIncre: 'increment',
      myJSON: 'getJSON'
    })
  },

}
</script>

<template>
  <fieldset>
    <legend>Home View</legend>
    <h2>num: {{ num }}</h2>
    <h2>doubleNum: {{ doubleNum }}</h2>
    <h2>myNum: {{ myNum }}</h2>
    <h2>myDouble: {{ myDouble }}</h2>
    <button @click="increment">increment</button>
    <button @click="getJSON('https://jsonplaceholder.typicode.com/posts')">getJSON</button>
    <button @click="myIncre">myIncre</button>
    <button @click="myJSON('https://jsonplaceholder.typicode.com/posts')">myJSON</button>
  </fieldset>

</template>

<style scoped>

</style>
