// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// ./router/index  "index" 생략시 index.js 자동으로 매칭
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')
