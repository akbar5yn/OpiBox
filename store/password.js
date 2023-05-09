export const actions = {
  async forgotPassword (state, data) {
    try {
      return await this.$axios.$post('forgot_password', data)
    } catch (err) {
      return err.response
    }
  }
}
