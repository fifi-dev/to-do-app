
<template>
  <div id="app">
    <TodoCard />
    <TodoList />

    <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered pb-5">
            <p>
              <strong>Atelier Mars 2021</strong>
            </p>
            <p>
              Découvrez comment styliser simplement votre ToDo list avec 
              <a class="has-text-primary" href="https://bulma.io/">
                <strong>Bulma</strong>
              </a> 
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoCard from './components/TodoCard.vue';

export default{
  name: 'App',
  components: {
    TodoCard,
    TodoList,
  }
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
</style>