export const state = () => ({
  detailProject: {
    data: {
      images: []
    }
  },
  form: {
    title: '',
    caption: '',
    projectType: '',
    team_id: '',
    addImage: {},
    delImage: ''
  }
})

export const mutations = {
  // NOTE - detail project
  setSelectedDetailPorjects (state, data) {
    state.detailProject = data
  },

  // NOTE - remove image
  removeSelectedImage (state, index) {
    state.detailProject.data.images.splice(index, 1)
  },

  // NOTE - add image
  setImageState (state, image) {
    state.form.addImage = image
  },

  // NOTE - set judul
  setTitle (state, title) {
    state.form.title = title
  },

  // NOTE - set desc projects/5
  setCaption (state, caption) {
    state.form.caption = caption
  }
}

export const actions = {
  async getSelectedDetailPorjects ({ commit }, params) {
    try {
      const res = await this.$axios.$get(`projects/${params}`)
      commit('setSelectedDetailPorjects', res)
      return res.data
    } catch (err) {
      return err.res
    }
  },

  setDataImage ({ commit }, image) {
    commit('setImageState', image)
    commit('setImageDetailProject', image)
  },

  // NOTE - edit project
  async editProject (ctx, projectId) {
    try {
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const formData = new FormData()
      formData.append('title', ctx.state.form.title)
      formData.append('caption', ctx.state.form.caption)
      // formData.append('project_type', ctx.state.form.projectType)
      // formData.append(
      //   'project_teams_attributes[0][team_id]',
      //   ctx.state.form.team_id
      // )
      // ctx.state.form.addImage.forEach((val, index) => {
      //   formData.append(`images_attributes[${index}][image]`, val.file)
      // })

      return await this.$axios.$patch(`projects/${projectId}`)
    } catch (error) {
      return error.response
      // throw new Error('Failed to post data')
    }
  }
}
