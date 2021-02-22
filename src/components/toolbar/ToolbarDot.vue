<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template v-slot:activator="{ on }">
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

    <v-card width="120" height="120" class="pa-2">
      <div class="d-flex justify-space-between">
        <!-- 【切换主题按钮】 -->
        <v-btn
          icon
          :title="`${$vuetify.theme.dark ? 'light' : 'dark'}模式`"
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
      <div class="d-flex justify-space-between">
        <v-btn icon>
          <v-icon>mdi-white-balance-sunny</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-white-balance-sunny</v-icon>
        </v-btn>
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
    return {}
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
