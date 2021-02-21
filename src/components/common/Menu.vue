<template>
  <v-list dense nav>
    <template v-for="(item, index) in menu">
      <v-divider v-if="item.divider" :key="index" class="my-1"></v-divider>
      <v-list-item
        v-else
        :key="index"
        link
        :disabled="item.disabled"
        :href="item.href"
        target="spdm_single"
        @click="$emit(item.emit)"
      >
        <v-list-item-icon>
          <v-icon :class="{ 'grey--text': item.disabled }">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-body-1">{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  }
}
</script>
