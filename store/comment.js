export const state = () => ({
  forms: {
    comment: '',
    projectId: '',
    xAxis: '',
    yAxis: '',
    selectIdImg: null
  }
})

export const mutations = {
  setImg (state, setImgId) {
    state.forms.selectIdImg = setImgId
  },

  setForm (state, formData) {
    state.forms = formData
  }
}

export const actions = {
  async postData ({ state }) {
    try {
      const response = await this.$axios.$post('comments', state.forms)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
}
