import Vue from 'vue'
import Vuex from 'vuex'

import userModule from './modules/user'
import stationsModule from './modules/stations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
    stationsModule
  }
})
