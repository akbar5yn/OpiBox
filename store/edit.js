export const state = () => ({
  detailProject: {
    data: {
      images: {}
    }
  },
  form: {
    title: '',
    caption: '',

    selectedImg: [],
    delImage: []
  }
})

export const mutations = {
  setSelectedImg (state, image) {
    state.detailProject.data.images.push(image)
  },

  // NOTE - detail project
  setSelectedDetailPorjects (state, data) {
    state.detailProject = data
  },

  // NOTE - remove image
  removeSelectedImage (state, index) {
    state.detailProject.data.images.splice(index, 1)
    state.form.selectedImg.splice(index, 1)
  },

  // NOTE - add image
  addImage (state, val) {
    state.form.selectedImg = [...state.form.selectedImg, val]
  },

  deleteImage (state, idImg) {
    state.form.delImage = [...state.form.delImage, idImg]
  },

  // NOTE - set judul
  setTitle (state, title) {
    state.form.title = title
  },

  // NOTE - set desc projects/5
  setCaption (state, caption) {
    state.form.caption = caption
  },

  clearFormData (state) {
    state.form.title = ''
    state.form.caption = ''
    state.form.selectedImg = []
    state.form.delImage = []
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
      ctx.state.form.selectedImg.forEach((val, index) => {
        formData.append(`images_attributes[${index}][image]`, val.file)
      })

      ctx.state.form.delImage.forEach((idImg, index) => {
        formData.append(`images_attributes[${index}][id]`, idImg.idImage)
        formData.append(`images_attributes[${index}][_destroy]="1"`)
      })

      ctx.commit('clearFormData')
      return await this.$axios.$patch(`projects/${projectId}`, formData)
    } catch (error) {
      return error.response
      // throw new Error('Failed to post data')
    }
  }
}
