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
                    .input-btn(:class="{active: recurrent}")
                      input#recurrent(type="checkbox" v-model="recurrent")
                      label.input-btn__label(for="recurrent")
                        .input-btn__icon.btn--square-rounded.btn--gray
                          font-awesome-icon(icon="redo")
                        | Récurrent
                  .form-group
                    .input-btn(:class="{active: marked}")
                      input#marked(type="checkbox" v-model="marked")
                      label.input-btn__label(for="marked")
                        .input-btn__icon.btn--square-rounded.btn--gray
                          font-awesome-icon(icon="thumbtack")
                        | Epinglé
                  .form-group
                    .input-btn(:class="{active: priority}")
                      input#priority(type="checkbox" v-model="priority")
                      label.input-btn__label(for="priority")
                        .input-btn__icon.btn--square-rounded.btn--danger
                          font-awesome-icon(icon="exclamation")
                        | Prioritaire
                  .form-group
                    .input-btn(:class="{active: team}")
                      input#team(type="checkbox" v-model="team")
                      label.input-btn__label(for="team")
                        .input-btn__icon.btn--square-rounded.btn--image
                          img(src="./assets/luc.jpg")
                        | En équipe
                  .form-group
                    input.btn.btn--rounded.btn--block.btn--primary(type="submit" value="Add task" ref="submitButton")

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
      this.$refs.submitButton.blur()
    }
  }
}
</script>

<style lang="sass">
@import "styles/main.sass"

</style>
