import Vue from 'vue'
import Vuex from 'vuex'

import userModule from './modules/user'
import stationsModule from './modules/stations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isLoading:true
  },
  mutations: {
      changeLoadingState(state,loadingState){
          state.isLoading = loadingState
      }
  },
  actions: {
  },
  getters:{
    getLoadingState(state) {
        return state.isLoading
    },
  },
  modules: {
    userModule,
    stationsModule
  }
})
