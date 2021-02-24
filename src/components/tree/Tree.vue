<template>
  <transition name="fade" mode="out-in">
    <v-navigation-drawer
      v-if="drawer && !$store.state.app.fullScreen"
      app
      mobile-breakpoint="800"
      width="260"
      :class="{'elevation-1' : layout.treeElevation}"
      :clipped="layout.treeClip"
    >
      <!-- 系统 Logo -->
      <TreeLogo v-if="!layout.treeClip"/>
      <v-divider v-if="!layout.treeClip"/>

      <!-- 收藏夹和搜索框 -->
      <TreeStar :is-star.sync="isStar" :search-value.sync="searchValue"/>

      <!-- 导航菜单 -->
      <div v-if="!isStar">
        <main-menu/>
        <button @click="$store.commit('app/setNodeType','root')">root1</button>
        <button @click="$store.commit('app/setNodeType','root2')">root2</button>
      </div>
    </v-navigation-drawer>
  </transition>
</template>

<script>
import TreeLogo from '@/components/tree/TreeLogo'
import MainMenu from '@/components/navigation/MainMenu'
import TreeStar from '@/components/tree/TreeStar'

export default {
  components: {
    TreeStar,
    TreeLogo,
    MainMenu
  },
  props: {
    drawer: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isStar: false, // 是否打开收藏夹
      searchValue: '' // 搜索内容
    }
  },
  computed: {
    layout() {
      return this.$configs.layout[this.$store.state.app.layout]
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
