<template>
  <v-card class="pa-1 mt-2">
    <div class="d-flex align-center card-title" @click="$emit('update-fold', !isFold)">
      <v-icon :color="titleColor" class="mx-1 icon" size="22">{{ icon }}</v-icon>
      <h1 :class="`subtitle-1 ${titleColor}--text`">
        {{ title }}
      </h1>
      <v-spacer/>
      <v-btn v-if="!noFolder" icon>
        <v-icon>{{ isFold ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
      </v-btn>
    </div>
    <div v-if="!isFold" :style="`height: ${height}`">
      <v-divider class="my-1"/>
      <slot/>
    </div>
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
      type: String,
      default: '1'
    },
    fixedHeight: { // 固定 Panel 的高度
      type: String,
      default: '0'
    }
  },
  computed: {
    height() { // 自动计算 Panel 高度
      if (this.noFolder) { // 如果不用折叠，则 fixedHeight 为本 Panel 的高度
        return this.fixedHeight + 'px'
      } else { // 如果需要折叠，则 fixedHeight 为其他固定 Panel 的高度
        const fh = this.fixedHeight ? parseInt(this.fixedHeight) + 4 : 0
        const h = 120 + 68 * parseInt(this.panelNum) - 64 * (this.$store.state.app.fullScreen) + fh

        return `calc(100vh - ${h}px)`
      }
    },
    titleColor() { // 标题图标和文字颜色
      if (this.noFolder) {
        return 'primary'
      } else if (this.isFold) {
        return 'secondary'
      } else {
        return 'primary'
      }
    }
  }
}
</script>

<style lang="scss">
.card-title {
  cursor: pointer;
}
</style>
