<!--<script setup>-->
<script>
//! options 스타일
export default {
  data() {
    return {
      name: '철수',
      gender: '남자',
      age: 20,
      userId: 'user1',
      userPassword: '',
      humanChk: true,
      blackList: ['code1', 'code3'],
      radioGroup1: 'white',
      selectBox: 'banana',
      input1: '',
      input2: '',
      nameWatch: '철수',
      color: 'red',

    };
  },
  methods: {
    fnLog(e) {
      console.log(e)
      // console.log(e.target.value)
    },
    fnEnter(e) {
      // console.log(e.target.value)
      console.log('엔터 이벤트 발생')
    },
    fnInputLog(e) {
      console.log(this.userPassword)
    },
    fnRadio(whiteAndBlack = 'white') {
      if (whiteAndBlack === 'white') {
        document.getElementsByTagName('body')[0].style.backgroundColor='white'
        document.getElementsByTagName('body')[0].style.color='black'
      } else {
        document.getElementsByTagName('body')[0].style.backgroundColor='black'
        document.getElementsByTagName('body')[0].style.color='white'
      }
    },
    fnSubmitHandler(e) {
      e.preventDefault()
      console.log('기본 이벤트를 제거한 submit 버튼을 눌렀습니다')
    }
  },

  // 자주 사용되는 메모리에 띄워놓기
  computed: {
    fnUserFullInfoText() {
      console.log('fnUserFullInfoText 호출')
      return `${this.userId} ${this.name} ${this.gender} ${this.age}`
    }
  },

  // 특정 값을 변경감지한다 기존의 값도 알고, 새로운 값도 알 수 있음
  watch: {
    nameWatch(newName, oldName) {
      console.log(`oldName = ${oldName} => newName = ${newName}`)
    },
    // 깊은 감시
    age: {
      handler(newAge, oldAge) {
        console.log(`oldAge = ${oldAge} => newAge = ${newAge}`)
      },
      deep: true,
    }
  },

  mounted() {
    // api 로 false 로 수정했다 가정
    this.humanChk = false
    // console.log(document.getElementsByName('radioGroup'))
    const radioArr = [...document.querySelectorAll('input[name=radioGroup]')];
    const [filterDom] = radioArr.filter((dom) => dom.checked == true)
    this.fnRadio(filterDom.value)

    // 깊은 감시하는 age 는 이 시점 조차 감지한다
    this.age = 10;

    // 일반 감시는 이 시점에 감지 못한다
    this.name = '광수';
  }
}
</script>

<template>
  <fieldset v-memo="[name, age]" v-cloak>
    <legend>메모지제이션 - 미리 연산하고 의존 배열이 바낄때만 랜더링 아니면 재사용</legend>
      <div>{{name}} 정보</div>
      <div>이름 : {{name}}</div>
      <div>성별 : {{gender}}</div>
      <div>나이 : {{age}}</div>
      <div>
        <button @click="() => this.age++">나이증가</button>
        <button @click="() => this.age--">나이감소</button>
      </div>
  </fieldset>

  <fieldset>
    <legend>v-model 로 양방향 데이터 바인딩</legend>
    <div><input type="text" @click="fnLog" id="userId" v-model="userId"></div>
    <div><input type="text" @click="fnInputLog" id="userPassword" v-model="userPassword"></div>
    <div><input type="text" @keyup.enter="fnEnter" value="엔터 이벤트"></div>
  </fieldset>

  <fieldset>
    <legend>단일 체크 박스</legend>
    <label for="humanChk"><input type="checkbox" id="humanChk" value="humanChk" v-model="humanChk">휴먼 입니까?</label>
  </fieldset>
  <fieldset>
    <legend>멀 티 체크 박스: 체크되어야할 값이 API로 받아서 배열로 있을때</legend>
    <label for="code1"><input type="checkbox" id="code1" value="code1" v-model="blackList" @click="() => console.log(this.blackList)">code1</label>
    <label for="code2"><input type="checkbox" id="code2" value="code2" v-model="blackList" @click="() => console.log(this.blackList)">code2</label>
    <label for="code3"><input type="checkbox" id="code3" value="code3" v-model="blackList" @click="() => console.log(this.blackList)">code3</label>
  </fieldset>


  <fieldset>
    <legend>라디오</legend>
    <div><label for="white"><input type="radio" name="radioGroup" id="white" value="white" @click="(e) => fnRadio(e.target.value)" v-model="radioGroup1">화이트 모드</label></div>
    <div><label for="black"><input type="radio" name="radioGroup" id="black" value="black" @click="(e) => fnRadio(e.target.value)" v-model="radioGroup1">블랙 모드</label></div>
  </fieldset>

  <fieldset>
    <legend>셀렉트 박스</legend>
    <select v-model="selectBox" @change="(e) => console.log('[셀렉트박스 변경 이벤트] 선택한 값 = ' ,e.target.value)">
      <option value="apple">사과</option>
      <option value="banana">바나나</option>
      <option value="orange">오렌지</option>
    </select>
  </fieldset>

  <fieldset>
    <legend>input 는 v-model 보다 @input 을 쓰자</legend>
    <div><input type="text" v-model="input1"> => {{ input1 }}</div>
    <div><input type="text" @input="(e) => this.input2 = e.target.value"> =>  {{ input2 }}</div>
  </fieldset>

  <fieldset>
    <legend>submit 이벤트 </legend>
    <form>
      <div><button type="submit">form 전송 (기본 이벤트 => 새로고침 까지됨)</button></div>
    </form>
    <form @submit="fnSubmitHandler">
      <div><button type="submit" >form 전송 (기본 이벤트 제거)</button></div>
    </form>
  </fieldset>

  <fieldset>
    <legend>키보드 이벤트 - 키가 누른다음 올라올때</legend>
    <input type="text" @keyup="(e) => console.log('keyup 이벤트 발생')">
  </fieldset>


  <fieldset>
    <legend>키보드 이벤트 - 입력할때마다</legend>
    <input type="text" @input="(e) => console.log(e.target.value)">
  </fieldset>

  <fieldset>
    <legend>computed - 자주 쓰는 함수 미리 계산해서 메모리에서 불러오기</legend>
    <p>{{ fnUserFullInfoText }}</p>
    <button @click="() => this.name = '광수'">name 수정</button>
  </fieldset>

  <fieldset>
    <legend>watch - 특정 값이 변경되는걸 감지한다 (oldValue -> newValue)</legend>
<!--    데이터 nameWatch, watch 함수도 nameWatch, v-model -->
    <input v-model="nameWatch">
  </fieldset>
  <fieldset>
    <legend>스타일 다루기 - v-bin:style = :style</legend>
<!--    데이터 nameWatch, watch 함수도 nameWatch, v-model -->
    <div><span v-bind:style="{color: color}">v-bind:style="{color: color}"</span></div>
    <div><span v-bind:style="{color}">v-bind:style="{color}"</span></div>
    <div><span :style="{color}">:style="{color}"</span></div>
  </fieldset>

</template>

<!--scoped 를 붙이면 이 컴포넌트에서만 적용된다, 없으면 다른 파일까지 오염-->
<style scoped>
/*
외부 스타일 import
@import "./assets/main.css";
@import "@/assets/main.css";
 */
  span {
    font-size: 25px;
  }

  fieldset{
    margin-bottom: 30px;
  }


</style>
