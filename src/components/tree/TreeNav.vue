<!--  产品树组件  -->
<template>
  <div class="fill-screen">
    <!--  型号树  -->
    <TreeProjects :fold-sing-tree.sync="foldSingTree"/>

    <!--  产品树标题  -->
    <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
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

        <!--  产品树  -->
        <transition
          enter-active-class="animate__animated animate__fadeInUp"
          leave-active-class="animate__animated animate__slideOutDown"
        >
          <div v-show="!foldSingTree" style="height: 50vh;min-height: 50vh;" class="fill-screen">
            <TreeProjects tree-type="sings"/>
          </div>
        </transition>
      </div>
    </transition>

  </div>
</template>

<script>
import TreeProjects from '@/components/tree/TreeNavProjects'

export default {
  components: { TreeProjects },
  props: {
    isStar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      foldSingTree: false // 是否折叠产品树
    }
  },
  computed: {
    showSingTree() { // 是否显示产品树
      const typeData = this.$configs.nodeTypes[this.$store.state.app.nodeType]

      return typeData.showSing || typeData.isSing
    }
  }
}
</script>
