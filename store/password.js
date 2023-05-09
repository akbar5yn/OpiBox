export const actions = {
  async forgotPassword (state, data) {
    try {
      return await this.$axios.$post('forgot_password', data)
    } catch (err) {
      return err.response
    }
  },
  async updatePassword (state, payload) {
    try {
      const data = {
        password: payload.password
      }
      return await this.$axios.$patch(`update_password/${payload.token}`, data)
    } catch (err) {
      return err.response
    }
  }
}
