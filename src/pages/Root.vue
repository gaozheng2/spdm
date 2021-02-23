<template>
  <Page v-slot="{isFold, onUpdateFold}">
    <Panel
      title="人员管理"
      icon="mdi-account-circle"
      :panel-num="panelNum"
      :is-fold="isFold[0]"
      @update-fold="onUpdateFold(0)"
    >
      <BtnsPanel>
        <Btn type="new" @click="new2">新建型号</Btn>
        <Btn type="new">新建型号集</Btn>
        <Btn type="edit"/>
        <Btn type="save"/>
        <Btn type="lock"/>
        <Btn type="del"/>

        <template v-slot:right>
          <Btn type="refresh"/>
          <Btn type="out"/>
        </template>
      </BtnsPanel>

      <div style="height: 300px;border: 1px solid blue"></div>
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
  </Page>
</template>

<script>
import Page from '@/components/common/Page'
import Panel from '@/components/common/Panel'
import BtnsPanel from '@/components/common/BtnsPanel'
import Btn from '@/components/common/Btn'

export default {
  components: {
    Page,
    Panel,
    BtnsPanel,
    Btn
  },
  data() {
    return {
      panelNum: 3 // Panel 数量
    }
  },
  methods: {
    new2() {
      alert(22)
    }
  }
}
</script>
