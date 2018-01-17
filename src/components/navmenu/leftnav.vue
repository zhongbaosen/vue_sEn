<template>
<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      ref="leftnav">
      <el-menu-item index="1"  @click="linkTo('/')">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>基本功能</span>
        </template>
        <el-menu-item-group>
          <template slot="title">系统概况</template>
          <el-menu-item index="2-1" @click="linkTo('/chart')">图表</el-menu-item>
          <el-menu-item index="2-2" @click="linkTo('/get_record')">账户记录</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="我的">
          <el-menu-item index="2-3"  @click="linkTo('/myinfo')">我的资料</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">我的设置</template>
          <el-menu-item index="2-4-1">资料修改</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
</template>

<style>
.el-menu-vertical-demo {
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 2000px;
  max-height: auto;
  max-width: auto;
}
</style>

<script>
export default {
  data(){
    return {
      clientHeight: 0
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    linkTo(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>