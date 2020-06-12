import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'StationsPage',
        component: () => import('../views/StationsPage.vue'),
    },
    {
        path: '/player/:stationRoute',
        name: 'Player',
        component: () => import('../views/PlayerPage.vue'),
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes,
})

export default router
