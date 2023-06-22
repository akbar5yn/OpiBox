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
  projects: [],
  loading: false,
  detailProject: {},
  projectShared: [],
  projectShareable: {},
  closeModal: false,
  dataResult: {}
})

export const mutations = {
  setCloseModal (state, value) {
    state.closeModal = value
  },
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
  },

  setModalProject (state, { projectId, showModal }) {
    const project = state.projects.find(project => project.id === projectId)
    if (project) {
      project.showModal = showModal
    }
  },

  setLoading (state, value) {
    state.loading = value
  },

  setDetailProject (state, value) {
    state.detailProject = value
  },

  setProjectShared (state, projectShared) {
    state.projectShared = projectShared
  },

  setLinkShareableProject (state, shareableProject) {
    state.projectShareable = shareableProject
  },

  // NOTE - clear form create project
  clearFormData (state) {
    state.form.judul = ''
    state.form.desc = ''
    state.form.projectType = ''
    state.form.selectedAkses = ''
    state.selectedImg = []
  },

  // NOTE - result searching
  setResultSearch (state, result) {
    state.dataResult = result
  }
}

// SECTION - actions
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
      ctx.commit('setLoading', true)
      const response = await this.$axios.$post('projects', formData, {
        headers
      })

      ctx.commit('setLoading', false)
      ctx.commit('clearFormData')
      return response
    } catch (error) {
      ctx.commit('setLoading', false)
      return error.response
      // throw new Error('Failed to post data')
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
      const projectsWithModal = myProject.map(project => ({
        ...project,
        showModal: false
      }))
      commit('setMyProject', projectsWithModal)
    } catch (error) {
      console.error(error)
    }
  },

  setShowInfo ({ commit, state }, projectId) {
    const project = state.projects.find(project => project.id === projectId)
    if (project) {
      const showModal = !project.showModal
      commit('setModalProject', { projectId, showModal })
    }
  },

  // delete project
  async deleteProject ({ commit }, projectId) {
    try {
      commit('setLoading', true) // Set loading menjadi true sebelum melakukan permintaan

      const response = await this.$axios.$delete(`projects/${projectId}`)
      console.log(response)
      commit('setLoading', false) // Set loading menjadi false setelah permintaan selesai

      return response
    } catch (err) {
      commit('setLoading', false) // Set loading menjadi false jika terjadi kesalahan
      return err.response
    }
  },

  async getSingleProject ({ commit }, projectId) {
    try {
      const response = await this.$axios.$get(`projects/${projectId}`)
      commit('setDetailProject', response.data)
    } catch (err) {
      if (err.response.status !== 200) {
        commit('setDetailProject', [])
      }
    }
  },

  // SECTION - get share project
  async getSharedProject ({ commit }) {
    try {
      const response = await this.$axios.$get('projects/shared')
      commit('setProjectShared', response.data)
    } catch (err) {
      return err.response
    }
  },

  async getLinkShareableProject ({ commit }, linkShareableProject) {
    // projects/link_open/49b281bc-b09e-4fac-b9e2-615727f2af2d
    try {
      const response = await this.$axios.$get(
        `projects/link_open/${linkShareableProject}`
      )
      console.log(response)
      commit('setLinkShareableProject', response.data)
      return response.data
    } catch (err) {
      return err.response
    }
  },

  // NOTE - search projects/search?keyword=janjuk

  async searchProject ({ commit }, keywords) {
    try {
      const response = await this.$axios.$get(
        `projects/search?keyword=${keywords}`
      )
      commit('setResultSearch', response)
      return response
    } catch (e) {
      return e.response
    }
  }
}

export const getters = {
  // get project
  getMyProject: (state) => {
    return state.projects
  },

  getProjectSahred: (state) => {
    return state.projectShared
  },

  getResult: (state) => {
    return state.dataResult.data
  }
}
