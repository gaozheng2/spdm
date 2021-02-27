<template>
  <div class="fill-screen">
    <v-tabs v-model="tabValue" background-color="transparent" class="fill-screen">
      <v-tab v-for="(tab,index) in items[nodeType].tabs" :key="index" class="text-subtitle-2">
        {{ tab.text }}
      </v-tab>

      <!--  动态读取 Pages 组件  -->
      <v-tabs-items v-model="tabValue" class="fill-screen">
        <v-tab-item v-for="(tab,index) in items[nodeType].tabs" :key="index" class="fill-screen">
          <transition
            enter-active-class=" animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
            mode="out-in"
          >
            <component :is="tab.component"></component>
          </transition>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
export default {
  components: {
    PageDashboard: () => import('@/pages/dashboard/PageDashboard'),
    PageRootConfig: () => import('@/pages/root/PageRootConfig'),
    PageUnitConfig: () => import('@/pages/unit/PageUnitConfig'),
    PageDomainInfo: () => import('@/pages/domain/PageDomainInfo'),
    PageSetInfo: () => import('@/pages/set/PageSetInfo'),
    PageProjectInfo: () => import('@/pages/project/PageProjectInfo'),
    PageProjectConfig: () => import('@/pages/project/PageProjectConfig'),
    PageProjectStageInfo: () => import('@/pages/projectStage/PageProjectStageInfo'),
    PageStageInfo: () => import('@/pages/stage/PageStageInfo'),
    PageListConfig: () => import('@/pages/stage/PageListConfig'),
    PageProjectData: () => import('@/pages/stage/PageProjectData'),
    PagePartInfo: () => import('@/pages/part/PagePartInfo'),
    PagePartConfig: () => import('@/pages/part/PagePartConfig'),
    PagePartData: () => import('@/pages/part/PagePartData'),
    PageSingInfo: () => import('@/pages/sing/PageSingInfo'),
    PageDataCheck: () => import('@/pages/sing/PageDataCheck')
  },
  data() {
    return {
      tabValue: 0, // 选项卡选择第几项
      items: this.$configs.nodeTypes // 选项卡数据
    }
  },
  computed: {
    nodeType() {
      return this.$store.state.app.nodeType
    }
  },
  watch: {
    // 当切换树节点时，选项卡选择第 1 项
    nodeType() {
      this.tabValue = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.animate__animated.animate__fadeIn,
.animate__animated.animate__fadeOut {
  --animate-duration: 0.2s;
}
</style>
