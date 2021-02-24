<template>
  <transition name="fade" mode="out-in">
    <v-navigation-drawer
      v-if="drawer && !$store.state.app.fullScreen"
      app
      mobile-breakpoint="800"
      width="260"
      class="panel"
      :class="{'elevation-1' : layout.treeElevation}"
      :clipped="layout.treeClip"
    >
      <!-- 系统 Logo -->
      <TreeLogo v-if="!layout.treeClip"/>
      <v-divider v-if="!layout.treeClip"/>

      <!-- 收藏夹按钮和搜索框 -->
      <TreeSearch :is-star.sync="isStar" :search-value.sync="searchValue"/>
      <v-divider/>

      <!-- 收藏夹 -->
      <TreeStar :is-star="isStar"/>

      <!-- 型号树 -->
      <div v-if="!isStar" class="flex-grow-1" style="border: 1px solid red"></div>

      <!-- 产品树 -->
      <div v-if="!isStar" style="height: 400px;border: 1px solid blue"/>

      <div v-if="false">
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
import TreeSearch from '@/components/tree/TreeSearch'

export default {
  components: {
    TreeSearch,
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
