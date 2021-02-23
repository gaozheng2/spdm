<template>
  <v-hover v-slot="{ hover }">
    <v-btn
      :tile="!typeData.iconBtn"
      :text="!typeData.iconBtn"
      :icon="typeData.iconBtn"
      class="pa-1 text-body-2 font-weight-bold"
      :color="hover ? typeData.color : ''"
      :title="typeData.iconBtn && typeData.title"
      @click="$emit('click')"
    >
      <v-icon size="18" :class="{textBtn:!typeData.iconBtn}">
        {{ typeData.icon }}
      </v-icon>
      <slot>{{ typeData.iconBtn ? '' : typeData.title }}</slot>
    </v-btn>
  </v-hover>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      typeData: this.$configs.btns[this.type]
    }
  }
}
</script>

<style lang="scss">
.textBtn {
  margin-right: 3px;
}
</style>
