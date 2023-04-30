import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  sideBar: true

}
const mutations = {
  openSidebar (state) {
    state.sideBar = true
  },

  toggleSidebar (state) {
    state.sideBar = !state.sideBar
  }
}
const store = () => {
  return new Vuex.Store({
    state,
    mutations
  })
}

export default store
