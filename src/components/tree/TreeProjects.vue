<template>
  <v-treeview
    dense
    hoverable
    return-object
    transition
    activatable
    color="primary"
    class="scroller flex-grow-1 menuTree "
    style="font-size: 14px;cursor: pointer;"
    :style="`min-height: ${fixHeight}`"
    item-key="name"
    :active.sync="tree"
    :open.sync="open"
    :items="items"
    @update:active="selectItem()"
  >
    <!--  标签前的图标  -->
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file" size="14">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else-if="item.file!=='none'" size="14" :class="{'mr-n8' : item.file === 'none'}">
        {{ files[item.file] }}
      </v-icon>
      <span v-else class="ml-n1">[ {{ item.code }} ]</span>
    </template>

    <!--    标签内容-->
    <template v-slot:label="{ item }">
      <span :title="item.code">
        {{ item.name }}
      </span>
    </template>
  </v-treeview>
</template>

<script>
import items from '@/mocks/projects'

export default {
  props: {
    fixHeight: { // 树的固定高度
      type: String,
      default: null
    }
  },
  data: () => ({
    tree: [],
    open: ['public'],
    files: {
      html: 'mdi-language-html5',
      js: 'mdi-nodejs',
      json: 'mdi-code-json',
      md: 'mdi-language-markdown',
      pdf: 'mdi-file-pdf',
      png: 'mdi-file-image',
      txt: 'mdi-file-document-outline',
      xls: 'mdi-file-excel'
    },
    items
  }),
  methods: {
    selectItem() {
      // eslint-disable-next-line prefer-destructuring
      const item = this.tree[0]
      const index = this.open.indexOf(item)

      // 点击元素则展开
      this.open.push(item)

      // 设置全局数据 NodeType，右侧 Tabs 自动切换页面
      if (item && item.type) this.$store.commit('app/setNodeType', item.type)
    }
  }
}
</script>
