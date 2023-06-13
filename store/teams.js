export const state = () => ({
  forms: {
    teamId: '',
    email: []
  },
  newTeamName: '',
  teams: new Map(),
  modalTim: false,
  modalInviter: false,
  modalEditTeam: false,
  teamByInv: [],
  getId: null,
  teamKolab: [],
  projectTeam: []
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
  },

  setSaveTeamId (state, teamId) {
    state.saveTeamId = teamId
  },

  setProjectTeam (state, projectTeam) {
    state.projectTeam = projectTeam
  },

  setModalEdit (state, value) {
    state.modalEditTeam = value
  }
}

// NOTE - actions
export const actions = {
  // SECTION -  create team
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

  // SECTION -  get teams
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

  // SECTION -  invite kolabolator
  async invitations ({ commit, state }) {
    const data = {
      team_id: state.forms.teamId,
      email: state.forms.email
    }
    try {
      const response = await this.$axios.$post('userteam', data)
      commit('setKolaborator', response)
      return response
    } catch (err) {
      return err.response
    }
  },

  // SECTION -  -  delete team
  async deleteTeam ({ commit }, timId) {
    try {
      commit('setLoading', true) // Set loading menjadi true sebelum melakukan permintaan

      const response = await this.$axios.$delete(`teams/${timId}`)

      return response
    } catch (err) {
      return err.response
    }
  },

  // SECTION - get user colab
  async fetchKolab (ctx, teamId) {
    try {
      teamId !== '' && localStorage.setItem('teamId', teamId)
      const response = await this.$axios.$get(
        `userteam?team_id=${
          teamId !== '' ? teamId : localStorage.getItem('teamId')
        }`
      )
      // const response = await this.$axios.$get('userteam?team_id=27')

      ctx.commit('setSelectedTeamKolab', response.data)

      return response
    } catch (err) {
      return err.response
    }
  },

  // SECTION - get project team
  async fetchPorojectTeam (ctx, teamId) {
    try {
      const response = await this.$axios.$get(
        `projects/${teamId}/team_projects`
      )
      console.log(response)
      ctx.commit('setProjectTeam', response.data)
    } catch (err) {
      return err.response
    }
  },

  async kickMemberTeam (ctx, { teamId, idMember }) {
    try {
      const response = await this.$axios.$delete(
        `teams/${idMember}/kick/${teamId}`
      )
      console.log(response)
      return response
    } catch (err) {
      return err.response
    }
  },

  async renameTeam (ctx, { timId, data }) {
    try {
      const response = await this.$axios.$put(`teams/${timId}`, data)

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
  },

  getTeamProject: (state) => {
    return state.projectTeam
  }
}
