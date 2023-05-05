export const actions = {
  async registerUser (state, data) {
    try {
      const response = await this.$axios.$post('auth/signup', data)
      console.log({ data })
      return response
    } catch (err) {
      console.log(err.response.data)
    }
  },
  async loginUser (state, data) {
    try {
      const response = await this.$auth.loginWith('local', data)
      console.log({ response })
      return response
    } catch (err) {
      console.log(err.response.data)
    }
  }
}

export const mutations = {}
