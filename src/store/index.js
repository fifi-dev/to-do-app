import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[
      {
        id: 1,
        title: "One",
      },
      {
        id: 1,
        title: "two",
      },
      {
        id: 1,
        title: "three",
      },
      {
        id: 1,
        title: "four",
      },
      {
        id: 1,
        title: "five",
      }
    ]
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({ commit }, todo){
      commit("add_todo", todo);
    }
  },
  mutations: {
    add_todo(state,todo){
      state.todo.push(todo);
      console.log(state.todos)
    }
  },
  modules: {
  }
})
