<template>
  <v-treeview
    dense
    hoverable
    return-object
    transition
    activatable
    color="primary"
    class="flex-grow-1 scroller menuTree"
    style="font-size: 14px;cursor: pointer;"
    item-key="name"
    :active.sync="tree"
    :open.sync="open"
    :items="items"
    @update:active="selectItem()"
  >
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file" size="14">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else size="14">
        {{ files[item.file] }}
      </v-icon>
    </template>
  </v-treeview>
</template>

<script>
import items from '@/mocks/projects'

export default {
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

<style lang="scss">
.menuTree {
  .v-treeview-node__root {
    min-height: 34px;
  }

  .v-treeview-node__toggle {
    width: 16px;
    height: 16px;
    margin-right: 0;
  }

  .v-treeview-node__level {
    width: 16px;
  }

  .v-treeview-node__content {
    margin-left: 6px;
  }

  .v-treeview-node__label {
    margin-left: -8px;
  }
}
</style>
