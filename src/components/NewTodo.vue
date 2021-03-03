<template>
  <div class="is-flex">
    <input class="input is-primary" type="text" placeholder="Primary input" v-model="newTodo"> 
   <i class="fas fa-plus-circle "></i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fa-plus-circle{
    color: green;
    font-size: 32px;
    margin-left: 10px;
}
</style>