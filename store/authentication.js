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
      console.log({ response })
      // this.$router.push('/mainpage')
      return response
    } catch (err) {
      console.log(err.response.data)
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
  }
}

export const mutations = {}
