export const state = () => ({
  detailUser: {}
})

export const actions = {
    // get profile user
    async getProfile (state, data) {
      try {
        const response = await this.$axios.$get('me', data)
        state.commit("setDetailUser", response.data)
      } catch (err) {
        if(err.response.data.status != 200) state.commit("setDetailUser", {})
      }
    }
}

export const mutations = {
  setDetailUser(state, value) {
    state.detailUser = value
  }
}