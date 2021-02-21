<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template v-slot:activator="{ on }">
      <v-btn text class="pr-1" v-on="on">
        <v-avatar size="32" class="ml-n1 mr-1">
          <v-img src="/images/avatars/avatar1.svg"></v-img>
        </v-avatar>
        <span class="text-subtitle-2">管理员</span>
      </v-btn>
    </template>

    <Menu :menu="menu"/>
  </v-menu>
</template>

<script>
import Menu from '@/components/common/Menu'
import configs from '@/configs'

export default {
  components: { Menu },
  data() {
    return {
      menu: configs.menu.user
    }
  }
}
</script>
