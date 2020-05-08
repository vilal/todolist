<template lang="pug">
  #app
    .container
      main-header
      h1 Todo

      todo-list(:todos="todos")

      div
        font-awesome-icon(icon="plus")
        span Ajouter une tâche

</template>

<script>
import MainHeader from "./components/layout/Header.vue"
import TodoList from "./components/todo/TodoList.vue"
import datas from './datas/todos.json'

export default {
  name: 'App',
  components: {
    MainHeader,
    TodoList,
  },
  data() {
    return {
      todos: datas
    }
  }
}
</script>

<style lang="sass">
@import "styles/main.sass"

</style>
