<template>
  <v-list nav dense>
    <div v-for="(item, index) in menu" :key="index">
      <div v-if="item.text" class="pa-1 mt-2 overline">{{ item.text }}</div>
      <nav-menu :menu="item.items"/>
    </div>
  </v-list>
</template>

<script>
import NavMenu from './NavMenu'
import menu from './menu'

export default {
  components: {
    NavMenu
  },
  data() {
    return {
      menu
    }
  }
}
</script>
