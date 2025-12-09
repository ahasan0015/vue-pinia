
import Form from '@/pages/Form.vue';
import FormObject from '@/pages/FormObject.vue';
import FormToken from '@/pages/FormToken.vue';


import Home from '@/pages/Home.vue';
import Pinia from '@/pages/Pinia.vue';
import { createRouter, createWebHistory } from 'vue-router'



const myRouter = createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/pinia', component: Pinia },
        { path: '/from', component: Form },
        { path: '/fromo', component: FormObject },
        { path: '/formtoken', component: FormToken },
      
    ]
});

export default myRouter