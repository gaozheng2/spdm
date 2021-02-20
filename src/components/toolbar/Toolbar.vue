<template>
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
        @click.stop="$emit('update:drawer', !drawer)"
      />

      <!-- 【面包屑】 -->
      <v-icon size="18" class="ml-3 mr-1 icon">mdi-map-marker-radius</v-icon>
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
  }
}
</script>
