export const state = () => ({
  detailUser: {},
  modalDelete: false
})

export const actions = {
  // get profile user
  async getProfile (state, data) {
    try {
      const response = await this.$axios.$get('me', data)
      state.commit('setDetailUser', response.data)
    } catch (err) {
      if (err.response.data.status !== 200) {
        state.commit('setDetailUser', {})
      }
    }
  },
  async updateProfile (ctx, data) {
    try {
      const formData = new FormData()
      const headers = { 'Content-Type': 'multipart/form-data' }
      formData.append('name', data.name)
      formData.append('bio', data.bio)
      formData.append('image', data.avatar)
      return await this.$axios.$put('users/update_profile', formData, {
        headers
      })
    } catch (err) {
      return err.response
    }
  },

  // NOTE - delete account
  async deleteAccount (state, data) {
    try {
      const response = await this.$axios.$delete('users/destroy')
      console.log(response.data, 'response')
      return response
    } catch (err) {
      return err.response
    }
  }
}

export const mutations = {
  setDetailUser (state, value) {
    state.detailUser = value
  },

  setModalDelete (state, value) {
    state.modalDelete = value
  },
  setCloseModal (state, value) {
    state.modalDelete = value
  }
}
