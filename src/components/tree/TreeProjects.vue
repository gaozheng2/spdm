<!--  型号树组件  -->
<template>
  <v-treeview
    dense
    hoverable
    return-object
    transition
    activatable
    color="primary"
    class="scroller flex-grow-1 ml-n2"
    style="font-size: 14px; cursor: pointer;"
    item-key="id"
    :active.sync="tree"
    :open.sync="open"
    :items="treeData"
    expand-icon=""
    @update:active="selectItem()"
  >
    <!--  标签前的图标  -->
    <template v-slot:prepend="{ item, open }">
      <!--  根据树节点是否展开选择图标  -->
      <v-icon
        v-if="$configs.nodeTypes[item.type].icon"
        :color="_getStatus(item).color"
        :title="_getStatus(item).text"
        :size="$configs.nodeTypes[item.type].icon_size || 14"
        @click.stop="openNode(item)"
      >
        {{
          ($configs.nodeTypes[item.type].icon_open && open)
            ? $configs.nodeTypes[item.type].icon_open
            : $configs.nodeTypes[item.type].icon
        }}
      </v-icon>
      <!--  没有图标的显示 [代号]，如阶段节点  -->
      <span v-else class="ml-n1">[ {{ item.code }} ]</span>
    </template>

    <!--  标签内容  -->
    <template v-slot:label="{ item }">
      <div :title="item.code" style="margin-top: 2px">
        {{ item.name + (item.type === 'projectStage' ? ' [ ' + item.stage + ' ]' : '') }}
      </div>
    </template>
  </v-treeview>
</template>

<script>
import getStatus from '@/libs/getStatus'

export default {
  props: {
    fixHeight: { // 树的固定高度
      type: String,
      default: null
    },
    treeData: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    tree: [], // 激活的节点
    open: [], // 展开的节点
    lastNode: null // 上次激活的节点
  }),
  mounted() {
    // 默认选中第一条 root 记录
    if (this.treeData[0].type === 'root') {
      this.tree.push(this.treeData[0])
    }
  },
  methods: {
    selectItem() {
      // eslint-disable-next-line prefer-destructuring
      const item = this.tree[0]
      const index = this.open.indexOf(item)

      // 点击展开/折叠节点
      if (index > -1) {
        if (this.lastNode === item) this.open.splice(index, 1)
      } else {
        this.open.push(item)
      }

      // 如果没有激活节点，则激活上一节点
      if (!item) {
        this.tree.push(this.lastNode)
      } else {
        this.lastNode = item
      }

      // 设置全局数据 NodeType，右侧 Tabs 自动切换页面
      if (item && item.type) this.$store.commit('app/setNodeType', item.type)
    },

    // 展开/折叠节点
    openNode(item) {
      const index = this.open.indexOf(item)

      if (index > -1) {
        this.open.splice(index, 1)
      } else {
        this.open.push(item)
      }
    },

    // 根据状态码，返回状态对应的图标颜色和文字
    _getStatus(item) {
      return getStatus(item)
    }
  }
}
</script>
