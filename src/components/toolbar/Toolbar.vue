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
        <div class="d-none d-md-flex">
          <v-icon size="18" class="ml-2 mr-1">mdi-map-marker-radius</v-icon>
          <div class="body-2 grey--text" v-html="path">
          </div>
        </div>

        <v-spacer></v-spacer>

        <!-- 【搜索按钮】 -->
        <v-btn icon title="综合查询" href="/" target="spdm_single">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <!-- 【功能菜单按钮】 -->
        <toolbar-function/>

        <!-- 【任务按钮】 -->
        <toolbar-notifications/>

        <!-- 【用户菜单】 -->
        <toolbar-user @userInfo="dialogUserInfo=true" @logOut="logOut"/>

        <!-- 【切换主题按钮】 -->
        <v-btn v-if="false" icon style="margin-right: -6px" @click="$vuetify.theme.dark=!$vuetify.theme.dark">
          <v-icon>{{ $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-2' }}</v-icon>
        </v-btn>

        <v-dialog
          v-model="dialogUserInfo"
          width="500"
        >
          <v-card>
            <v-card-title class="headline grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id
              est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="dialogUserInfo = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-app-bar>
  </transition>
</template>

<script>
import ToolbarFunction from '@/components/toolbar/ToolbarFunction'
import ToolbarNotifications from '@/components/toolbar/ToolbarNotifications'
import ToolbarUser from '@/components/toolbar/ToolbarUser'

export default {
  components: {
    ToolbarFunction,
    ToolbarNotifications,
    ToolbarUser
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
      path: '主页&ensp;>&ensp;父节点&ensp;>&ensp;子节点', // 面包屑路径
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
