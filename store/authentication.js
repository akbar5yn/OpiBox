export const actions = {
  // register
  async registerUser (state, data) {
    try {
      const response = await this.$axios.$post('auth/signup', data)
      console.log({ data })
      return response
    } catch (err) {
      console.log(err.response.data)
    }
  },

  // login
  async loginUser (state, data) {
    try {
      const response = await this.$auth.loginWith('local', data)
      return response
    } catch (err) {
      return err.response
    }
  },

  // logout
  async logoutUser () {
    try {
      const response = await this.$auth.logout('local')
      console.log({ response })

      return response
    } catch (err) {
      console.log(err.response.data)
    }
  },

  // resend verification
  async resendVerification (state, data) {
    try {
      return await this.$axios.$post('auth/resend', data)
    } catch (err) {
      return err.response
    }
  }
}

export const mutations = {}
