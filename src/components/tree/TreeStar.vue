<template>
  <div v-if="isStar" class="scroller flex-grow-1">
    <v-list nav dense>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
        mandatory
      >
        <div v-for="(item, index) in starData" :key="index">
          <v-divider v-if="index!==0" class="mb-1"/>
          <div class="pa-1 text-body-2 align-end">
            {{ item.text }}
            <span class="text-caption grey--text" style="margin-left: 4px">{{ item.type }}</span>
          </div>

          <v-list-item v-for="(item2, i) in item.items" :key="i" class="my-0">
            <v-list-item-icon>
              <v-icon
                size="14"
                :color="getStatus(item2).color"
                :title="getStatus(item2).text"
                v-text="item.icon"
              />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title :title="item2.code" class="text-body-2">
                {{ item2.text + `（${item2.code}）` }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import starData from '@/mocks/star'

export default {
  props: {
    isStar: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    starData,
    selectedItem: 999
  }),
  methods: {
    getStatus(item) {
      if (item.status) {
        return this.$configs.status[item.type][item.status]
      } else {
        return ''
      }
    }
  }
}
</script>
