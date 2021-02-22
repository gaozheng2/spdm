<template>
  <v-layout>
    <!-- 顶部工具条 -->
    <Toolbar :full-screen="fullScreen" :drawer.sync="drawer"/>

    <!-- 【系统 ... 按钮】全屏时浮动显示在右上角 -->
    <toolbar-dot v-if="$store.state.app.fullScreen" fab/>

    <!-- 左侧导航树 -->
    <MenuTree :full-screen="fullScreen" :drawer="drawer" :node-type.sync="nodeType"/>

    <!-- 页面主体 选项卡 -->
    <v-container fluid class="px-2 pt-0 pb-2 container" :style="{height: containerHeight}">
      <Tabs :node-type="nodeType"/>
    </v-container>
  </v-layout>
</template>

<script>
import Toolbar from '@/components/toolbar/Toolbar'
import MenuTree from '@/components/menuTree/MenuTree'
import Tabs from '@/components/common/Tabs'
import ToolbarDot from '@/components/toolbar/ToolbarDot'

export default {
  components: {
    ToolbarDot,
    Tabs,
    MenuTree,
    Toolbar
  },
  data() {
    return {
      drawer: true, // 是否显示导航树
      nodeType: 'root' // 导航树点击的节点类型
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
//.container {
//  background-image: url("~@/assets/images/background01.png");
//  background-size: 500px 500px;
//  background-position: center center;
//}
</style>
