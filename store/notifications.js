export const state = () => ({
  notifiCations: []
})

// NOTE - Mutations
export const mutations = {
  setNotification (state, dataNotif) {
    state.notifiCations = dataNotif
  }
}

// NOTE - Actions
export const actions = {
  async fetchNotifications ({ commit }) {
    try {
      const response = await this.$axios.$get('notifications')
      console.log(response)
      commit('setNotification', response.data)
    } catch (err) {
      return err.response
    }
  }
}
