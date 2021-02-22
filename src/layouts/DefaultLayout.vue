<template>
  <component :is="layout"></component>
</template>

<script>
export default {
  components: {
    Layout1: () => import('@/layouts/Layout1'),
    Layout2: () => import('@/layouts/Layout2'),
    Layout3: () => import('@/layouts/Layout3')
  },
  computed: {
    layout() {
      return 'Layout' + this.$store.state.app.layout
    }
  }
}
</script>
