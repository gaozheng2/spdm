<template>
  <v-card class="pa-1 mt-2">
    <div class="d-flex align-center">
      <v-icon color="primary" class="mx-1" style="margin-top: -2px">{{ icon }}</v-icon>
      <h1 class="text-h6 font-weight-bold primary--text">
        {{ title }}
      </h1>
      <v-spacer/>
      <v-btn v-if="!noFolder" icon @click="$emit('update-fold', !isFold)">
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
    }
  },
  computed: {
    height() { // 自动计算 Panel 高度
      const h = 146 + 68 * parseInt(this.panelNum)

      return `calc(100vh - ${h}px)`
    }
  }
}
</script>