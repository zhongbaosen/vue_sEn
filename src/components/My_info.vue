<template>
<el-container>
    <el-header>
<el-menu  class="el-menu-demo" mode="horizontal"  default-active="1">
  <el-menu-item index="1">我的资料</el-menu-item>
</el-menu>
</el-header>

<el-main>
  <el-row :gutter="20">
  <el-col :span="8" :offset="8">
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="头像">
    <div class="head_img">
      <img :src="form.headurl" alt="" srcset="">
    </div>
  </el-form-item>
  <el-form-item label="账号">
    <el-input type="text" v-model="form.userid" :disabled="boxstatus.noshow"></el-input>
  </el-form-item>
  <el-form-item label="昵称">
    <el-input type="text" v-model="form.nickname" :disabled="boxstatus.noshow"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-radio-group v-model="form.sex">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">修改资料</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</el-col>
    </el-row>    
</el-main>
</el-container>

</template>

<style scoped>
.head_img {
  display: inline-block;
  vertical-align: middle;
}
.head_img img {
  border-radius: 30px;
}
</style>


<script>
export default {
  data() {
    return {
      form: {
        headurl:"http://img5.imgtn.bdimg.com/it/u=2064133027,3680347238&fm=27&gp=0.jpg",
        userid: "",
        nickname: "",
        sex: ""
      },
      boxstatus:{
        noshow:true
      }
    };
  },
  methods: {
    onSubmit() {
        this.boxstatus.noshow = false;
    }
  },
  mounted() {
    let data = {};
      data.账号 = this.$store.state.user.currentUser.UseruserID;
      data.随机码 = this.$store.state.user.currentUser.UserRandom;
      this.$utils.request("post", "/user/getinfo", data).then(
        res => {
          if (res.状态 == "成功") {
            this.$message({
              showClose: true,
              message: "获取信息:" + res.状态,
              type: "success"
            });
            this.form.headurl = res.头像;
            this.form.userid = res.账号;
            this.form.nickname = res.昵称;
            this.form.sex = res.性别;
            //console.log(JSON.stringify(_this.listres));
          } else {
            this.$message({
              showClose: true,
              message: "失败原因:" + res.状态,
              type: "error"
            });
          }
        },
        res => {}
      );
  }
};
</script>
