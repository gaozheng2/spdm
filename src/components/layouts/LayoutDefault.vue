<template>
  <v-app>
    <!-- 顶部工具条 -->
    <Toolbar :drawer.sync="drawer"/>

    <!-- 【系统 ... 按钮】全屏时浮动显示在右上角 -->
    <ToolbarDot v-if="fullScreen" fab/>

    <!-- 左侧导航树 -->
    <MenuTree :drawer="drawer"/>

    <!-- 页面主体 选项卡 -->
    <v-main>
      <v-container fluid class="px-2 pt-0 pb-2" :class="{'mt-n1' : layout.panelUp && !fullScreen}">
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
    Toolbar,
    ToolbarDot,
    MenuTree,
    Tabs
  },
  data() {
    return {
      drawer: true // 是否显示导航树
    }
  },
  computed: {
    fullScreen() {
      return this.$store.state.app.fullScreen
    },
    layout() {
      return this.$configs.layout[this.$store.state.app.layout]
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
