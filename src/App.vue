<template lang="pug">
  #app
    .container
      main-header
      h1 Hello
</template>

<script>
import MainHeader from "./components/layout/Header.vue"

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style lang="sass">
@import "styles/main.sass"

</style>
