<template>
  <div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      isFold: [
        false,
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
