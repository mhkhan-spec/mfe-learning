import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: () => import('../pages/Products.vue') },
    { path: '/profile', component: () => import('../pages/Profile.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
