import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import register from './modules/register'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    register,
    products
  }
})
