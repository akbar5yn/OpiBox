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
  async likeProject ({ commit }, projectId) {
    try {
      // Kirim permintaan untuk menyukai proyek
      const response = await this.$axios.$post(`projects/${projectId}/likes`)
      // Perbarui data proyek yang disukai di state
      // const likeProject = response.data.likes.map(like => like.project_id)
      // const likeProject = response.data.likes.length
      if (response.data && response.data.likes) {
        const likeProject = response.data.likes.length
        commit('setLike', likeProject)
      } else {
        // Handle jika response.data.likes tidak ditemukan
        return 'data tidak ditemukan'
      }

      // commit('setLike', likeProject)
    } catch (error) {
      console.error(error)
    }
  },

  // dislike

  async disLike ({ commit, state }, projectId) {
    try {
      const response = await this.$axios.$get(`projects/${projectId}/likes`)

      if (response && response.data && response.data.likes) {
        const likes = response.data.likes
        const currentUserLike = likes.find(
          like => like.user_id === state.userId
        )

        if (currentUserLike) {
          const likeId = currentUserLike.id
          const deleteResponse = await this.$axios.$delete(
            `projects/${projectId}/likes/${likeId}`
          )

          if (
            deleteResponse &&
            deleteResponse.data &&
            deleteResponse.data.likes
          ) {
            const updatedLikes = deleteResponse.data.likes
            const disLike = updatedLikes.length
            commit('disLikeProject', disLike)
          } else {
            // Handle jika respons penghapusan like tidak sesuai
          }
        }
      } else {
        // Handle jika respons tidak sesuai atau properti likes tidak ditemukan
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
