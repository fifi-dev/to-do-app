<template>
  <div class="cardContainer">
      <h3>TodoCard</h3>
      <NewTodo />
      <TodoList />
  </div>
</template>

<script>
import NewTodo from '@/components/NewTodo.vue';
import TodoList from '@/components/TodoList.vue';

export default {   
    components: {
    TodoList,
    NewTodo,
  }
};
</script>

<style scoped>
.cardContainer{
    margin: 10%;
}
</style>