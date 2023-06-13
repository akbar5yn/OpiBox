export const state = () => ({
  showPreview: false,
  form: {
    imageId: '',
    dataImage: {}
  },
  countRedesign: 0,
  redesignData: [],
  modifiedHistory: []
})

export const mutations = {
  setImageState (state, image) {
    state.form.dataImage = image
  },
  setShowPreview (state, value) {
    state.showPreview = value
  },
  clearImageUrlState (state) {
    state.form.dataImage = {}
  },
  setImgIdState (state, imgId) {
    state.form.imageId = imgId
  },
  setRedesignState (state, redesignData) {
    state.redesignData = redesignData
  },
  setCountRedesign (state, countRedesign) {
    state.countRedesign = countRedesign
  },

  // NOTE - modified history state
  setModifiedHistory (state, history) {
    state.modifiedHistory = history
  },

  // NOTE - clear form create project
  clearFormData (state) {
    state.form.dataImage = {}
    state.form.imageId = ''
    state.showPreview = false
  }
}

export const actions = {
  setDataImage ({ commit }, image) {
    commit('setImageState', image)
  },

  clearImageUrl ({ commit }) {
    commit('clearImageUrlState')
  },

  // NOTE - post
  async createModification (ctx, { projectId, caption }) {
    try {
      const headers = { 'Content-Type': 'multipart/form-data' }
      const formData = new FormData()
      formData.append('caption', caption)
      formData.append('image_id', ctx.state.form.imageId)
      formData.append('image_attributes[image]', ctx.state.form.dataImage)

      ctx.commit('setLoading', true)
      const response = await this.$axios.$post(
        `projects/${projectId}/redesigns`,
        formData,
        {
          headers
        }
      )

      // ctx.commit('setLoading', false)
      ctx.commit('clearFormData')
      return response
    } catch (error) {
      ctx.commit('setLoading', false)
      return error.response
      // throw new Error('Failed to post data')
    }
  },

  // NOTE - fetching
  async fetchRedesign ({ commit }, projectId) {
    await this.$axios
      .$get(`projects/${projectId}/redesigns`)
      .then((res) => {
        commit('setRedesignState', res.data)
        commit('setCountRedesign', res.data.length)
      })
      .catch(err => console.log(err))
  },

  // NOTE - get Modified history
  async fetchModifiedHistory ({ commit }) {
    try {
      const response = await this.$axios.$get('projects/history_redesigns')
      const history = response.data
      commit('setModifiedHistory', history)
    } catch (error) {
      console.error(error)
    }
  }
}

export const getters = {
  // get comment
  getImgUrl: (state) => {
    return state.form.dataImage
  },

  getDataRedesign: (state) => {
    return state.redesignData
  },

  getCountRedesign: (state) => {
    return state.countRedesign
  },
  getModifiedHistory (state) {
    return state.modifiedHistory
  }
}
