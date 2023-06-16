export const state = () => ({
  loginTime: null,
  tokenUser: null
})

export const mutations = {
  setLoginTime (state, time) {
    state.loginTime = time
    localStorage.setItem('loginTime', time) // Menyimpan loginTime di localStorage
  },
  clearLoginTime (state) {
    state.loginTime = null
    localStorage.removeItem('loginTime') // Menghapus loginTime dari localStorage
  },
  setTokenUser (state, token) {
    state.tokenUser = token
    localStorage.setItem('tokenUser', token)
  }
}

export const actions = {
  // register
  async registerUser (state, data) {
    try {
      return await this.$axios.$post('auth/signup', data)
    } catch (err) {
      return err.response
    }
  },

  // login
  async loginUser ({ commit }, data) {
    try {
      const response = await this.$auth.loginWith('local', data)
      const loginTime = new Date()
      commit('setLoginTime', loginTime)
      commit('setTokenUser', response.data.data.token)
      return response
    } catch (err) {
      return err.response
    }
  },

  // logout
  async logoutUser ({ commit }) {
    try {
      const response = await this.$auth.logout('local')
      console.log({ response })
      commit('clearLoginTime')

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
  },
  async verifyAccount (state, data) {
    try {
      return await this.$axios.$get(
        `verification-account?token_verification=${data}`
      )
    } catch (err) {
      return err.response
    }
  }
}

export const getters = {
  getLoginTime: state => state.loginTime || localStorage.getItem('loginTime'), // Mengambil loginTime dari localStorage saat getter dipanggil
  getToken: state => state.tokenUser || localStorage.getItem('tokenUser')
}
