<template>
  <form class="newtodo is-flex" @submit.prevent="addTodo()">
    <input
      v-model="newTodo"
      type="text"
      placeholder="Create a new to-do..."
    />
    <i  @click="addTodo()" class="fas fa-plus-circle form-control"></i>
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

<style scoped>
.newtodo{
  text-align: center;
  width: 290px;
  overflow: hidden;
  margin: 10px auto;
}
input{
  width: 200px;
  border: none;
  border-bottom: 2px solid green;
  text-align: center;
}

.fa-plus-circle{
  font-size: 32px;
  margin-left: 50px;
  color: green;
}
</style>