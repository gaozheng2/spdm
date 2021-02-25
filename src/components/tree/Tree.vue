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
      <TreeProjects v-if="!isStar"/>

      <!-- 产品树 -->
      <template v-if="showSingTree && !isStar">
        <v-divider/>
        <div style="min-height: 30px" class="text-h2 ml-1 d-flex align-center">产品列表</div>
        <v-divider/>
        <!--        <div v-if="showSingTree" style="min-height: 50vh;border: 1px solid red"></div>-->

        <TreeProjects fix-height="50vh"/>
      </template>

    </v-navigation-drawer>
  </transition>
</template>

<script>
import TreeLogo from '@/components/tree/TreeLogo'
import TreeStar from '@/components/tree/TreeStar'
import TreeSearch from '@/components/tree/TreeSearch'
import TreeProjects from '@/components/tree/TreeProjects'

export default {
  components: {
    TreeLogo,
    TreeSearch,
    TreeStar,
    TreeProjects
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
    },
    showSingTree() { // 是否显示产品树
      const type = this.$store.state.app.nodeType
      const typeArr = ['stage', 'projectStage', 'part', 'sing']

      return typeArr.indexOf(type) > -1
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
