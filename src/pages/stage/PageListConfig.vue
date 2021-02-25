<template>
  <Panel
    title="人员管理"
    icon="mdi-account-circle"
    no-folder
  >
    <PanelConstruction/>
  </Panel>
</template>

<script>
import Panel from '@/components/common/Panel'
import PanelConstruction from '@/components/Panels/PanelConstruction'

export default {
  components: {
    PanelConstruction,
    Panel
  }
}
</script>
