<template>
  <transition
    enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeOutLeft"
  >
    <keep-alive>
      <v-navigation-drawer
        v-if="drawer && !$store.state.app.fullScreen"
        app
        mobile-breakpoint="800"
        width="260"
        class="menuTree"
        :class="{'elevation-1' : layout.treeElevation}"
        :clipped="layout.treeClip"
        style="overflow-y:hidden;"
      >
        <!-- 系统 Logo -->
        <TreeLogo v-if="!layout.treeClip"/>
        <v-divider v-if="!layout.treeClip"/>

        <!-- 收藏夹按钮和搜索框 -->
        <TreeSearch :is-star.sync="isStar" :search-value.sync="searchValue"/>
        <v-divider/>

        <!-- 收藏夹 | 型号树和产品树 -->
        <transition
          :enter-active-class="`animate__animated animate__slideIn${isStar ? 'Right' : 'Left'}`"
          :leave-active-class="`animate__animated animate__slideOut${isStar ? 'Left' : 'Right'}`"
          mode="out-in"
        >
          <keep-alive>
            <component :is="isStar ? 'TreeStar' : 'TreeNav'"></component>
          </keep-alive>
        </transition>

      </v-navigation-drawer>
    </keep-alive>
  </transition>
</template>

<script>
import TreeLogo from '@/components/tree/TreeLogo'
import TreeSearch from '@/components/tree/TreeSearch'

export default {
  components: {
    TreeLogo,
    TreeSearch,
    TreeStar: () => import('@/components/tree/TreeStar'),
    TreeNav: () => import('@/components/tree/TreeNav')
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

<style lang="scss" scoped>
.animate__animated.animate__slideInRight,
.animate__animated.animate__slideInLeft,
.animate__animated.animate__slideOutRight,
.animate__animated.animate__slideOutLeft {
  --animate-duration: 0.1s;
}
</style>
