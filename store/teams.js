export const state = () => ({
  teams: []
})

export const mutations = {
  setTeams (state, teams) {
    state.teams = teams
  },

  addTeam (state, team) {
    state.teams.push(team)
  }
}

export const actions = {
  async createTeam (state, data) {
    try {
      const response = await this.$axios.$post('teams', data)
      console.log({ response })

      return response
    } catch (err) {
      console.log(err.response.data)
      throw new Error('Gagal membuat tim baru')
    }
  },

  // get teams
  async fetchTeams ({ commit }, createdBy) {
    try {
      const response = await this.$axios.$get('teams', {
        params: { created_by: createdBy }
      })
      // const teams = response.data
      commit('setTeams', response.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const getters = {
  getTeams: (state) => {
    return state.teams
  }
}
