import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faList,
  faCalendar,
  faStar,
  faSearch,
  faSlidersH,
  faRedo,
  faThumbtack,
  faExclamation
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(
  faList,
  faCalendar,
  faStar,
  faSearch,
  faSlidersH,
  faRedo,
  faThumbtack,
  faExclamation
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
