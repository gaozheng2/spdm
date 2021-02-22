<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script>
export default {
  components: {
    Layout1: () => import('@/layouts/Layout'),
    Layout2: () => import('@/layouts/Layout1')
  },
  computed: {
    layout() {
      return 'Layout' + this.$store.state.app.layout
    }
  }
}
</script>
