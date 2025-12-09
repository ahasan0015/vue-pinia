// import './assets/main.css'

import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import App from './App.vue'
import route from '@/routes/index'
import { createPinia } from 'pinia'


const pinia = createPinia();

createApp(App).use(pinia).use(route).mount('#app')
