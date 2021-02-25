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
      <v-container fluid class="fill-screen py-0 pl-2 pr-1" :class="{'mt-n1' : layout.panelUp && !fullScreen}">
        <Tabs/>
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

<style lang="scss">
// 高度填充屏幕
.fill-screen {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
}

.v-navigation-drawer__content,
.v-main__wrap,
.v-window__container {
  @extend .fill-screen;
}

// 输入框高度和图标大小
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 40px;
}

.v-text-field input {
  margin-bottom: -1px;
}

.v-icon.v-icon {
  font-size: 20px;
}

// 列表项目高度
.v-list-item--dense, .v-list--dense .v-list-item {
  min-height: 34px;
}

.v-list-item--dense .v-list-item__icon, .v-list--dense .v-list-item .v-list-item__icon {
  margin-top: 0;
  margin-bottom: 0;
}

// 树项目高度
.menuTree {
  .v-treeview-node__root {
    min-height: 34px;
  }

  .v-treeview-node__toggle {
    width: 16px;
    height: 16px;
    margin-right: 0;
  }

  .v-treeview-node__level {
    width: 16px;
  }

  .v-treeview-node__content {
    margin-left: 6px;

  }

  .v-treeview-node__label {
    margin-left: -8px;
  }
}
</style>
