<script>
import FirstChild from "@/components/FirstChild.vue";
import UserProfile from "@/components/UserProfile.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";
import MixLayout from "@/components/MixLayout.vue";
import DynamicLayout from "@/components/DynamicLayout.vue";
import BasicScope from "@/components/BasicScope.vue";
import BasicScope2 from "@/components/BasicScope2.vue";

const initObj = {
  appUserName: '관리자',
  appUserAge: 100,
  area1: 'header',
  header: 'header',
  message: 'parent',
  count: 0,

}
export default {
  data() {
    console.log('======================================')
    console.log('[App data 시작]')
    console.log('data ...')
    /*      return {
            appUserName: '관리자',
            appUserAge: 100,
          }*/
    console.log('[App data 종료]')
    console.log('======================================')
    return initObj
  },
  // 컴포넌트 지역 등록시
  components: {
    BasicScope2,
    BasicScope,
    DynamicLayout,
    MixLayout,
    DefaultLayout,
    UserProfile,
    FirstChild
  },
  provide() {
    console.log('======================================')
    console.log('[App provide 시작]')
    console.log('[App provide 종료]')
    console.log('======================================')
    return initObj

  },
  created() {
    console.log('======================================')
    console.log('[App created 시작]')
    console.log('[App created 종료]')
    console.log('======================================')
  },
  inject: ['global1', "global2"],
  mounted() {
    console.log('======================================')
    console.log('[App mounted 시작]')

    const h1DomElement = this.$refs.h1DomElement
    console.log('h1DomElement = ', h1DomElement.innerText)

    console.log('\n')
    console.log('this.$refs.firstChild.num = ', this.$refs.firstChild.num)
    console.log('type = ', typeof this.$refs.firstChild.num)
    console.log('this.$refs.firstChild.text = ', this.$refs.firstChild.text)
    console.log('type = ', typeof this.$refs.firstChild.text)

    console.log(`this.$refs.child3.name => ${this.$refs.child3.name}`)
    console.log(`this.$refs.child3.age => ${this.$refs.child3.age}`)
    console.log('[App mounted 종료]')
    console.log('======================================')
  },
  methods: {
    // 객체도 가능, 그냥 값도 가능
    fnCallback(obj) {
      console.log(`fnCallback ... param => ${JSON.stringify(obj, null, 2)}`)
    }
  }
}

const arr = ['header']
</script>

<template>
  <h1 ref="h1DomElement">App 컴포넌트</h1>



  <fieldset>
    <legend>slot - 기본 레이아웃</legend>
    <DefaultLayout>
      <!--      th:block 이나 fragment 스럽네-->
      <template v-slot:header>
        <h3>header 입니다</h3>
      </template>
      <template v-slot:main>
        <h3>main 입니다</h3>
      </template>
      <template v-slot:footer>
        <h3>footer 입니다</h3>
      </template>
    </DefaultLayout>
  </fieldset>

  <fieldset>
    <legend>slot - 기본레이아웃</legend>
    <MixLayout>
      <template #header>
        <h3>헤더를 끼자..</h3>
      </template>
      <template #default>
        <!--      <h3>메인을 끼자..</h3>-->
      </template>
      <template #footer>
        <h3>메인을 끼자..</h3>
      </template>
    </MixLayout>
  </fieldset>

  <fieldset>
    <legend>slot - 동적 레이아웃</legend>
    <DynamicLayout>
      <!--      <template #[header]>-->
      <template #[this.header]>
        <h2>동적 슬롯 가자</h2>
      </template>
    </DynamicLayout>
  </fieldset>
  <fieldset>
    <h3>{{ global1 }}</h3>
    <h3>{{ global2 }}</h3>
  </fieldset>


    <!--
    <fieldset>
      <legend>slot - 기본 레이아웃</legend>
    </fieldset>
   -->

  <fieldset>
    <legend>slot - 슬롯의 범위 1</legend>
    <BasicScope>
      <h1>범위</h1>
    </BasicScope>
  </fieldset>

  <fieldset>
    <legend>slot - 슬롯의 범위 2</legend>
    <BasicScope2>
      <h1>범위: {{ message }} / {{ count }}</h1>
    </BasicScope2>
  </fieldset>

  <fieldset>
    <legend>slot - 범위가 지정된 슬롯</legend>
    <BasicScope2 v-slot="{ message, count}">
      <h1>범위: {{ message }} / {{ count }}</h1>
    </BasicScope2>
  </fieldset>

  <fieldset>
    <legend>slot - 이름이 있는 슬롯과 범위가 지정된 슬롯의 혼합 사용</legend>
    <BasicScope2 v-slot="{ message, count}">
      <h1>범위: {{ message }} / {{ count }}</h1>
    </BasicScope2>
  </fieldset>
















  <fieldset>
    <FirstChild ref="firstChild"/>
  </fieldset>
  <!--
    v-bind:name
    v-bind:age
  -->
  <!--  <UserProfile ref="child1" @fn-callback="fnCallback" :name="appUserName" :age="appUserAge" />-->
  <!--  <UserProfile ref="child2" @fn-callback="fnCallback" :name="`홍길동`" :age="10"/>-->
  <fieldset>
    <UserProfile ref="child3" @fn-callback="fnCallback"/>
  </fieldset>


</template>

<style scoped>
h1 {
  color: blue;
}
</style>

