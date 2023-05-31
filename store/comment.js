export const state = () => ({
  forms: {
    comment: '',
    projectId: '',
    xAxis: '',
    yAxis: '',
    selectIdImg: null
  },
  comments: [],
  commentCount: 0
})

export const mutations = {
  setImg (state, setImgId) {
    state.forms.selectIdImg = setImgId
  },

  setForm (state, formData) {
    state.forms = formData
  },

  getComments (state, setComments) {
    state.comments = setComments
  },
  setCommentCount (state, count) {
    state.commentCount = count
  }
}

export const actions = {
  // post comment
  async postData ({ state }, data) {
    try {
      const response = await this.$axios.$post('comments', data)
      console.log(response.data)
      return response // Mengembalikan respons ke komponen Vue
    } catch (error) {
      return error.response
    }
  },

  // get comment
  async fetchComment ({ commit }, projectId) {
    try {
      const response = await this.$axios.$get(
        `comments?project_id=${projectId}`
      )

      const comments = response.data.comments
      const commentCount = comments.length

      commit('getComments', comments)
      commit('setCommentCount', commentCount)

      return response
    } catch (err) {
      return err.response
    }
  },

  async deleteComment (state, data) {
    try {
      return await this.$axios.$delete(`comments/${data}`)
    } catch (err) {
      return err.response
    }
  }
}

export const getters = {
  // get comment
  getAllComment: (state) => {
    return state.comments
  },
  commentCount (state) {
    return state.commentCount
  }
}
