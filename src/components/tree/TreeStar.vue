<!--  收藏夹组件  -->
<template>
  <v-list nav dense class="scroller flex-grow-1">
    <!--  收藏夹无内容的图片  -->
    <div v-if="isEmpty" class="mt-4 d-flex flex-column align-center justify-center grey--text">
      <v-img :src="require(`@/assets/images/star${$vuetify.theme.dark?'2':''}.png`)" max-height="100" contain/>
      <div class="mt-4 text-body-2">收藏夹暂无内容</div>
    </div>
    <v-list-item-group v-if="!isEmpty" v-model="selectedItem" color="primary" :mandatory="selectedItem!==-1">
      <div v-for="(item, index) in starData" :key="index">
        <!--  分类标题（型号、产品）  -->
        <v-divider v-if="index!==0" class="my-1"/>
        <div class="pa-1 text-body-2 align-end">
          {{ item.name }}
          <span class="text-caption grey--text" style="margin-left: 4px">{{ item.eName }}</span>
        </div>

        <!--  收藏夹内容列表  -->
        <template v-for="(item2, i) in item.items">
          <v-hover v-slot="{hover}" :key="i">
            <v-list-item @click="clickItem(item2)">
              <!--  列表图标  -->
              <v-list-item-icon>
                <v-icon
                  size="14"
                  class="mt-1"
                  :color="getStatus(item2).color"
                  :title="getStatus(item2).name"
                  v-text="item.icon"
                />
              </v-list-item-icon>

              <!--  列表文字  -->
              <v-list-item-content>
                <v-list-item-title :title="item2.code" class="text-body-2">
                  {{ item2.name + `（${item2.code}）` }}
                </v-list-item-title>
              </v-list-item-content>

              <!--  删除按钮，鼠标悬浮出现  -->
              <v-list-item-icon v-if="hover">
                <v-hover v-slot="{hover:hover2}">
                  <div style="margin-top: 5px">
                    <v-icon size="16" :color="hover2 ? 'n_red' : ''" @click.stop="delItem(item2)">
                      mdi-trash-can-outline
                    </v-icon>
                  </div>
                </v-hover>
              </v-list-item-icon>
            </v-list-item>
          </v-hover>
        </template>
      </div>
    </v-list-item-group>
  </v-list>
</template>

<script>
import starData from '@/mocks/star'

export default {
  data: () => ({
    starData,
    selectedItem: -1,
    currentId: -1 // 当前选中的列表项的 id
  }),
  computed: {
    isEmpty() { // 收藏夹内容是否为空
      let num = 0

      this.starData.forEach((item) => {
        num += item.items.length
      })

      return !num
    }
  },
  methods: {
    // 根据状态码，返回状态对应的图标颜色和文字
    getStatus(item) {
      if (item.status) {
        return this.$configs.status[item.type][item.status]
      } else {
        return ''
      }
    },

    clickItem(item) {
      this.currentId = item.id // 记录点击的 item
      this.$store.commit('app/setNodeType', item.type) // 设置全局的节点类型，右侧 Tabs 自动切换
    },

    delItem(item) {
      const data = this.starData

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].items.length; j++) {
          if (data[i].items[j].id === item.id.toString()) {
            data[i].items.splice(j, 1)
          }
        }
      }
      // 如果删除了当前选中项，则没有项目被选中
      if (this.currentId === item.id) this.selectedItem = -1
    }
  }
}
</script>
