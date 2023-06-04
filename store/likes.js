export const state = () => ({
  likes: [],
  isLiked: false,
  userId: null,
  likeCount: 0
})

export const mutations = {
  getLike (state, likeProject) {
    state.likes = likeProject
  },

  setLike (state, value) {
    state.isLiked = value
    localStorage.setItem('isLiked', value.toString())
  },

  setLikeCount (state, count) {
    state.likeCount = count
  },

  disLikeProject (state, disLike) {
    state.likes = disLike
  },

  setUserId (state, userId) {
    state.userId = userId
  }
}

export const actions = {
  // get like
  async fetchLike ({ commit }, projectId) {
    try {
      // const projectId = this.$route.params.id // Mengambil ID proyek dari URL
      const response = await this.$axios.$get(`projects/${projectId}/likes`)
      const likeProject = response.data.likes
      const likeCount = likeProject.length

      if (!state.userId && this.$auth.loggedIn) {
        commit('setUserId', this.$auth.user.id)
      }
      commit('getLike', likeProject)
      commit('setLikeCount', likeCount)
    } catch (error) {
      console.error(error)
    }
  },

  // post like
  async likeProject ({ commit }, { projectId, isLiked }) {
    try {
      // Kirim permintaan untuk menyukai proyek
      console.log(isLiked, 'Likedata on likes')
      if (isLiked.length !== 0) {
        await this.$axios.$delete(
          `projects/${projectId}/likes/${isLiked[0].id}`
        )
      } else {
        await this.$axios.$post(`projects/${projectId}/likes`)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const getters = {
  // get like
  getLike: (state) => {
    return state.likes
  },
  likeCount (state) {
    return state.likeCount
  }
}
