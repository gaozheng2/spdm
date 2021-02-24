<template>
  <v-treeview
    dense
    hoverable
    return-object
    transition
    color="primary"
    class="flex-grow-1 scroller"
    :active.sync="tree"
    :open.sync="open"
    :items="items"
    activatable
    item-key="name"
    style="font-size: 14px;cursor: pointer;"
    @update:active="selectItem()"
  >
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file" size="14">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else>
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
      console.log(this.tree[0])

      if (this.tree[0].type) this.$store.commit('app/setNodeType', this.tree[0].type)
    }
  }
}
</script>
