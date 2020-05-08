<template lang="pug">
  active-item
    header.main-header(:class="{active: active}" slot-scope="{ setActive, active }")
      button.toggler.main-header__toggler(:class="{active: active}" @click.prevent="setActive(!active)")
        span
        span
        span
        span

      .main-header__backdrop(@click.prevent="setActive(false)")
      .main-header__menu
        nav
          ul
            li
              a.main-header__link.active(href="#")
                font-awesome-icon(icon="list")
            li
              a.main-header__link(href="#")
                font-awesome-icon(icon="calendar")
            li
              a.main-header__link(href="#")
                font-awesome-icon(icon="star")

        nav.main-header__nav-right
          ul
            li
              a.main-header__link.active(href="#")
                | Tasks
            li
              a.main-header__link(href="#")
                | Archive

          ul.main-header__separator
            li
              a.main-header__link(href="#")
                font-awesome-icon(icon="sliders-h")
            li
              a.main-header__link(href="#")
                font-awesome-icon(icon="search")

</template>

<script>
import ActiveItem from "./../utilities/ActiveItem"

export default {
  name: "Header",
  components: {
    ActiveItem
  }
};
</script>