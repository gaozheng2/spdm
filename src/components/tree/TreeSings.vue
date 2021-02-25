<!--  产品树组件  -->
<template>
  <div v-if="showSingTree">
    <v-divider/>
    <div style="min-height: 34px;" class="text-h2 mx-2 d-flex align-center">
      产品列表
      <v-spacer/>
      <v-btn icon small @click="foldSingTree = !foldSingTree">
        <v-icon size="18">
          {{ foldSingTree ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
        </v-icon>
      </v-btn>
    </div>
    <v-divider/>
    <div v-show="!foldSingTree" style="height: 50vh;min-height: 50vh;" class="scroller">
      <TreeProjects :tree-data="singsData" type="sings"/>
    </div>
  </div>
</template>

<script>
import TreeProjects from '@/components/tree/TreeProjects'
import singsData from '@/mocks/sings'

export default {
  components: { TreeProjects },
  data() {
    return {
      foldSingTree: false, // 是否折叠产品树
      singsData
    }
  },
  computed: {
    showSingTree() { // 是否显示产品树
      const type = this.$store.state.app.nodeType

      return this.$configs.nodeTypes[type].showSing
    }
  }
}
</script>
