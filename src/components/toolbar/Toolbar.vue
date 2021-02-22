<template>
  <transition name="fade">
    <v-app-bar
      v-if="!fullScreen"
      app
      flat
      :class="{'app-bar-full' : !layout.titleFloat, line: layout.titleLine}"
      :color="layout.titleColor"
      :clipped-left="layout.treeClip"
      :height="layout.titleHeight"
    >
      <v-card
        class="flex-grow-1 d-flex align-center px-1"
        :flat="!layout.titleFloat"
        :tile="!layout.titleFloat"
        :color="layout.cardColor"
        :height="layout.cardHeight"
      >

        <!-- 【导航树切换按钮】 -->
        <v-app-bar-nav-icon
          :title="`${drawer ? '折叠' : '展开'}导航树（Ctrl+Q）`"
          @click.stop="$emit('update:drawer', !drawer)"
        />

        <!-- 系统 Logo -->
        <TreeLogo v-if="layout.treeClip"/>

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
import config from '@/configs'
import TreeLogo from '@/components/tree/TreeLogo'

export default {
  components: {
    TreeLogo,
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
  computed: {
    layout() {
      return config.layout[this.$store.state.app.layout]
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

.app-bar-full {
  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 0;
  }
}

.line {
  margin-bottom: 0;

  .v-toolbar__content {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
