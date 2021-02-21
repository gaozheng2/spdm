<template>
  <div>
    <Panel
      title="人员管理"
      icon="mdi-account-circle"
      :panel-num="panelNum"
      :is-fold="isFold[0]"
      @update-fold="onUpdateFold(0)"
    >
      <div>ddd</div>
    </Panel>

    <Panel
      title="系统管理"
      icon="mdi-account"
      :panel-num="panelNum"
      :is-fold="isFold[1]"
      @update-fold="onUpdateFold(1)"
    >
      <div>是是是</div>
    </Panel>

    <Panel
      title="配置管理"
      icon="mdi-account"
      :panel-num="panelNum"
      :is-fold="isFold[2]"
      @update-fold="onUpdateFold(2)"
    >
      <div>是是是</div>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/Panel'
import PageMixin from '@/mixins/PageMixin'

export default {
  components: {
    Panel
  },
  mixins: [PageMixin],
  data() {
    return {
      panelNum: 3 // Panel 数量
    }
  }
}
</script>
