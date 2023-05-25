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
  setSelectedImg (state, val) {
    state.selectedImg = [...state.selectedImg, val]
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
  // post project
  async postData (ctx) {
    try {
      const headers = { 'Content-Type': 'multipart/form-data' }
      const formData = new FormData()
      formData.append('title', ctx.state.form.judul)
      formData.append('caption', ctx.state.form.desc)
      formData.append('project_type', ctx.state.form.projectType)
      formData.append(
        'project_teams_attributes[0][team_id]',
        ctx.state.form.selectedAkses
      )
      ctx.state.selectedImg.forEach((val, index) => {
        formData.append(`images_attributes[${index}][image]`, val.file)
      })
      const response = await this.$axios.$post('projects', formData, {
        headers
      })
      return response
    } catch (error) {
      throw new Error('Failed to post data')
    }
  },

  removeSelectedImage ({ commit }, index) {
    commit('removeSelectedImage', index)
  },

  // get project
  async fetchMyProject ({ commit }) {
    try {
      const response = await this.$axios.$get('projects/my_projects')
      const myProject = response.data
      commit('setMyProject', myProject)
    } catch (error) {
      console.error(error)
    }
  }
}

export const getters = {
  // get project
  getMyProject: (state) => {
    return state.projects
  }
}
