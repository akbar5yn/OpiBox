export const state = () => ({
  notifiCations: [],
  inviteNotif: []
})

// NOTE - Mutations
export const mutations = {
  setNotification (state, dataNotif) {
    state.notifiCations = dataNotif
  },

  setNotificationInvitations (state, dataNotifInv) {
    state.inviteNotif = dataNotifInv
  },

  removeInvitation (state, index) {
    state.inviteNotif.splice(index, 1)
  }
}

// NOTE - Actions
export const actions = {
  // SECTION - fetch notification
  async fetchNotifications ({ commit }) {
    try {
      const response = await this.$axios.$get('notifications')
      console.log(response)
      commit('setNotification', response.data)
    } catch (err) {
      return err.response
    }
  },

  // SECTION - get notification invitations
  async getNotificationInvitations ({ commit }) {
    try {
      const response = await this.$axios.$get(
        'notifications/invitation_notification'
      )
      console.log(response)
      commit('setNotificationInvitations', response.data)
    } catch (err) {
      return err.response
    }
  },

  // SECTION - accpet notification
  async acceptNotification (state, token) {
    try {
      const response = await this.$axios.$get(
        `inv/accept_invitation?invitation_token=${token}`
      )
      return response
    } catch (err) {
      return err.response
    }
  },

  clearInviteNotif ({ commit, state }, index) {
    const invitations = [...state.inviteNotif]
    invitations.splice(index, 1)
    commit('setNotificationInvitations', invitations)
  },

  // NOTE - /inv/decline_invitation?invitation_token=0fdaaced8699dd489e32a6e104517b1b82b7a8c6
  async declineInvtation (state, token) {
    try {
      const response = await this.$axios.$get(
        `inv/decline_invitation?invitation_token=${token}`
      )
      return response
    } catch (err) {
      return err.response
    }
  }
}
export const getters = {
  getNotif: (state) => {
    return state.inviteNotif
  }
}
