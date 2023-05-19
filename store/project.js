export const state = () => ({
  selectedImg: [],
  showPreview: false,
  showModal: false,
  form: {
    judul: '',
    desc: '',
    projectType: '',
    selectedAkses: ''
  },
  projects: []
})

export const mutations = {
  setSelectedImg (state, selectedImg) {
    state.selectedImg.push(selectedImg)
  },

  setShowPreview (state, value) {
    state.showPreview = value
  },

  setShowModal (state, value) {
    state.showModal = value
  },

  setJudul (state, judul) {
    state.form.judul = judul
  },

  setDesc (state, deskripsi) {
    state.form.desc = deskripsi
  },

  setType (state, setType) {
    state.form.projectType = setType
  },

  setAkses (state, setAkses) {
    state.form.selectedAkses = setAkses
  },

  removeSelectedImage (state, index) {
    state.selectedImg.splice(index, 1)
  },

  setMyProject (state, myProject) {
    state.projects = myProject
  }
}

export const actions = {
  async postData ({ state }) {
    try {
      const postData = {
        title: state.form.judul,
        caption: state.form.desc,
        project_type: state.form.projectType,
        // team_id: state.form.selectedAkses,
        project_teams_attributes: [{ team_id: state.form.selectedAkses }],
        images_attributes: [{ image: state.selectedImg }]
      }
      console.log(postData)
      const response = await this.$axios.$post('projects', postData)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
      throw new Error('Failed to post data')
    }
  },

  removeSelectedImage ({ commit }, index) {
    commit('removeSelectedImage', index)
  },

  async fetchMyProject ({ commit }) {
    try {
      const response = await this.$axios.$get('projects')
      const myProject = response.data
      commit('setMyProject', myProject)
    } catch (error) {
      console.error(error)
    }
  }
}

export const getters = {
  getMyProject: (state) => {
    return state.projects
  }
}
