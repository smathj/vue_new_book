<script>
export default {
  name: "UserProfile",
  // props: ['name', 'age'],  // cnost [name, age] = props
  // props: {
  //   name: String,
  //   age: Number,
  // },
  props: {
    name: {
      type:String,
      required: true,
      default: '길동이'
    },
    age: {
      type:Number,
      required: true,
      validator: (ageValue) => {
        if(ageValue <  10) alert(`나이는 10살 이상이어야 합니다`)
        return ageValue >= 10;
      },
      default: 20
    },
  },
  inject: ['global1', 'global2'],
  created() {
    console.log('-------------------------------------')
    console.log('[UserProfile created 시작]')
    console.log('UserProfile 컴포넌트')
    console.log('this.name = ', this.name)
    console.log('type = ', typeof this.name)
    console.log('\n')
    console.log('this.age = ', this.age)
    console.log('type = ', typeof this.age)
    console.log('[UserProfile created 종료]')
    console.log('-------------------------------------')
  },
  // 여기없는 커스텀 이벤트 호출시 경고 문구 콘솔에 적힘
  emits: ['fn-callback'],
  methods: {

  },
  mounted() {
    console.log('-------------------------------------')
    console.log('[UserProfile mounted 시작]')
    console.log('[UserProfile mounted 종료]')
    console.log(`this.$parent.appUserName => ${this.$parent.appUserName}`)
    console.log(`this.$parent.appUserAge => ${this.$parent.appUserAge}`)
    console.log('-------------------------------------')
  }
}
</script>

<template>
  <div>
    <h1>UserProfile 컴포넌트</h1>
    <h6>name = {{ name }}</h6>
    <h6>age = {{ age }}</h6>
<!--    <button @click="$emit('fn-callback', {age: this.age, name: this.name})">커스텀 컴포넌트 이벤트 호출</button>-->
<!--    <button @click="() => this.$emit('fn-callback', {age: this.age, name: this.name})">커스텀 컴포넌트 이벤트 호출</button>-->
    <Button @click="$emit('fn-callback', {age: this.age, name: this.name})">커스텀 컴포넌트 이벤트 호출</Button>
    <h3>{{ global1 }}</h3>
    <h3>{{ global2 }}</h3>
  </div>
</template>

<style scoped>

</style>
