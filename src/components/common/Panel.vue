<template>
  <v-card
    class="pa-1 mb-2"
    :class="{'fill-screen' : !isFold && fixHeight==='' }"
    :outlined="!layout.panelElevation"
    :height="fixHeight ? fixHeight : ''"
  >
    <!--  Panel 标题行  -->
    <div v-if="title!==''" class="d-flex align-center">
      <!--  标题图标和文字  -->
      <div class="d-flex align-center" :role="noFolder ? '' : 'button'" @click="$emit('update-fold', !isFold)">
        <v-icon :color="titleColor" class="mx-1" size="22">{{ icon }}</v-icon>
        <h1 :class="`subtitle-1 text--${titleColor}--text`">
          {{ title }}
        </h1>
      </div>
      <v-spacer/>

      <!--  收藏按钮  -->
      <v-btn v-if="star" icon :title="`${isStar ? '取消' : ''}收藏`" @click="onStar">
        <v-icon :color="isStar ? 'warning' : ''">
          {{ isStar ? 'mdi-star' : 'mdi-star-outline' }}
        </v-icon>
      </v-btn>

      <!--  折叠按钮  -->
      <v-btn v-if="!noFolder" icon @click="$emit('update-fold', !isFold)">
        <v-icon>{{ isFold ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
      </v-btn>
    </div>

    <!--  Panel 主体内容  -->
    <v-expand-transition>
      <div v-if="!isFold" class="fill-screen">
        <v-divider v-if="title!==''" class="my-1"/>
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
      default: ''
    },
    icon: { // 标题图标
      type: String,
      default: ''
    },
    isFold: { // 是否折叠
      type: Boolean,
      default: false
    },
    noFolder: { // 是否有折叠按钮
      type: Boolean,
      default: false
    },
    fixHeight: { // 固定 Panel 的高度
      type: String,
      default: ''
    },
    star: { // 是否有收藏按钮
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isStar: false // 是否收藏
  }),
  computed: {
    titleColor() { // 根据主题，更换标题图标和文字颜色
      if (this.noFolder) {
        return this.$vuetify.theme.dark ? '' : ' primary'
      } else if (this.isFold) {
        return this.$vuetify.theme.dark ? ' grey' : 'darken-2 grey'
      } else {
        return this.$vuetify.theme.dark ? '' : ' primary'
      }
    },
    layout() {
      return this.$configs.layout[this.$store.state.app.layout]
    }
  },
  methods: {
    onStar() { // 点击收藏按钮
      this.isStar = !this.isStar
    }
  }
}
</script>
