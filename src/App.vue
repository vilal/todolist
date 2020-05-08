<template lang="pug">
  #app
    .container
      main-header
      .main-wrapper
        h1 Todo

        todo-list(:todos="todos")

        active-item
          .collapsible-form(slot-scope="{ setActive, active }" )
            button.btn.collapsible-form__toggler(:class="{active: active}" @click="setActive(!active)")
              .btn--gray-light.btn--square-rounded
                font-awesome-icon(:icon="active ? 'minus' : 'plus'")
              span.h2 Add a task

            collapse-transition
              .card(v-show="active")
                form(@submit.prevent="addTodo")
                  .form-group
                    label.form-label Titre
                    input.form-control(type="text" v-model="title")
                  .form-group
                    label.form-label Description
                    textarea.form-control(type="text" v-model="description")
                  .form-group
                    label.form-label Durée
                    input.form-control(type="text" v-model="duration")
                  .form-group
                    input#recurrent(type="checkbox" v-model="recurrent")
                    label(for="recurrent") Récurrent
                  .form-group
                    input#marked(type="checkbox" v-model="marked")
                    label(for="marked") Epinglé
                  .form-group
                    input#priority(type="checkbox" v-model="priority")
                    label(for="priority") Prioritaire
                  .form-group
                    input#team(type="checkbox" v-model="team")
                    label(for="team") En équipe
                  .form-group
                    input.btn.btn--rounded.btn--block.btn--primary(type="submit" value="Envoyer")

</template>

<script>
import MainHeader from "./components/layout/Header.vue"
import TodoList from "./components/todo/TodoList.vue"
import datas from './datas/todos.json'
import ActiveItem from './components/utilities/ActiveItem.vue'
import {CollapseTransition} from 'vue2-transitions'

export default {
  components: {
    MainHeader,
    TodoList,
    ActiveItem,
    CollapseTransition
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
