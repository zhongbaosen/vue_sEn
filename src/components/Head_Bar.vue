<template>
  <div class="Head_Bar">
     <topmenu :is="topmenu" keep-alive></topmenu>   
    <banner :is="banner" keep-alive></banner>
    <div class="tabs">
 <div class="tab" @click="toggleTab('One_page')"><a>{{ fristmsg }}</a></div>
 <div class="tab" @click="toggleTab('Two_page')"><a>{{secondmsg}}</a></div>
 <div class="tab" @click="toggleTab('Three_page')"><a>{{thridmsg}}</a></div>
    </div>
    <div>
<prince :is="currentTab" keep-alive></prince>
</div>
<label for="">id</label>
<el-input v-model="Inputid" placeholder="请输入id" :Inputid ="Inputid"></el-input>
<label for="">交易类别</label>
<el-input v-model="Inputpaytype" placeholder="请输入交易类别" :Inputpaytype ="Inputpaytype"></el-input>
<el-button type="text" @click="open">获取数据弹框</el-button>
    <img src="../assets/logo.png">
  </div>
</template>

<script>
import Top_menu from "./header/Top_menu";
import One_page from "./list/One_page";
import Two_page from "./list/Two_page";
import Three_page from "./list/Three_page";
import Banner from "./banner/Carousel";
export default {
  name: "Head_Bar",
  data() {
    return {
      fristmsg: "小王子",
      secondmsg: "小玫瑰",
      thridmsg: "小狐狸",
      list: "",
      currentTab: "One_page",
      banner: "Banner",
      topmenu: "Top_menu",
      Inputid: "",
      Inputpaytype: ""
    };
  },
  components: {
    One_page,
    Two_page,
    Three_page,
    Banner,
    Top_menu
  },
  methods: {
    myajax: function(data) {
      let res = {};

      // var result = this.$http("/haha",data);
      // console.log(result);
      // console.log(result.PromiseStatus);
      return new Promise((resolve, reject) => {
        this.$http({
          method: "post",
          url: "/haha",
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
    },
    toggleTab: function(tab) {
      this.currentTab = tab; // tab 为当前触发标签页的组件名
    },
    open() {
      var _this = this;
      let data = {};
      data.交易类别 = this.Inputpaytype;
      data.id = this.Inputid;
      _this.myajax(data).then(
        res => {
          _this.$alert(res, "获取的信息", {
            confirmButtonText: "确定",
            callback: action => {
              console.log(action);
              _this.$message({
                type: "info",
                message: `你点击了: ${action}`
              });
            }
          });
        },
        res => {
          _this.$alert(res, "获取的信息", {
            confirmButtonText: "确定",
            callback: action => {
              console.log(action);
              _this.$message({
                type: "info",
                message: `你点击了: ${action}`
              });
            }
          });
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
head_bar {
  width: 1rem;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
label {
  float: left;
  margin: 0.2rem 0 0.2rem 0;
}
.tabs {
  float: left;
  width: 100%;
}
.tabs .tab {
  float: left;
  width: 33%;
  margin: 0.2rem 0 0 0;
}
</style>