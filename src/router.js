import { createRouter, createWebHistory } from 'vue-router'
import Personal from './components/Personal.vue'
import Video from './components/Video.vue'

const routes = [
    { name: 'personal', path: '/', component: Personal },
    { name: 'video', path: '/video', component: Video }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;