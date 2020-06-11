import Vue from 'vue'
import Vuex from 'vuex'

import userModule from './modules/todos'
import stationsModule from './modules/todos'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    actions: {
    },
    mutations: {
    },
    getters: {},
    modules: { todos }
})