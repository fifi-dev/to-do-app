<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>{{ listName }}</h1>
      </div>
    </div>
    <div class="row mb-3">
      <NewTodo @on-new-todo="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <TodoList
            v-for="(todo, index) in todos"
            :key="index"
            :name="todo.name"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import NewTodo from "./NewTodo.vue";
export default {
  props: {
    listName: String,
  },
  data() {
    return {
      todos: [
        { name: "penser à planifier les vacances", completed: false },
        { name: "planifier mon loyer", completed: false },
        { name: "mission ikea", completed: false },
        { name: "aller au cours d'aqua boxing", completed: false },
        { name: "Penser à récupérer mes vetements au pressing", completed: false },
      ],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ name: newTodo, completed: false });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
    },
  },
  components: { TodoList, NewTodo },
};
</script>

<style scoped></style>