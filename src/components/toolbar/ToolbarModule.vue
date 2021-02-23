<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        title="功能菜单"
        color="primary"
        v-on="on"
      >
        <v-icon>mdi-view-grid-outline</v-icon>
      </v-btn>
    </template>

    <Menu :menu="menu"/>
  </v-menu>
</template>

<script>
import Menu from '@/components/common/Menu'

export default {
  components: { Menu },
  data() {
    return {
      menu: this.$configs.menu.moduleMenu
    }
  }
}
</script>
