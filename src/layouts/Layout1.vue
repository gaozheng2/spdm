<template>
  <v-app>
    <!-- 顶部工具条 -->
    <Toolbar :full-screen="fullScreen" :drawer.sync="drawer"/>

    <!-- 【系统 ... 按钮】全屏时浮动显示在右上角 -->
    <ToolbarDot v-if="$store.state.app.fullScreen" fab/>

    <!-- 左侧导航树 -->
    <MenuTree :full-screen="fullScreen" :drawer="drawer" :node-type.sync="nodeType"/>

    <!-- 页面主体 选项卡 -->
    <v-main>
      <v-container fluid class="px-2 pt-0 pb-2">
        <Tabs :node-type="nodeType"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from '@/components/toolbar/Toolbar'
import ToolbarDot from '@/components/toolbar/ToolbarDot'
import MenuTree from '@/components/tree/Tree'
import Tabs from '@/components/common/Tabs'

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