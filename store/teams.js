export const state = () => ({
  forms: {
    teamId: '',
    email: []
  },
  kolabolator: [],
  teams: new Map(),
  modalTim: false,
  modalInviter: false,
  teamByInv: [],
  getId: null,
  teamKolab: []
})

export const mutations = {
  setTeams (state, teams) {
    state.teams = teams
  },

  setTeamsByInv (state, teamByInv) {
    state.teamByInv = teamByInv
  },

  addTeam (state, team) {
    state.teams.push(team)
  },

  setModalTim (state, value) {
    state.modalTim = value
  },

  setModalInvite (state, value) {
    state.modalInviter = value
  },

  setKolaborator (state, setEmail) {
    state.forms.email = setEmail
  },

  setTeamId (state, teamId) {
    state.forms.teamId = teamId
  },

  setSelectedTeamId (state, teamId) {
    state.getId = teamId
  },

  setSelectedTeamKolab (state, teamId) {
    state.teamKolab = teamId
  }
}

export const actions = {
  // create team
  async createTeam (state, data) {
    try {
      const response = await this.$axios.$post('teams', data)
      console.log({ response })

      return response
    } catch (err) {
      console.log(err.response.data)
      return err.response
    }
  },

  // get teams
  async fetchTeams ({ commit }, createdBy) {
    try {
      const response = await this.$axios.$get('teams', {
        params: { created_by: createdBy }
      })
      commit('setTeams', response.data)
    } catch (err) {
      return err.response
    }
  },

  async invTeams ({ commit }) {
    try {
      const response = await this.$axios.$get('userteam/current_user')
      const teams = response.data
      commit('setTeamsByInv', teams)
    } catch (err) {
      return err.response
    }
  },

  // invite kolabolator
  async invitations ({ commit, state }) {
    const data = {
      team_id: state.forms.teamId,
      email: state.forms.email
    }
    try {
      const response = await this.$axios.$post('userteam', data)
      commit('setKolaborator', response)
    } catch (err) {
      return err.response
    }
  },

  setTeamId ({ commit }, teamId) {
    commit('setSelectedTeamId', teamId)
  },

  // delete team
  async deleteTeam ({ commit }, timId) {
    try {
      commit('setLoading', true) // Set loading menjadi true sebelum melakukan permintaan

      const response = await this.$axios.$delete(`teams/${timId}`)

      return response
    } catch (err) {
      return err.response
    }
  },

  async fetchKolab ({ commit }, teamId) {
    try {
      const response = await this.$axios.$get(`userteam?team_id=${teamId}`)

      commit('setSelectedTeamKolab', response)
      return response
    } catch (err) {
      return err.response
    }
  }
}

export const getters = {
  getTeams: (state) => {
    return state.teams
  },

  getTeamsByInv: (state) => {
    return state.teamByInv
  },

  getTeamKolab: (state) => {
    return state.teamKolab
  }
}
