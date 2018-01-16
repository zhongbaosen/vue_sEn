<template>
<el-row>
  <el-col :span="24">
      <div class="grid-content bg-purple-dark">
          <img src="../../assets/images/logo.png" alt="">
          <el-dropdown class="dropdown" @command="handleCommand">
  <span class="el-dropdown-link">
    用户中心<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="a">我的资料</el-dropdown-item>
    <el-dropdown-item command="b" divided>我的设置</el-dropdown-item>
    <el-dropdown-item command="e" divided>注销</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
  </el-col>
</el-row>
</template>

<style>
.bg-purple-dark {
  background: rgb(84, 92, 100);
  width: 100%;
  padding: 10px 0 10px 0;
}
.bg-purple-dark img {
  position: relative;
  width: 3.2rem;
  right: 70rem;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown{
    position: absolute;
    bottom:1.6rem;
    right: 3.0rem;
}
</style>

<script>
export default {
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>
