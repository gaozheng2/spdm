<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template v-slot:activator="{ on }">
      <!--  根据 fab 参数选择浮动或固定  -->
      <v-btn
        :fab="fab"
        :small="fab"
        :icon="!fab"
        :class="{
          fab:fab,
          icon:!fab
        }"
        v-on="on"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-card width="130" height="134" class="pa-2">
      <div class="d-flex justify-space-between" style="padding: 0 6px">
        <!-- 【切换主题按钮】 -->
        <v-btn
          icon
          :title="`${$vuetify.theme.dark ? 'light' : 'dark'} 模式`"
          @click="$vuetify.theme.dark=!$vuetify.theme.dark"
        >
          <v-icon>{{ $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-2' }}</v-icon>
        </v-btn>
        <v-divider vertical/>

        <!--  全屏按钮  -->
        <v-btn icon :title="`${fullScreen ? '退出' : ''}全屏（Alt+Q）`" @click="$store.commit('app/setFullScreen')">
          <v-icon>{{ `mdi-${fullScreen ? 'fullscreen-exit' : 'pan'}` }}</v-icon>
        </v-btn>
      </div>
      <v-divider class="my-1"/>

      <!--  布局按钮组  -->
      <div class="d-flex justify-center">
        <v-btn-toggle
          v-model="layout"
          mandatory
          group
          color="primary"
        >
          <v-btn text title="布局 1" class="mx-0">
            <v-icon>mdi-dock-top</v-icon>
          </v-btn>
          <v-btn text title="布局 2" class="mx-0">
            <v-icon>mdi-dock-left</v-icon>
          </v-btn>
        </v-btn-toggle>
      </div>
    </v-card>

  </v-menu>
</template>

<script>
export default {
  props: {
    fab: { // 按钮是否浮动
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      layout: 1
    }
  },
  computed: {
    fullScreen() {
      return this.$store.state.app.fullScreen
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  margin-right: -6px
}

.fab {
  position: absolute;
  top: 3px;
  right: 16px;
  z-index: 1;
}
</style>
