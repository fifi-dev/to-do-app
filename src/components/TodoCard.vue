<template>
  <div class="card">
    <div class="header is-flex">
      <span>{{ date }}</span>
      <h1>{{ listName }}</h1>
      <span>{{ todos.length }} taches</span>
    </div>
    <div class="row mb-3">
      <NewTodo @on-new-todo="addTodo($event)" />
    </div>
    <div class="row">
        <ul class="list-group">
          <TodoList
            v-for="(todo, index) in todos"
            :key="index"
            :name="todo.name"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
          />
        </ul>
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import NewTodo from "./NewTodo.vue";
export default {
  data() {
    return {
      listName : "Vue.JS Todo List",
      date: new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full'}).format(),
      todos: [],
    };
  },

  methods: {
    //ajouter une tache
    addTodo(newTodo) {
      this.todos.push({ name: newTodo, completed: false });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    //supprimer une tache
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
    },
  },
  components: { TodoList, NewTodo },

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
.card{
  width: 800px;
  overflow: hidden;
  background-color: white;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 5px 5px 0px rgba(128, 128, 128, .4);
}

.header{
  margin: 20px 0px;
  padding: 10px 0px;
  border-bottom: 2px solid rgba(128, 128, 128, .3);
  justify-content: space-between;
  font-family: 'Righteous', cursive;
}

.header span{
 margin: 0px 10px;
}

h1{
font-weight: bold;
}
</style>