<template>
  <div class="d-none d-md-flex">
    <v-icon size="18" class="ml-2 mr-1">mdi-map-marker-radius</v-icon>

    <template v-for="(item, index) of pathData">
      <v-icon
        v-if="index > 0"
        :key="index"
        size="16"
        color="grey"
        style="padding: 0 4px"
      >
        mdi-chevron-right
      </v-icon>
      <div :key="item+index" class="body-2 grey--text">{{ item }}</div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    pathData() {
      return this.$store.state.app.path
    }
  }
}
</script>
