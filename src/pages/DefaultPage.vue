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
      <div>阿萨的开发环境阿斯利康积分阿斯兰的空间发爱丽丝解放拉萨的是打开附件阿斯利康房价阿萨的楼房科技撒赖打开附件拉萨大家发了是</div>
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
