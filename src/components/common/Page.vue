<template>
  <div>
    <slot :is-fold="isFold" :on-update-fold="onUpdateFold"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFold: [ // Panel 折叠数组，最多 5 个
        false,
        true,
        true,
        true,
        true
      ]
    }
  },
  methods: {
    // 展开一个 Panel 时，折叠其他 Panel
    onUpdateFold(index) {
      const temp = !this.isFold[index]

      this.isFold = this.isFold.map(() => true)
      this.isFold[index] = temp
    }
  }
}
</script>
