<!--  型号树组件  -->
<template>
  <v-treeview
    id="tree"
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
        :style="$configs.nodeTypes[item.type].icon_size === 16 ? 'margin-top: -1px;' : ''"
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

    <!--  标签内容，如果是型号+阶段节点，则添加[阶段]  -->
    <template v-slot:label="{ item }">
      <div :title="item.code" style="margin-top: 2px">
        {{ item.name + (item.type === 'projectStage' ? ' [ ' + item.stage + ' ]' : '') }}
      </div>
    </template>

    <!--  末尾图标-添加收藏-已收藏或激活时显示  -->
    <template v-slot:append="{ item, active }">
      <!--  用于滚动定位的隐藏 button -->
      <button style="opacity: 0;position: absolute;">if</button>
      <div
        v-if="(active && $configs.nodeTypes[item.type].hasStar )|| item.isStar"
        :title="(item.isStar ? '取消' : '') + '收藏'"
      >
        <v-icon small :color="item.isStar ? 'warning' : ''" @click.stop="star(item)">
          {{ item.isStar ? 'mdi-star' : 'mdi-star-outline' }}
        </v-icon>
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
    },
    foldSingTree: { // 是否折叠产品树
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    tree: [], // 激活的节点
    open: [], // 展开的节点
    lastNode: null // 上次激活的节点
  }),
  computed: {
    shouldScroll() { // 是否应该滚动型号树
      const type = this.$store.state.app.nodeType

      return this.$configs.nodeTypes[type].showSing && !this.foldSingTree
    }
  },
  watch: {
    shouldScroll() { // 接收到应该滚动型号树后，滚动型号树到激活节点
      // 由于 Vuetify 返回的上一个激活节点的 top，所以需要延迟获取
      setTimeout(() => {
        document.querySelector('.v-treeview-node--active button').focus()
      }, 0)
    }
  },
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

      // 如果没有激活节点，则激活上一节点
      if (!item) {
        this.tree.push(this.lastNode)
      } else {
        this.openNode(item, this.lastNode !== item) // 点击展开/折叠节点，如果不是当前激活节点则只展开
        this.lastNode = item
      }

      // 设置全局数据 NodeType，右侧 Tabs 自动切换页面
      if (item && item.type) this.$store.commit('app/setNodeType', item.type)

      // 如果是产品树相关节点，则展开产品树
      if (item && item.type && this.$configs.nodeTypes[item.type].showSing) this.$emit('update:foldSingTree', false)
    },

    // 展开/折叠节点，如果点击图标则直接折叠展开，如果点击内容则只展开不关闭
    openNode(item, onlyOpen) { // onlyOpen: 是否只展开不关闭
      const index = this.open.indexOf(item)

      if (index > -1) { // 已展开则关闭
        if (!onlyOpen) this.open.splice(index, 1)
      } else { // 已关闭则展开
        if (item && item.type && this.$configs.nodeTypes[item.type].singleFold) { // 关闭其他节点，只展开本节点
          this.open = [item]
        } else {
          this.open.push(item)
        }
      }
    },

    // 点击收藏按钮
    star(item) {
      item.isStar = !item.isStar
    },

    // 根据状态码，返回状态对应的图标颜色和文字
    _getStatus(item) {
      return getStatus(item)
    }
  }
}
</script>
