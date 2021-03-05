
<template>
  <div id="app">
    <section class="hero is-warning is-bold is-fullheight">
      <div class="hero-body">
        <TodoCard />
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered pb-5">
            <p>
              <strong>© Fideline Bazana NTOMO ©</strong>
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
    </section>
  </div>
</template>

<script>
import TodoCard from './components/TodoCard.vue';

export default{
  name: 'App',
  components: {
    TodoCard,
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