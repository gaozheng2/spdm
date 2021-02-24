<template>
  <div>
    <div class="d-flex align-center px-1" style="height: 48px">
      <!--  收藏夹按钮  -->
      <v-btn
        icon
        large
        :title="`${isStar ? '关闭' : ''}收藏夹`"
        style="z-index: 1"
        @click="$emit('update:is-star', !isStar)"
      >
        <v-icon :color="isStar ? 'warning' : ''">
          {{ isStar ? 'mdi-star' : 'mdi-star-outline' }}
        </v-icon>
      </v-btn>
      <div class="text-subtitle-2 ml-1">{{ isStar ? '收藏夹' : '' }}</div>
      <!--  关闭收藏夹按钮  -->
      <template v-if="isStar">
        <v-spacer/>
        <v-btn icon title="关闭收藏夹" @click="$emit('update:is-star', !isStar)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>

      <!--  搜索框  -->
      <v-text-field
        v-if="!isStar"
        ref="search"
        class="ml-n2"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        hide-details
        solo
        flat
        clearable
        clear-icon="mdi-close"
        @change="$emit('update-serach-value', _searchValue)"
      />
    </div>
    <v-divider/>

    <!-- 收藏夹 -->
    <div v-if="isStar" class="scroller" :style="`height: ${starHeight}`">
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
  </div>
</template>

<script>
import starData from '@/mocks/star'

export default {
  props: {
    isStar: {
      type: Boolean,
      default: false
    },
    searchValue: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    starData,
    selectedItem: 999
  }),
  computed: {
    starHeight() {
      const { layout } = this.$store.state.app
      const h = 114 - this.$configs.layout[layout].treeClip * 15

      return `calc(100vh - ${h}px)`
    }
  },
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
