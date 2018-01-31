<template>
<el-row>
  <el-col :span="24">
      <div class="grid-content bg-purple-dark">
          <img src="../../assets/images/logo.png" alt="">
          <div class="headimg">
          <img :src="Userinfo.headimg" alt="">
          </div>
          <span class="welcome">欢迎回来,{{Userinfo.userID}}!</span>
          <el-dropdown class="dropdown" @command="handleCommand">
  <span class="el-dropdown-link">   
    用户中心<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="/index/myinfo">我的资料</el-dropdown-item>
    <el-dropdown-item command="b" divided>我的设置</el-dropdown-item>
    <el-dropdown-item command="/" divided>注销</el-dropdown-item>
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
  float: left;
}
.bg-purple-dark img {
  float: left;
  width: 3.2rem;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown {
  position: absolute;
  bottom: 1.6rem;
  right: 5rem;
}
.headimg {
  float: right;
  max-width: 51px;
}
.headimg img{
  border-radius: 2rem;
  border: 2px solid #ffffff;
}
.welcome {
  position: absolute;
  bottom: 1.6rem;
  right: 15rem;
  color: #ffffff;
}
</style>

<script>
export default {
  data() {
    return {
      Userinfo: {
        headimg: this.$store.state.user.currentUser.UserHeadImg,
        sex: this.$store.state.user.currentUser.UserSex,
        userID: this.$store.state.user.currentUser.UseruserID,
        random: this.$store.state.user.currentUser.UserRandom
      }
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("你即将跳转到:" + command);
      this.linkTo(command);
    },
    linkTo(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>
