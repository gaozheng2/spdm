<template>
  <v-list nav dense height="400" class="scroller">
    <div v-for="(item, index) in menu" :key="index">
      <div v-if="item.text" class="pa-1 mt-2 overline">{{ item.text }}</div>
      <nav-menu :menu="item.items"/>
    </div>
    ddddddddddddddddddddddddddddddddf的点点滴滴多多多多多多多多多多多
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
