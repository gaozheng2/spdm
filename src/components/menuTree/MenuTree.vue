<template>
  <transition name="fade" mode="out-in">
    <v-navigation-drawer
      v-if="drawer && !fullScreen"
      app
      mobile-breakpoint="800"
      width="260"
      class="elevation-1"
    >
      <!-- 系统信息 -->
      <template v-slot:prepend>
        <div class="d-flex pa-2 align-center">
          <!--          <img src="/images/v-logo-small.png" height="40" alt="logo" class="mr-1">-->
          <img :src="require('@/assets/images/logo.png')" height="30" alt="logo" class="mr-1">
          <div>
            <!--            <div class="text-h6 primary&#45;&#45;text">{{ config.product.name }}</div>-->
            <div class="text-h6" style="color: #005bac">{{ config.product.name }}</div>
            <!--            <div class="overline grey&#45;&#45;text">{{ config.product.version }}</div>-->
          </div>
        </div>
      </template>

      <v-divider></v-divider>

      <!-- 导航菜单 -->
      <main-menu :menu="menu"/>
      <button @click="$emit('update:node-type','root')">root1</button>
      <button @click="$emit('update:node-type','root2')">root2</button>
    </v-navigation-drawer>
  </transition>
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
    },
    nodeType: {
      type: String,
      default: 'root'
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

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}

.fade-enter, .fade-leave-to {
  left: -300px;
}
</style>
