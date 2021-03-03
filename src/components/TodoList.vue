
<template>
 <div>
      <h3>Todoitem</h3>
      <ul>
          <li>
              <label class="checkbox">
                  <input type="checkbox">
                  Penser à récuperer mes vetements au pressing
                </label>
                <i class="fas fa-trash"></i>
          </li>
      </ul>
  </div>
</template>

<script>

export default{

  };

/*
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello, et bienvenue sur la demo TodoList en Vue.js!'
    }
  }
}
*/
</script>

<style>
.fa-trash{
    margin-left: 80px;
}
</style>