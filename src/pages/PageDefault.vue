<template>
  <Panel
    title="人员管理"
    icon="mdi-account-circle"
    no-folder
  >
    <div class="pa-2 pa-md-4 flex-grow-1 align-center justify-center d-flex flex-column grey--text">
      <v-img :src="require(`@/assets/images/construction${$vuetify.theme.dark?'2':''}.png`)" max-height="300" contain/>
      <div class="display-1 mt-4">页面建设中...</div>
      <div class="mt-3 mb-6">The page you visited is under construction, please try again later.</div>
    </div>
  </Panel>
</template>

<script>
import Panel from '@/components/common/Panel'

export default {
  components: {
    Panel
  }
}
</script>

<style>
.error-page {
  max-width: 500px;
}
</style>
