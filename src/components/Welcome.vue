<template>
<el-container>
    <el-header>
<el-menu class="el-menu-demo" mode="horizontal"  default-active="1">
  <el-menu-item index="1">首页</el-menu-item>
</el-menu>
</el-header>
<el-main>
  <el-row>
  <el-col :span="6">
    <transition name="el-fade-in">
      <el-card class="box-card">
      <img class="userimg" src="../assets/images/group.png" alt="">
      <div class="member_title">会员总数</div>
      <div class="member"><countTo :startVal='mstartnum' :endVal='mendnum' :duration='3000'></countTo></div>
      </el-card>
      </transition>
  </el-col>
  <el-col :span="6">
    <transition name="el-fade-in">
      <el-card class="box-card">
      <img class="userimg" src="../assets/images/createtask_fill.png" alt="">
      <div class="member_title">当日订单总数</div>
      <div class="member"><countTo :startVal='bstartnum' :endVal='bendnum' :duration='3000'></countTo></div>
      </el-card>
      </transition>
  </el-col>
  <el-col :span="12">
     <Elcalendar></Elcalendar>
     <Calendar></Calendar> 
  </el-col>
</el-row>
      
       
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
.member {
  text-align: center;
  font-size: 3rem;
}
.member_title {
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
}
</style>

<script>
import countTo from 'vue-count-to';  //数字增减动画
import EventCalendar from "./calendar/eventcalendar";  //日历插件
import Elcalendar from "./calendar/el_calendar";
export default {
  data() {
    return {
      mstartnum: 0,
      mendnum:0,
      bstartnum:0,
      bendnum:0,
      show: true
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
    this.post().then(res => {
      if (res.状态 == "成功") {
        this.mendnum = Number(res.总会员数);
        this.bendnum = Number(res.当日订单数);
      }
      console.log(res);
    });
  },
  components: {
    "Calendar": EventCalendar,
    "countTo":countTo,
    "Elcalendar":Elcalendar
  }
};
</script>