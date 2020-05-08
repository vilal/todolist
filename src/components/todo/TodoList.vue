<template lang="pug">
  ul
    li(v-for="todo in todos")
      todo-item(
        :recurrent="todo.recurrent"
        :marked="todo.marked"
        :priority="todo.priority"
        :team="todo.team"
        :title="todo.title"
        :description="todo.description"
        :duration="todo.duration"
      )

</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  components: { TodoItem },
  props: {
    todos: {
      type: [Object, Array],
      required: true
    }
  }
}
</script>
