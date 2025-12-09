
import Form from '@/pages/Form.vue';


import Home from '@/pages/Home.vue';
import Pinia from '@/pages/Pinia.vue';
import { createRouter, createWebHistory } from 'vue-router'



const myRouter = createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/pinia', component: Pinia },
        { path: '/from', component: Form },
      
    ]
});

export default myRouter