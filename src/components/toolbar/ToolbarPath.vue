<template>
  <div class="d-none d-md-flex">
    <v-icon size="18" class="ml-2 mr-1">mdi-map-marker-radius</v-icon>
    <div class="body-2 grey--text" v-html="path">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    path() {
      return this.$store.state.app.path.join('&ensp;>&ensp;')
    }
  }
}
</script>