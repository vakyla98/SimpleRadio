import Vue from 'vue'
import Vuex from 'vuex'

import userModule from './modules/user'
import keyboardModule from './modules/keyboard'
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
  },
  modules: {
    userModule,
    keyboardModule,
    stationsModule
  }
})
