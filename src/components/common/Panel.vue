<template>
  <v-card class="flex-grow-1 pa-1 mt-2">
    <!--  Panel 标题行  -->
    <div class="d-flex align-center" :role="noFolder ? '' : 'button'" @click="$emit('update-fold', !isFold)">
      <v-icon :color="titleColor" class="mx-1" size="22">{{ icon }}</v-icon>
      <h1 :class="`subtitle-1 text--${titleColor}--text`">
        {{ title }}
      </h1>
      <v-spacer/>
      <v-btn v-if="!noFolder" icon>
        <v-icon>{{ isFold ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
      </v-btn>
    </div>

    <!--  Panel 主体内容  -->
    <v-expand-transition>
      <div v-if="!isFold" :style="`height: ${height}`">
        <v-divider class="my-1"/>
        <slot/>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    title: { // 标题
      type: String,
      required: true
    },
    icon: { // 标题图标
      type: String,
      required: true
    },
    isFold: { // 是否折叠
      type: Boolean,
      default: false
    },
    noFolder: { // 是否有折叠按钮
      type: Boolean,
      default: false
    },
    panelNum: { // 共几个 Panel
      type: Number,
      default: 1
    },
    fixHeight: { // 固定 Panel 的高度
      type: Number,
      default: 0
    }
  },
  computed: {
    height() { // 自动计算 Panel 高度
      let h = 0

      if (this.noFolder) { // 如果不用折叠，则 fixHeight 为本 Panel 的高度
        if (this.fixHeight > 0) {
          return this.fixHeight + 'px'
        } else { // 如果不指定 fixHeight，则占满全屏
          h = 176 - 64 * (this.$store.state.app.fullScreen)
        }
      } else { // 如果需要折叠，则 fixHeight 为其他固定 Panel 的高度
        h = 116 + 68 * this.panelNum - 64 * (this.$store.state.app.fullScreen) + this.fixHeight
      }

      return `calc(100vh - ${h}px)`
    },
    titleColor() { // 标题图标和文字颜色
      if (this.noFolder) {
        return this.$vuetify.theme.dark ? '' : ' primary'
      } else if (this.isFold) {
        return this.$vuetify.theme.dark ? ' grey' : 'darken-2 grey'
      } else {
        return this.$vuetify.theme.dark ? '' : ' primary'
      }
    }
  }
}
</script>
