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

    <v-card width="136" height="120" class="pa-2">
      <div class="d-flex justify-space-between" style="padding: 0 6px">
        <!-- 【切换主题按钮】 -->
        <v-btn icon :title="`${$vuetify.theme.dark ? 'light' : 'dark'} 模式`" @click="setTheme">
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
      <div class="d-flex justify-space-between">
        <v-btn
          v-for="btn of btnGroup"
          :key="btn.id"
          :color="layout === btn.id ? 'primary' : ''"
          :title="`布局 ${btn.id}`"
          icon
          @click="setLayout(btn.id)"
        >
          <v-icon>{{ btn.icon }}</v-icon>
        </v-btn>
      </div>
    </v-card>

  </v-menu>
</template>

<script>
import setLocalConfig from '@/assets/libs/setLocalConfig'

export default {
  props: {
    fab: { // 按钮是否浮动
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      btnGroup: [ // 布局按钮组
        {
          id: 1,
          icon: 'mdi-dock-left'
        },
        {
          id: 2,
          icon: 'mdi-dock-top'
        },
        {
          id: 3,
          icon: 'mdi-dock-right'
        }
      ]
    }
  },
  computed: {
    fullScreen() {
      return this.$store.state.app.fullScreen
    },
    layout: {
      get() {
        return this.$store.state.app.layout
      },
      set() {
      }
    }
  },
  methods: {
    setTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      setLocalConfig('themeDark', this.$vuetify.theme.dark)
    },
    setLayout(index) {
      this.$store.commit('app/setLayout', index)
      setLocalConfig('layout', index)
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
