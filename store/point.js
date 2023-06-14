export const state = () => ({
  points: ''
})

export const mutations = {
  setPointState (state, points) {
    state.points = points
  }
}

export const actions = {
  async fetchPoints ({ commit }) {
    try {
      const res = await this.$axios.$get('transactions')
      commit('setPointState', res.data[0].total_point)
      return res.data
    } catch (err) {
      return err.res
    }
  }
}

export const getters = {
  // get comment
  getTotalPoint: (state) => {
    return state.points
  }
}
