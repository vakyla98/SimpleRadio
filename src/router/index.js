import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'StationsList',
        component: () => import('../views/StationsList.vue')
    },
    {
        path: '/player/:stationName',
        name: 'Player',
        component: () => import('../views/PlayerPage.vue')
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes,
})

export default router
