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

      <!-- 收藏夹按钮和搜索框 -->
      <div class="d-flex align-center px-1" style="height: 48px">
        <v-btn icon large style="z-index: 1" @click="isStar = !isStar">
          <v-icon :color="isStar ? 'primary' : ''">
            {{ isStar ? 'mdi-star' : 'mdi-star-outline' }}
          </v-icon>
        </v-btn>
        <div class="text-subtitle-2 ml-1">{{ isStar ? '收藏夹' : '' }}</div>

        <v-text-field
          v-if="!isStar"
          ref="search"
          class="ml-n2"
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          hide-details
          solo
          flat
          clearable
          clear-icon="mdi-close"
        />
      </div>
      <v-divider/>

      <!-- 收藏夹 -->
      <div v-if="isStar">

      </div>

      <!-- 导航菜单 -->
      <template v-if="!isStar">
        <main-menu/>
        <button @click="$store.commit('app/setNodeType','root')">root1</button>
        <button @click="$store.commit('app/setNodeType','root2')">root2</button>
      </template>
    </v-navigation-drawer>
  </transition>
</template>

<script>
import TreeLogo from '@/components/tree/TreeLogo'
import MainMenu from '@/components/navigation/MainMenu'

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
    }
  },
  data() {
    return {
      isStar: false // 是否打开收藏夹
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
