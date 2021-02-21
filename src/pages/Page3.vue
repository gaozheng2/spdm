<template>
  <div>
    <Panel
      title="人员管理"
      icon="mdi-account-circle"
      :fix-height="fixHeight"
      no-folder
    >
      <div>ddd</div>
    </Panel>

    <Panel
      title="系统管理"
      icon="mdi-account"
      :panel-num="panelNum"
      :fix-height="fixHeight"
      :is-fold="isFold[0]"
      @update-fold="onUpdateFold(0)"
    >
      <div>是是是</div>
    </Panel>

    <Panel
      title="配置管理"
      icon="mdi-account"
      :panel-num="panelNum"
      :fix-height="fixHeight"
      :is-fold="isFold[1]"
      @update-fold="onUpdateFold(1)"
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
      panelNum: 3, // Panel 数量
      fixHeight: 300 // 固定 Panel 的高度
    }
  }
}
</script>
