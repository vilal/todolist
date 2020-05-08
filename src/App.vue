<template lang="pug">
  #app
    .container
      main-header
      h1 Todo

      todo-list(:todos="todos")

      div
        font-awesome-icon(icon="plus")
        span Add a task

      form(@submit.prevent="addTodo")
        label Titre
        input(type="text" v-model="title")
        label Description
        input(type="text" v-model="description")
        label Durée
        input(type="text" v-model="duration")
        input(type="checkbox" v-model="recurrent")
        label Récurrent
        input(type="checkbox" v-model="marked")
        label Epinglé
        input(type="checkbox" v-model="priority")
        label Prioritaire
        input(type="checkbox" v-model="team")
        label En équipe
        input(type="submit" value="Envoyer")

</template>

<script>
import MainHeader from "./components/layout/Header.vue"
import TodoList from "./components/todo/TodoList.vue"
import datas from './datas/todos.json'

export default {
  components: {
    MainHeader,
    TodoList,
  },
  data() {
    return {
      todos: datas,
      title: '',
      description: '',
      duration: '',
      recurrent: false,
      marked: false,
      priority: false,
      team: false,
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.title,
        description: this.description,
        duration: this.duration,
        recurrent: this.recurrent,
        marked: this.marked,
        priority: this.priority,
        team: this.team
      }).then(
        this.initForm()
      )
    },
    initForm() {
      this.title = ''
      this.description = ''
      this.duration = ''
      this.recurrent = false
      this.marked = false
      this.priority = false
      this.team = false
    }
  }
}
</script>

<style lang="sass">
@import "styles/main.sass"

</style>
