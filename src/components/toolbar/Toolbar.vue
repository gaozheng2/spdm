<template>
  <transition name="fade">
    <v-app-bar v-if="!fullScreen" app flat color="surface">
      <v-card class="flex-grow-1 d-flex align-center px-1 mt-1" height="50">

        <!-- 【导航树切换按钮】 -->
        <v-app-bar-nav-icon
          :title="`${drawer ? '折叠' : '展开'}导航树（Ctrl+Q）`"
          @click.stop="$emit('update:drawer', !drawer)"
        />

        <!-- 【面包屑】 屏幕过小时隐藏  -->
        <ToolbarPath/>

        <v-spacer></v-spacer>

        <!-- 【搜索按钮】 -->
        <v-btn icon title="综合查询" href="/" target="spdm_single">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <!-- 【功能菜单按钮】 -->
        <toolbar-module/>

        <!-- 【任务按钮】 -->
        <toolbar-notifications/>

        <!-- 【用户菜单】 -->
        <toolbar-user @userInfo="dialogUserInfo=true" @logOut="logOut"/>

        <!-- 【系统 ... 按钮】 -->
        <toolbar-dot/>

        <!--  【用户信息对话框】  -->
        <v-dialog v-model="dialogUserInfo" width="500">
          <UserInfoDialog/>
        </v-dialog>
      </v-card>
    </v-app-bar>
  </transition>
</template>

<script>
import ToolbarModule from '@/components/toolbar/ToolbarModule'
import ToolbarNotifications from '@/components/toolbar/ToolbarNotifications'
import ToolbarUser from '@/components/toolbar/ToolbarUser'
import UserInfoDialog from '@/components/dialog/UserInfoDialog'
import ToolbarDot from '@/components/toolbar/ToolbarDot'
import ToolbarPath from '@/components/toolbar/ToolbarPath'

export default {
  components: {
    ToolbarPath,
    ToolbarDot,
    ToolbarModule,
    ToolbarNotifications,
    ToolbarUser,
    UserInfoDialog
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
      dialogUserInfo: false // 打开用户信息对话框
    }
  },
  methods: {
    logOut() {
      // TODO
      alert('退出系统')
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
