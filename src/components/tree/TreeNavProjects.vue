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
    treeType: { // 树类型：projects | sings
      type: String,
      default: 'projects'
    },
    foldSingTree: { // 是否折叠产品树
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    treeData: [],
    tree: [], // 激活的节点
    open: [], // 展开的节点
    lastNode: null, // 上次激活的节点
    isClear: false // 是否清空
  }),
  computed: {
    nodeType() { // 当前节点类型
      return this.$store.state.app.nodeType
    },
    nodeId() { // 当前节点 ID
      return this.$store.state.app.nodeId
    }
  },
  watch: {
    nodeId() { // 当前节点 ID 变化时，执行对应操作
      if (this.treeType === 'sings') { // 产品树获取数据
        if (this.$configs.nodeTypes[this.nodeType].showSing) {
          this.$api.projects.getSings().then((res) => {
            this.treeData = res.data
            this.isClear = true // 产品树清空激活节点和展开节点
            this.tree = []
            this.open = []
          })
        }
      } else { // 型号树滚动到激活节点
        if (this.$configs.nodeTypes[this.nodeType].showSing) this.scrollNode()
      }
    }
  },
  created() { // 初始化数据
    if (this.treeType === 'projects') {
      this.$api.projects.getProjects().then((res) => {
        this.treeData = res.data
        this.tree.push(this.treeData[0]) // 默认选中第一条记录
      })
    } else {
      this.$api.projects.getSings().then((res) => {
        this.treeData = res.data
      })
    }
  },
  activated() { // 如果关闭收藏夹，显示树，则树滚动到激活节点
    this.scrollNode(true)
  },
  methods: {
    selectItem() { // 点击节点后的操作
      const [item] = this.tree

      // 如果没有激活节点，则激活上一节点
      if (!item) {
        if (!this.isClear) { // 但节点清空时不激活上一节点
          this.tree.push(this.lastNode)

          return
        } else { // 清空只执行一次
          this.isClear = false
        }
      } else {
        this.openNode(item, this.lastNode !== item) // 点击展开/折叠节点，如果不是当前激活节点则只展开
        this.lastNode = item
      }

      // 设置全局数据 nodeType 和 nodeId，右侧 Tabs 自动切换页面
      if (item) {
        if (item.type) this.$store.commit('app/setNodeType', item.type)
        if (item.id) this.$store.commit('app/setNodeId', item.id)
      }

      // 如果点击的是产品树相关节点，则展开产品树，且取消产品树的激活节点
      if (item && item.type && this.$configs.nodeTypes[item.type].showSing) {
        this.$emit('update:foldSingTree', false)
      }
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

    // 树滚动到激活节点
    scrollNode(isAll) { // isAll：是否滚动产品树
      setTimeout(() => { // 滚动型号树和产品树
        const el = document.querySelectorAll('.v-treeview-node--active')

        if (el && el[0]) el[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
        if (el && el[1] && isAll) el[1].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
      })
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
