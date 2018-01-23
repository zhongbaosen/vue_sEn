<template>
<el-container>
    <el-header>
<el-menu class="el-menu-demo" mode="horizontal"  default-active="1">
  <el-menu-item index="1">富文本</el-menu-item>
</el-menu>
</el-header>
<el-main>
  <div class="Head_Bar">
     <Uediter :value="ueditor.value" :config="ueditor.config" ref="ue"></Uediter>
     <input type="button" value="显示编辑器内容（从控制台查看）" @click="returnContent">
</div>
</el-main>
</el-container>
</template>

<script>
import Top_menu from "./header/Top_menu";
import One_page from "./list/One_page";
import Two_page from "./list/Two_page";
import Three_page from "./list/Three_page";
import Banner from "./banner/Carousel";
import Uediter from "@/components/editor/ue.vue";
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
      Inputpaytype: "",
      listres: "",
      dat: {
        content: ""
      },
      ueditor: {
        value: "编辑器默认文字",
        config: {}
      }
    };
  },
  components: {
    Uediter
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
          _this.listres = res.列表;
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
    },
    returnContent() {
      this.dat.content = this.$refs.ue.getUEContent();
      console.log(this.dat.content);
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