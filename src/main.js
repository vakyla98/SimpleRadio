import Vue from 'vue'
import App from './App.vue'

import '@/style/style.scss'
import '@babel/polyfill'
import vuetify from './plugins/vuetify'

import firebaseConfig from './config/firebase'
import firebase from 'firebase'

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App),
}).$mount('#app')
