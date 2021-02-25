<!--  收藏夹按钮和搜索框组件  -->
<template>
  <div class="d-flex align-center px-1" style="min-height: 41px; height: 41px;">
    <!--  收藏夹按钮  -->
    <v-btn
      icon
      :title="`${isStar ? '关闭' : ''}收藏夹`"
      style="z-index: 1"
      @click="$emit('update:is-star', !isStar)"
    >
      <v-icon :color="isStar ? 'warning' : ''" size="20">
        {{ isStar ? 'mdi-star' : 'mdi-star-outline' }}
      </v-icon>
    </v-btn>
    <div class="text-h2 ml-1">{{ isStar ? '收藏夹' : '' }}</div>
    <!--  关闭收藏夹按钮  -->
    <template v-if="isStar">
      <v-spacer/>
      <v-btn icon title="关闭收藏夹" @click="$emit('update:is-star', !isStar)">
        <v-icon size="18">mdi-close</v-icon>
      </v-btn>
    </template>

    <!--  搜索框  -->
    <v-text-field
      v-if="!isStar"
      ref="search"
      class="ml-n2 text-body-2"
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      hide-details
      solo
      flat
      clearable
      clear-icon="mdi-close"
      height="30"
      @change="$emit('update-serach-value', _searchValue)"
    />
  </div>
</template>

<script>
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
  }
}
</script>
