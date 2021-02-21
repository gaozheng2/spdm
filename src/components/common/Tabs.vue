<template>
  <div>
    <v-tabs v-if="true" v-model="tab" background-color="transparent" class="px-1 mb-n2">
      <v-tab v-for="(item,index) in items[nodeType]" :key="index" class="text-subtitle-2">
        {{ item.name }}
      </v-tab>
      <v-spacer></v-spacer>

      <!--  全屏按钮  -->
      <v-btn
        icon
        class="mt-1"
        :title="`${fullScreen ? '退出' : ''}全屏（Alt+Q）`"
        @click="$store.commit('app/setFullScreen')"
      >
        <v-icon>{{ `mdi-${fullScreen ? 'fullscreen-exit' : 'pan'}` }}</v-icon>
      </v-btn>
    </v-tabs>

    <!--  动态读取 Pages 组件  -->
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items[nodeType]" :key="item.component">
        <keep-alive>
          <component :is="item.component"></component>
        </keep-alive>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import configs from '@/configs'

export default {
  components: {
    DefaultPage: () => import('@/pages/DefaultPage'),
    Page2: () => import('@/pages/Page2'),
    Page3: () => import('@/pages/Page3')
  },
  props: {
    nodeType: { // 导航树点击的节点类型
      type: String,
      default: 'root'
    }
  },
  data() {
    return {
      tab: 0,
      items: configs.nodeTabs
    }
  },
  computed: {
    fullScreen() {
      return this.$store.state.app.fullScreen
    }
  },
  watch: {
    // 当切换树节点时，选项卡选择第 1 项
    nodeType() {
      this.tab = 0
    }
  }
}
</script>
