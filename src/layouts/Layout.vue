<template>
  <v-layout class="fill-height">
    <!-- 左侧导航树 -->
    <MenuTree :full-screen="fullScreen" :drawer="drawer"/>

    <!-- 顶部工具条 -->
    <Toolbar :full-screen="fullScreen" :drawer.sync="drawer"/>

    <v-container fluid class="px-2 pt-0 pb-2 container" :style="{height: containerHeight}">
      <v-tabs v-if="true" background-color="transparent" class="pr-1 mb-n2">
        <v-tab class="text-subtitle-1">驾驶舱</v-tab>
        <v-tab class="text-subtitle-1">系统管理</v-tab>
        <v-tab class="text-subtitle-1">人员配置</v-tab>
        <v-spacer></v-spacer>
        <v-btn
          icon
          class="mt-1"
          :title="`${fullScreen ? '退出' : ''}全屏（Alt+Q）`"
          @click="$store.commit('app/setFullScreen')"
        >
          <v-icon>{{ `mdi-${fullScreen ? 'fullscreen-exit' : 'pan'}` }}</v-icon>
        </v-btn>
      </v-tabs>
      <Panel
        title="人员管理"
        icon="mdi-account-circle"
        panel-num="3"
        :is-fold="isFold[0]"
        @update-fold="onUpdateFold(0)"
      >
        <div>ddd</div>
      </Panel>

      <Panel
        title="系统管理"
        icon="mdi-account"
        panel-num="3"
        :is-fold="isFold[1]"
        @update-fold="onUpdateFold(1)"
      >
        <div>是是是</div>
      </Panel>

      <Panel
        title="配置管理"
        icon="mdi-account"
        panel-num="3"
        :is-fold="isFold[2]"
        @update-fold="onUpdateFold(2)"
      >
        <div>是是是</div>
      </Panel>

      <!--      <v-img-->
      <!--        src="@/assets/images/background01.png"-->
      <!--        class="backImg"-->
      <!--      ></v-img>-->

    </v-container>
  </v-layout>
</template>

<script>
import Panel from '@/components/common/Panel'
import Toolbar from '@/components/toolbar/Toolbar'
import MenuTree from '@/components/menuTree/MenuTree'

export default {
  components: {
    MenuTree,
    Toolbar,
    Panel
  },
  data() {
    return {
      drawer: true,
      isFold: [
        false,
        true,
        true
      ]
    }
  },
  computed: {
    fullScreen() {
      return this.$store.state.app.fullScreen
    },
    containerHeight() {
      let h = 64

      if (this.fullScreen) {
        h = 0
      }

      return `calc(100vh - ${h}px)`
    }
  },
  // 监听导航树展开按键
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this
    let method = ''

    document.onkeydown = function (e) {
      if (e.key && e.key === 'q' && e.ctrlKey) {
        method = 'drawer'
      } else if (e.keyCode === 81 && e.ctrlKey) {
        method = 'drawer'
      } else if (e.key && e.key === 'q' && e.altKey) {
        method = 'fullScreen'
      } else if (e.keyCode === 81 && e.altKey) {
        method = 'fullScreen'
      } else {
        method = ''
      }
      if (method === 'drawer') {
        e.preventDefault() // 屏蔽浏览器快捷键
        _this.drawer = !_this.drawer
      } else if (method === 'fullScreen') {
        e.preventDefault()
        _this.$store.commit('app/setFullScreen')
      }
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

<style lang="scss" scoped>
.backImg {
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-300px, -300px);
  z-index: 0;
}

.container {
  background-image: url("~@/assets/images/background01.png");
  background-size: 500px 500px;
  background-position: center center;
}
</style>
