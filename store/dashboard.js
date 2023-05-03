export const state = {
  sideBar: true
}
export const mutations = {
  openSidebar (state) {
    state.sideBar = true
  },

  toggleSidebar (state) {
    state.sideBar = !state.sideBar
  }
}
