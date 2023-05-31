export const state = () => ({
  todolist: []
})

export const actions = {
  async postTodolist (state, data) {
    try {
      return await this.$axios.$post('todolist', data)
    } catch (err) {
      return err.response
    }
  },
  async getTodolist ({ commit }, params) {
    try {
      const response = await this.$axios.$get(`todolist?project_id=${params}`)
      commit('SET_TODOLIST', response.data)
    } catch (err) {
      if (err.response.status !== 200) {
        commit('SET_TODOLIST', [])
      }
    }
  },
  async deleteTodolist ({ commit }, params) {
    try {
      return await this.$axios.$delete(`todolist/${params}`)
    } catch (err) {
      return err.response
    }
  },
  async pinTodolist ({ commit }, params) {
    try {
      console.log({ params })
      return await this.$axios.$put(`todolist/${params}`, { pinned: true })
    } catch (err) {
      return err.response
    }
  }
}

export const mutations = {
  SET_TODOLIST (state, data) {
    state.todolist = data
  }
}
