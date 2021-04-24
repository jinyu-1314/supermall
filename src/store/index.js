import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './mutations'
import Actions from './actions'
import Getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCartShow: false,
    cartList: []
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
  modules: {
  }
})
