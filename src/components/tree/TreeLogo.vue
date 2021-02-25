<template>
  <div role="button" class="d-flex pa-2 align-center" style="min-height: 60px;height: 60px;" @click="refresh">
    <img src="/images/v-logo-small.png" height="30" alt="logo" class="mr-1">
    <div>
      <div class="text-h6 primary--text">宇航产品数据中心</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 点击 Logo 刷新页面
    refresh() {
      location.reload()
    }
  }
}
</script>
