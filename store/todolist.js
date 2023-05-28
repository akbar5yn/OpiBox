export const actions = {
  async postTodolist (state, data) {
    try {
      return await this.$axios.$post('todolist', data)
    } catch (err) {
      return err.response
    }
  }
}
