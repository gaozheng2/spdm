<template>
  <v-navigation-drawer
    v-if="drawer && !fullScreen"
    app
    width="260"
    class="elevation-1"
  >
    <!-- 系统信息 -->
    <template v-slot:prepend>
      <div class="d-flex pa-2 align-center">
        <img src="/images/v-logo-small.png" height="30" alt="logo" class="mr-1">
        <div>
          <div class="title font-weight-bold primary--text">{{ config.product.name }}</div>
          <!--          <div class="overline grey&#45;&#45;text">{{ config.product.version }}</div>-->
        </div>
      </div>
    </template>

    <v-divider></v-divider>

    <!-- 导航菜单 -->
    <main-menu :menu="menu"/>
  </v-navigation-drawer>
</template>

<script>
import MainMenu from '@/components/navigation/MainMenu'
import config from '@/configs/'
import menu from '@/layouts/menu'

export default {
  components: {
    MainMenu
  },
  props: {
    fullScreen: {
      type: Boolean,
      default: false
    },
    drawer: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      config,
      menu
    }
  }
}
</script>
