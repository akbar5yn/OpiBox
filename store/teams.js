export const state = () => ({
  teams: new Map(),
  teamByInv: []
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
      commit('setTeams', response.data)
    } catch (error) {
      console.error(error)
    }
  },
  async invTeams ({ commit }) {
    try {
      const response = await this.$axios.$get('userteam/current_user')
      const teams = response.data
      commit('setTeamsByInv', teams)
    } catch (error) {
      console.error(error)
    }
  }
  // async fetchTeams ({ commit }) {
  //   try {
  //     const response = await this.$axios.$get('teams')

  //     console.log(response, 'data nama tim')
  //     const teamMap = new Map()
  //     response.data.forEach((team) => {
  //       teamMap.set(team.id, team)
  //     })
  //     commit('setTeams', teamMap)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // },
  // get tim by invitation user curent_user
  // async invTeams ({ commit, state }, invMe) {
  //   try {
  //     const response = await this.$axios.$get('userteam', {
  //       params: { curent_user: invMe }
  //     })

  //     const teamMap = state.teams
  //     const teamsByInv = []

  //     for (const team of response.data) {
  //       const localTeam = teamMap.get(team.team_id)

  //       let teamName = 'Nama Tim Tidak Diketahui'
  //       if (localTeam) {
  //         // Jika ada informasi tim dalam state.teams, gunakan nama tim tersebut
  //         teamName = localTeam.name
  //         console.log(teamName)
  //       } else {
  //         // Jika tidak ada informasi tim dalam state.teams, lakukan permintaan terpisah untuk mendapatkan nama tim
  //         try {
  //           const teamResponse = await this.$axios.$get(`teams/${team.team_id}`)
  //           teamName = teamResponse.name
  //           console.log(teamResponse)
  //         } catch (error) {
  //           console.error(
  //             `Gagal mendapatkan informasi tim dengan ID ${team.team_id}:`,
  //             error
  //           )
  //         }
  //       }

  //       teamsByInv.push({
  //         ...team,
  //         name: teamName
  //       })
  //     }

  //     commit('setTeamsByInv', teamsByInv)
  //   } catch (error) {
  //     console.error(error)
  //     throw error
  //   }
  // }
}

export const getters = {
  getTeams: (state) => {
    return state.teams
  },
  getTeamsByInv: (state) => {
    return state.teamByInv
  }
}
