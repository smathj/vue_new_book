// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// @ 은 /src 를 의미 (vite.config.js 덕분)
import FirstChild from "@/components/FirstChild.vue";

const global1 = '- global1'
const global2 = '- global2'

console.log(Symbol())

createApp(App)
    // 글로벌 프로바이더
    .provide('global1', global1)
    .provide('global2', global2)
    // 글로벌 컴포넌트 - 전역 등록
    .component('FirstChild', FirstChild)
    .mount('#app')
