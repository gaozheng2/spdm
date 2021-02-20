<template>
  <v-layout class="fill-height">
    <!-- 左侧导航树 -->
    <v-navigation-drawer
      v-if="drawer && !fullScreen"
      app
      width="260"
      class="elevation-1"
    >
      <!-- 系统信息 -->
      <template v-slot:prepend>
        <div class="d-flex pa-2 align-center">
          <img src="/images/v-logo-small.png" height="30" alt="logo" class="mr-1">
          <div>
            <div class="title font-weight-bold primary--text">{{ config.product.name }}</div>
            <!--            <div class="overline grey&#45;&#45;text">{{ config.product.version }}</div>-->
          </div>
        </div>
      </template>

      <v-divider></v-divider>

      <!-- 导航菜单 -->
      <main-menu :menu="menu"/>
    </v-navigation-drawer>

    <!-- 顶部工具条 -->
    <v-app-bar
      v-if="!fullScreen"
      app
      flat
      hide-on-scroll
      color="surface"
    >
      <v-card class="flex-grow-1 d-flex align-center px-1 mt-1" height="50">

        <!-- 【导航树切换按钮】 -->
        <v-app-bar-nav-icon

          :title="`${drawer ? '折叠' : '展开'}导航树（Ctrl+Q）`"
          @click.stop="drawer = !drawer"
        />

        <!-- 【面包屑】 -->
        <v-icon size="18" color="secondary" class="ml-3  mr-1">mdi-map-marker-radius</v-icon>
        <div class="body-2 grey--text">根节点&nbsp;&nbsp;>&nbsp;&nbsp;父节点&nbsp;&nbsp;>&nbsp;&nbsp;子节点</div>

        <v-spacer></v-spacer>

        <!-- 【搜索按钮】 -->
        <v-btn icon title="综合查询">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <!-- 【功能按钮】 -->
        <toolbar-function/>

        <!-- 【任务按钮】 -->
        <toolbar-notifications/>

        <!-- 【用户菜单】 -->
        <toolbar-user/>
      </v-card>
    </v-app-bar>

    <v-container fluid class="ma-0 px-2 pt-1 pb-2">

      <!-- <router-view></router-view> -->

      <!-- DEMO PURPOSES DEFAULT ROUTER VIEW -->
      <!--      <router-view v-if="!$route.name.includes('application-layout-layout')" class="fill-height"/>-->
      <!--      <div class="fill-height">-->
      <!--        <h1 class="text-h4">Dashboard</h1>-->
      <!--        <v-divider class="my-2"></v-divider>-->
      <!--        <div class="grey&#45;&#45;text">Example Content</div>-->
      <v-tabs background-color="transparent" class="pr-1">
        <v-tab class="subtitle-1">驾驶舱</v-tab>
        <v-tab class="subtitle-1">系统管理</v-tab>
        <v-tab class="subtitle-1">人员配置</v-tab>
        <v-spacer></v-spacer>
        <v-btn
          icon
          class="mt-1"
          :title="`${fullScreen ? '退出' : ''}全屏（Alt+Q）`"
          @click="fullScreen=!fullScreen"
        >
          <v-icon>{{ `mdi-${fullScreen ? 'fullscreen-exit' : 'pan'}` }}</v-icon>
        </v-btn>
      </v-tabs>
      <v-divider/>
      <Panel
        title="人员管理"
        icon="mdi-account-circle"
        panel-num="3"
        :is-fold="isFold[0]"
        @update-fold="onUpdateFold(0)"
      >
        <div style="height:200px">ddd</div>
      </Panel>

      <Panel
        title="系统管理"
        icon="mdi-account"
        panel-num="3"
        :is-fold="isFold[1]"
        @update-fold="onUpdateFold(1)"
      >
        <div style="height:200px">是是是</div>
      </Panel>

      <Panel
        title="配置管理"
        icon="mdi-account"
        panel-num="3"
        :is-fold="isFold[2]"
        @update-fold="onUpdateFold(2)"
      >
        <div style="height:200px">是是是</div>
      </Panel>

    </v-container>
  </v-layout>
</template>

<script>
import config from '@/configs'
import MainMenu from '@/components/navigation/MainMenu'
import ToolbarUser from '@/components/toolbar/ToolbarUser'
import ToolbarNotifications from '@/components/toolbar/ToolbarNotifications'
// Demo menu content
import menu from './menu'
import ToolbarFunction from '@/components/toolbar/ToolbarFunction'
import Panel from '@/components/common/Panel'

export default {
  components: {
    Panel,
    ToolbarFunction,
    MainMenu,
    ToolbarUser,
    ToolbarNotifications
  },
  data() {
    return {
      menu,
      config,
      drawer: true,
      fullScreen: false,
      isFold: [
        false,
        true,
        true
      ]
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
        _this.fullScreen = !_this.fullScreen
      }
    }
  },
  methods: {
    // 展开一个 Panel 时，折叠其他 Panel
    onUpdateFold(index) {
      const temp = !this.isFold[index]

      this.isFold = this.isFold.map(() => true)
      this.isFold[index] = temp
    }
  }
}
</script>