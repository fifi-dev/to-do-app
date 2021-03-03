<template>
  <form class="is-flex" @submit.prevent="addTodo()">
    <input
      v-model="newTodo"
      type="text"
      class="input is-primary"
      placeholder="Create a new to-do..."
    />
    <i  class="fas fa-plus-circle form-control"></i>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length > 0) {
        this.$emit("on-new-todo", this.newTodo);
      }
      this.newTodo = "";
    }
  }
};
</script>

<style scoped></style>