<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  >
    <v-app-bar
      v-if="!$store.state.app.fullScreen"
      app
      flat
      :class="{'app-bar-full' : !layout.titleFloat, 'line': layout.titleLine}"
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
        <!-- 【导航树切换】按钮 -->
        <v-app-bar-nav-icon
          :title="`${drawer ? '折叠' : '展开'}导航树（Ctrl+Q）`"
          @click.stop="$emit('update:drawer', !drawer)"
        />

        <!-- 【系统 Logo】 -->
        <TreeLogo v-if="layout.treeClip"/>

        <!-- 【面包屑】屏幕过小时隐藏  -->
        <ToolbarPath/>

        <v-spacer></v-spacer>

        <!-- 【综合查询】按钮 -->
        <v-hover v-slot="{ hover }">
          <v-btn
            icon
            title="综合查询"
            :color="hover ? 'primary' : ''"
            href="/"
            target="spdm_single"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-hover>

        <!-- 【功能菜单】按钮 -->
        <toolbar-module/>

        <!-- 【我的任务】按钮 -->
        <toolbar-notifications/>

        <!-- 【用户菜单】按钮 -->
        <toolbar-user @userInfo="dialogUserInfo=true" @logOut="logOut"/>

        <!-- 【系统 ...】按钮 -->
        <toolbar-dot/>

        <!--  【用户信息】对话框  -->
        <v-dialog v-model="dialogUserInfo" width="400">
          <DialogUserInfo/>
        </v-dialog>

        <!--  【确定退出】对话框  -->
        <v-dialog v-model="dialogLogout" width="250">
          <DialogConfirm
            content="确定退出系统？"
            @cancel="dialogLogout = false"
            @ok="confirmLogout"
          />
        </v-dialog>
      </v-card>
      <v-divider v-if="layout.titleLine"/>
    </v-app-bar>
  </transition>
</template>

<script>
import TreeLogo from '@/components/tree/TreeLogo'
import ToolbarPath from '@/components/toolbar/ToolbarPath'
import ToolbarModule from '@/components/toolbar/ToolbarModule'
import ToolbarNotifications from '@/components/toolbar/ToolbarNotifications'
import ToolbarUser from '@/components/toolbar/ToolbarUser'
import ToolbarDot from '@/components/toolbar/ToolbarDot'
import DialogUserInfo from '@/components/dialog/DialogUserInfo'
import DialogConfirm from '@/components/dialog/DialogConfirm'

export default {
  components: {
    DialogConfirm,
    TreeLogo,
    ToolbarPath,
    ToolbarModule,
    ToolbarNotifications,
    ToolbarUser,
    ToolbarDot,
    DialogUserInfo
  },
  props: {
    drawer: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialogUserInfo: false, // 打开用户信息对话框
      dialogLogout: false // 打开确认退出对话框
    }
  },
  computed: {
    layout() {
      return this.$configs.layout[this.$store.state.app.layout]
    }
  },
  methods: {
    logOut() {
      // TODO
      this.dialogLogout = true
    },
    confirmLogout() {
      // TODO
      this.dialogLogout = false
      alert('退出系统')
    }
  }
}
</script>

<style lang="scss">
.app-bar-full {
  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 0;
  }
}

.line { // title 占满顶部时，显示下边框的细线
  .v-toolbar__content {
    display: block;
  }
}
</style>
