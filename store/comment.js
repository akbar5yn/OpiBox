export const state = () => ({
  forms: {
    comment: '',
    projectId: '',
    xAxis: '',
    yAxis: '',
    selectIdImg: null
  },
  comments: [],
  commentCount: 0,
  commentHistory: []
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
  },

  // NOTE - comments history state
  setCommentHistory (state, history) {
    state.commentHistory = history
  },

  // NOTE - clear form create project
  clearFormData (state) {
    state.forms.comment = ''
    state.forms.projectId = ''
    state.forms.xAxis = ''
    state.forms.yAxis = ''
    state.forms.selectIdImg = null
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
      const formData = new FormData()
      formData.append('project_id', data.project_id)
      return await this.$axios.$delete(
        `comments/${data.id}?project_id=${data.project_id}`
      )
    } catch (err) {
      return err.response
    }
  },

  // NOTE - get comments history
  async fetchCommentHistory ({ commit }) {
    try {
      const response = await this.$axios.$get('comments/history_comments')
      const history = response.data
      commit('setCommentHistory', history)
    } catch (error) {
      console.error(error)
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
  },
  getCommentHistory (state) {
    return state.commentHistory
  }
}
