<template>
  <transition name="fade" mode="out-in">
    <v-navigation-drawer
      v-if="drawer && !fullScreen"
      app
      mobile-breakpoint="800"
      width="260"
      :class="{'elevation-1' : layout.treeElevation}"
      :clipped="layout.treeClip"
    >
      <!-- 系统 Logo -->
      <TreeLogo v-if="!layout.treeClip"/>
      <v-divider v-if="!layout.treeClip"/>

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
import menu from '@/components/tree/menu'
import TreeLogo from '@/components/tree/TreeLogo'

export default {
  components: {
    TreeLogo,
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
  },
  computed: {
    layout() {
      return config.layout[this.$store.state.app.layout]
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
