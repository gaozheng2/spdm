<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        title="功能菜单"
        color="primary"
        v-on="on"
      >
        <v-icon>mdi-view-grid-outline</v-icon>
      </v-btn>
    </template>

    <!-- user menu list -->
    <v-list dense nav>
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        :exact="item.exact"
        :disabled="item.disabled"
        link
      >
        <v-list-item-icon>
          <v-icon small :class="{ 'grey--text': item.disabled }">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { icon: 'mdi-account-box-outline', text: 'Profile' },
        { icon: 'mdi-cog-outline', text: 'Settings' },
        { icon: 'mdi-chat-outline', text: 'Chat' }
      ]
    }
  }
}
</script>