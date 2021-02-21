<template>
  <v-layout class="fill-height">
    <!-- 左侧导航树 -->
    <MenuTree :full-screen="fullScreen" :drawer="drawer"/>

    <!-- 顶部工具条 -->
    <Toolbar :full-screen="fullScreen" :drawer.sync="drawer"/>

    <v-container fluid class="px-2 pt-0 pb-2 container" :style="{height: containerHeight}">
      <v-tabs v-if="true" background-color="transparent" class="pr-1 mb-n2">
        <v-tab class="text-subtitle-2">驾驶舱</v-tab>
        <v-tab class="text-subtitle-2">系统管理</v-tab>
        <v-tab class="text-subtitle-2">人员配置</v-tab>
        <v-spacer></v-spacer>
        <v-btn
          icon
          class="mt-1"
          :title="`${fullScreen ? '退出' : ''}全屏（Alt+Q）`"
          @click="$store.commit('app/setFullScreen')"
        >
          <v-icon>{{ `mdi-${fullScreen ? 'fullscreen-exit' : 'pan'}` }}</v-icon>
        </v-btn>
      </v-tabs>

      <DefaultPage/>

    </v-container>
  </v-layout>
</template>

<script>
import Toolbar from '@/components/toolbar/Toolbar'
import MenuTree from '@/components/menuTree/MenuTree'
import DefaultPage from '@/pages/DefaultPage'

export default {
  components: {
    DefaultPage,
    MenuTree,
    Toolbar
  },
  data() {
    return {
      drawer: true
    }
  },
  computed: {
    fullScreen() {
      return this.$store.state.app.fullScreen
    },
    containerHeight() {
      let h = 64

      if (this.fullScreen) {
        h = 0
      }

      return `calc(100vh - ${h}px)`
    }
  },
  // 监听导航树展开按键
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this
    let method = ''

    document.onkeydown = function (e) {
      if (e.key && e.key === 'q' && e.ctrlKey) {
        method = 'drawer'
      } else if (e.keyCode === 81 && e.ctrlKey) {
        method = 'drawer'
      } else if (e.key && e.key === 'q' && e.altKey) {
        method = 'fullScreen'
      } else if (e.keyCode === 81 && e.altKey) {
        method = 'fullScreen'
      } else {
        method = ''
      }
      if (method === 'drawer') {
        e.preventDefault() // 屏蔽浏览器快捷键
        _this.drawer = !_this.drawer
      } else if (method === 'fullScreen') {
        e.preventDefault()
        _this.$store.commit('app/setFullScreen')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-image: url("~@/assets/images/background01.png");
  background-size: 500px 500px;
  background-position: center center;
}
</style>
