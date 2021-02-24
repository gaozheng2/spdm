<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template v-slot:activator="{ on }">
      <v-btn text class="px-1 ml-1" title="用户菜单" v-on="on">
        <v-avatar size="30" class="mr-1">
          <v-img src="/images/avatars/avatar1.svg"></v-img>
        </v-avatar>
        <span class="text-h2">管理员</span>
      </v-btn>
    </template>

    <Menu :menu="menu" @userInfo="$emit('userInfo')" @logOut="$emit('logOut')"/>

  </v-menu>
</template>

<script>
import Menu from '@/components/common/Menu'

export default {
  components: { Menu },
  data() {
    return {
      menu: this.$configs.menu.userMenu
    }
  }
}
</script>
