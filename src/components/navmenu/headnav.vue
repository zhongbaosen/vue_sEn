<template>
<el-row>
  <el-col :span="24">
      <div class="grid-content bg-purple-dark">
          <img src="../../assets/images/logo.png" alt="">
          <div class="headimg">
          <img class="hdicon" :src="Userinfo.headimg" alt="">
          <template v-if="Userinfo.sex == '男'">
            <img class="sex" src="../../assets/images/male.png" alt="">
          </template>
          <template v-if="Userinfo.sex == '女'">
            <img class="sex" src="../../assets/images/famale.png" alt="">
          </template>
          </div>
          <span class="welcome">欢迎回来,{{Userinfo.nickname}}!</span>
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
.headimg .hdicon{
  border-radius: 2rem;
  border: 2px solid #ffffff;
}
.headimg .sex{
  position:absolute;
  max-width: 25px;
  top: 3.0rem;
  right: 0.01rem;
}
.welcome {
  position: absolute;
  bottom: 1.6rem;
  right: 15rem;
  color: #ffffff;
}
/*
自定义修改样式
*/
li.el-submenu.is-active>.el-submenu__title span{
  color: rgb(255, 208, 75);
}
li.el-submenu.is-opened{
  border:1px solid;
}
li.el-submenu.is-active{
  color: rgb(255, 208, 75);
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
        random: this.$store.state.user.currentUser.UserRandom,
        nickname:this.$store.state.user.currentUser.UserName
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
