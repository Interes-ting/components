<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo mt-topbar"
      id="menuTitle"
      mode="horizontal"
      @select="handleSelect"
      :background-color="bgc"
      :text-color="txc"
      :active-text-color="atc"
      ali
    >
      <el-menu-item
        v-for="item in menuData"
        :class="'childrenMenu'+(parseInt(item.id)).toString()"
        :key="item.id"
        :index="(item.id).toString()"
      >{{item.title}}</el-menu-item>
      <el-submenu :index="(menuData.length+1).toString()" v-if="menuData.length<menulist.length">
        <template slot="title">更多菜单</template>
        <el-menu-item
          v-for="item in submenulist"
          :key="item.id"
          :index="(item.id).toString()"
        >{{item.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'mtTopbar',
  props: ['menulist', 'menuNum', 'bgc', 'txc', 'atc'],
  data() {
    return {
      activeIndex2: '1',
      submenulist: [],
      menuData: [],
      HTMLwidth: window.innerWidth
    }
  },
  watch: {
    menulist(val, oldVal) {
      this.getmenulist()
    }
  },
  mounted() {
    const that = this
    window.addEventListener('resize', function() {
      return (() => {
        window.HTMLwidth = window.innerWidth
        that.HTMLwidth = window.HTMLwidth
        that.getmenulist()
      })()
    })
    that.getmenulist()
  },
  methods: {
    handleSelect(key, keyPath) {},
    getmenulist() {
      let menuNum =
        Math.floor(document.getElementById('menuTitle').offsetWidth / 104) - 4
      if (menuNum >= this.menuNum) menuNum = this.menuNum
      if (menuNum <= 0) menuNum = 0
      this.menuData = this.menulist.slice(0, menuNum)
      if (this.menulist.length > menuNum) {
        this.submenulist = this.menulist.slice(menuNum, this.menulist.length)
      }
    }
  }
}
</script>

<style scoped>
.mt-topbar {
  display: flex;
}
.mt-topbar .el-menu-item {
  flex: 1;
  text-align: center;
}
</style>
