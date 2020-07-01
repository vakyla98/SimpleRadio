import Vue from 'vue'
import App from './App.vue'

import '@/style/style.scss'
import '@babel/polyfill'

import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'

import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    Vuelidate,
    render: h => h(App),
}).$mount('#app')

  