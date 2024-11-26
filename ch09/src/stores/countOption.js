import {defineStore} from "pinia";


/**
 * 옵션 스토어 ==> Options Api 유사
 * 첫번쨰 인자는 식별 키
 * 두번째 인자는 객체
 */
export const useCountOptionStore = defineStore('countOption', {
    //! 저장소가 관리할 데이터를 정의하는 영역
    state() {
        return {
            num: 10,
            json: null
        }
    },

    //! 스테이트 값을 조회하거나 값을 이용해서 가공하는 함수를 정의하는 영역
    getters: {
        doubleNum(state) {
            return state.num * 2
        },
        doubleNumPlusOne() {
            // getter 를 접근할때는 this 찍고 필드처럼 접근한다
            return this.doubleNum + 1
        }
    },
    //! state 를 변경하는 비동기 로직을 정의하는 영역
    actions: {
        increment() {
            this.num++; // this 키워드로 스테이트에 저장된 상태에 접근
            console.log(this.num)
        },
        getJSON(url) {
            this.increment(); // 다른 액션을 호출하고 싶을 떄 this 사용
            fetch(url)
                .then((response) => response.json())
                .then((json) => {
                    this.json = json;   // 요청에 대한 응답 결과를 스테이트에 저장
                    console.log(Object.keys(this.json[0]))
                });

        },

    }
})

/**
 * 클라이언트 측
 * mapState() : state, getter
 * mapActions() : actions
 */
