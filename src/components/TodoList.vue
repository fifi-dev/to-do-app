<template>
  <li class=" is-flex">
    <form
      class="btn border-0 flex-grow-1 text-left shadow-none "
      :class="{ completed }"
      @click="$emit('on-toggle')"
      v-if="!isEditing"
    >
    <i class="far fa-circle"></i>
      <span>{{ name }}</span>
    </form>
    <button @click="$emit('on-delete')" class="btn btn-outline-danger border-0">
      <i class="fas fa-trash"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    completed: Boolean
  },
};
</script>

<style scoped>

.completed {
  text-decoration: line-through;
}
button{
    border: none;
    background-color: transparent;
    margin-left: 80px;
    text-align: left;
}

.fa-trash{
    font-size: 20px;
}
</style>