<template>
  <v-card>
    <v-card-title>
      {{ content }}
    </v-card-title>

    <v-card-text>

    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        color="grey"
        text
        @click="$emit('cancel')"
      >
        取消
      </v-btn>

      <v-btn
        :color="color"
        text
        @click="$emit('ok')"
      >
        确定
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '是否确定？'
    },
    color: { // “确定”按钮颜色
      type: String,
      default: 'error'
    }
  }
}
</script>