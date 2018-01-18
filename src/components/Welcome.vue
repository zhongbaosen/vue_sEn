<template>
<el-container>
    <el-header>
<el-menu class="el-menu-demo" mode="horizontal"  default-active="1">
  <el-menu-item index="1">首页</el-menu-item>
</el-menu>
</el-header>
<el-main>
      <el-card class="box-card">
      <img class="userimg" src="../assets/images/group.png" alt="">
      <div class="member">{{membercount}}</div>
      </el-card>
</el-main>
</el-container>
</template>



<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}

.userimg {
  width: 5rem;
}
.member{
  text-align: center;
  font-size: 3rem;
}
</style>

<script>
export default {
  data() {
    return {
        membercount:0
    };
  },
  methods: {
    post() {
      let data = {};
      data.账号 = this.Inputuser;
      data.随机码 = this.Inputrandom;
      return new Promise((resolve, reject) => {
        this.$http({
          method: "post",
          url: "/get_state",
          data: data
        }).then(
          response => {
            console.log("获取信息成功");
            console.log(response);
            resolve(response.data);
          },
          response => {
            console.log("获取信息失败");
            console.log(response);
            reject(response.data);
          }
        );
      });
    }
  },
  mounted() {
      this.post().then(
          res =>{
              if(res.状态 == '成功'){
                  this.membercount = res.信息.总会员数;
              }
              console.log(res);
          }
      )
  }
};
</script>