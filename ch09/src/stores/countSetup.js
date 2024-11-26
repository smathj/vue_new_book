import {defineStore} from "pinia";
import {computed, reactive, ref} from "vue";


/**
 * 셋업 스토어 ==> Composition Api 유사
 * 첫번쨰 인자는 식별 키
 * 두번째 인자는 함수 (<script setup> 과 유사)
 */
export const useCountSetupStore = defineStore('countSetup', () => {
    //? <script setup> 문법

    //! 저장소가 관리할 데이터를 정의하는 영역
    //! => ref, reactive 정의
    const num = ref(10)
    const json = ref(null);


    //! 스테이트 값을 조회하거나 값을 이용해서 가공하는 함수를 정의하는 영역
    //! => computed 를 정의
    // getter 에서 다른 getter 를 접근할떄 변수.value 로 접근해야한다
    const doubleNum = computed(() => num.value * 2)
    const doubleNumPlusOne = computed(() => doubleNum.value + 2)


    //! state 를 변경하는 비동기 로직을 정의하는 영역
    //! => 그냥 함수를 정의
    const increment = () => {
        num.value++; // this 키워드로 스테이트에 저장된 상태에 접근
        console.log(num.value)
    }

    const getJSON = (url) => {
        increment(); // 다른 액션을 호출하고 싶을 떄 this 사용
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                json.value = json;   // 요청에 대한 응답 결과를 스테이트에 저장
                console.log(json.value)
            });

    }


    return {
        num,
        doubleNum,
        doubleNumPlusOne,
        json,
        increment,
        getJSON
    };
});
