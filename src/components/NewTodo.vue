<template>
  <form class="newtodo is-flex" @submit.prevent="addTodo()">
    <input
      v-model="newTodo"
      type="text"
      placeholder="Nouvelle tache..."
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
  border-bottom: 2px solid #00FA9A;
  text-align: center;
  color: rgba(143, 138, 138, 0.671);
  font-family: 'Righteous', cursive;
}

input:focus{
  border: 2px solid #00FA9A;
}

.fa-plus-circle{
  font-size: 32px;
  margin-left: 50px;
  color: #00FA9A;
}
</style>