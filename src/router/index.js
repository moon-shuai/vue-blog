import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home/index.vue';
import Login from '../views/login/index.vue';


Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: '登录',
        component: Login
    },
    {
        path: '/',
        name: '首页',
        component: Home,
        children: [
            {
                path: '/index',
                component: Home,
                children: null
            }
        ]
    }
];

const router = new VueRouter({
    // mode: "history", // 控制是否显示  ‘#’
    base: process.env.BASE_URL,
    routes
});

export default router;
