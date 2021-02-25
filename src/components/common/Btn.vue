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
      <v-icon size="20" :style="typeData.iconBtn ? '' : 'margin-right: 3px;'">
        {{ typeData.icon }}
      </v-icon>
      <span v-if="!typeData.iconBtn" class="text-h2">
        <slot>{{ typeData.title }}</slot>
      </span>
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
