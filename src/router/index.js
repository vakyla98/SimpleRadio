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
        path: '/add-station',
        name: 'CreateStationPage',
        component: () => import('../views/CreateStationPage.vue'),
    },
    {
        path: '/player/:stationRoute',
        name: 'Player',
        component: () => import('../views/PlayerPage.vue'),
    },
    {
        path: '*',
        name: '404',
        component: () => import('../views/StationsPage.vue'),
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes,
})

export default router
