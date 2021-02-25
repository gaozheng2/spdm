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
      <TreeStar v-if="isStar"/>

      <!-- 型号树 -->
      <TreeProjects v-show="!isStar" :tree-data="projectsData"/>

      <!-- 产品树 -->
      <TreeSings v-show="!isStar"/>

    </v-navigation-drawer>
  </transition>
</template>

<script>
import TreeLogo from '@/components/tree/TreeLogo'
import TreeStar from '@/components/tree/TreeStar'
import TreeSearch from '@/components/tree/TreeSearch'
import TreeProjects from '@/components/tree/TreeProjects'
import TreeSings from '@/components/tree/TreeSings'
import projectsData from '@/mocks/projects'

export default {
  components: {
    TreeLogo,
    TreeSearch,
    TreeStar,
    TreeProjects,
    TreeSings
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
      searchValue: '', // 搜索内容
      projectsData
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
