<template lang="pug">
  .todo(:class="{'todo--inactive': done}")
    .todo__content
      font-awesome-icon.todo__toggler(:icon="['far', done ? 'check-square' : 'square']" @click="setDone(!done)")

      h2 {{ title }}

      .btn-group(v-if="recurrent || marked || priority || team")
        .btn--square-rounded.btn--gray(v-if="recurrent")
          font-awesome-icon(icon="redo")
        .btn--square-rounded.btn--gray(v-if="marked")
          font-awesome-icon(icon="thumbtack")
        .btn--square-rounded.btn--danger(v-if="priority")
          font-awesome-icon(icon="exclamation")
        .btn--square-rounded.btn--image(v-if="team")
          img(src="./../../assets/luc.jpg")

      p(v-if="description") {{ cutDescription }}

    time.todo__duration(v-if="duration") {{ cutDuration }}

</template>

<script>
export default {
  props: {
    recurrent: {
      type: Boolean,
      default: false
    },
    marked: {
      type: Boolean,
      default: false
    },
    priority: {
      type: Boolean,
      default: false
    },
    team: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: undefined
    },
    duration: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      done: false
    }
  },
  computed: {
    cutDescription() {
      return this.cutString(this.description, 20)
    },
    cutDuration() {
      return this.cutString(this.duration, 20)
    }
  },
  methods: {
    setDone(done) {
      this.done = done
    },
    cutString(string, maxLength) {
      if (string.length > maxLength){
        return string.slice(0, maxLength).concat("...")
      }
      else {
        return string
      }
    }
  }
}
</script>
