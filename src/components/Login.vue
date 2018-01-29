<template>
<el-container>
  <div class="loginbg">
  <Loginbg />
  </div>
  <el-row class="main" :gutter="20">
  <el-col :span="16" :offset="14">
    <img class="logo" src="../assets/images/logo.png" alt="" srcset="">
    </el-col>
</el-row>
    <el-row class="main" :gutter="20">
  <el-col :span="12" :offset="1">
<el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <Inputsuper :type="inputype" :inputValue="inputval" :inputnum="inputnum" :inputtype="inputtype" v-model="ruleForm.userName" v-bind:val="ruleForm.userName"/>
    <Inputsuper :type="inputype1" :inputValue="inputval1" :inputnum="inputnum1" :inputtype="inputtype1" v-model="ruleForm.password"  v-bind:val="ruleForm.password"/>
    <div style="padding: 1rem 0 2rem 0;" class="clear">
   <span class="lf" style="color:#0489cc;">帮助</span>
   <div class="rt">
     <el-checkbox v-model="checked" style="color:#a0a0a0;">一周内自动登录</el-checkbox>
     <span @click="clearCookie" style="cursor: pointer;color: #f19149;font-size: 0.75rem;margin-left: 5px;">忘记密码？</span>
   </div>
  </div>
    <el-form-item>
    <el-col :span="20">
    <el-button type="danger" @click="submitForm('ruleForm')">登录</el-button>
    </el-col>
  </el-form-item>
</el-form>
  </el-col>
</el-row>
</el-container>
</template>

<style scoped>
.loginbg {
  position: absolute;
  overflow: hidden;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAI0lEQVQIW2NkwAT/GdHE/gP5jMiCYAGQIpggXAAmiCIAEgQAAE4FBbECyZcAAAAASUVORK5CYII=)
    #222;
}
.logo {
  width: 10rem;
  top: 10rem;
  text-align: center;
}
.main {
  width: 100%;
  top: 10rem;
}
.clear {
  width: calc(100% - 2em);
  max-width: 400px;
  display: inline-block;
}
.lf {
  float: left;
}
.rt {
  float: right;
}
.el-button {
  width: 60%;
}
</style>


<script>
import Loginbg from "./canvas/loginbg";
import Inputsuper from "./input/inputsuper";
export default {
  data() {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      inputype: "input__label input__label--yoko",
      inputval: "账号",
      inputnum: "input-1",
      inputtype: "text",
      inputype1: "input__label input__label--yoko",
      inputval1: "密码",
      inputnum1: "input-2",
      inputtype1: "password",
      checked: false,
      ruleForm: {
        userName: "", //用户名
        password: "" //密码
      },
      rules: {
        user: [{ validator: checkUser, trigger: "blur" }]
      }
    };
  },
  methods: {
    myajax(data) {
      //接口
      return new Promise((resolve, reject) => {
        this.$http({
          method: "post",
          url: "/user/login",
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
    //点击登录调用方法
    submitForm(formName) {
      //保存的账号
      var name = this.ruleForm.userName;
      //保存的密码
      var pass = this.$utils.md5(this.ruleForm.password);

      var data = {};
      data.账号 = name;
      data.密码 = pass;
      if (name == "" || name == null) {
        this.$message({
          showClose: true,
          message: "失败原因:请输入正确的用户名",
          type: "error"
        });
        return;
      } else if (pass == "" || pass == null) {
        this.$message({
          showClose: true,
          message: "失败原因:请输入正确的密码",
          type: "error"
        });
        return;
      }
      //判断复选框是否被勾选 勾选则调用配置cookie方法
      if ((this.checked = true)) {
        //传入账号名，密码，和保存天数3个参数
        this.setCookie(name, pass, 7);
      } else {
        this.clearCookie();
      }

      var _this = this;
      _this.myajax(data).then(
        res => {
          console.log(res);
          if (res.状态 == "成功") {
            this.$message({
              showClose: true,
              message: "获取信息:" + res.状态,
              type: "success"
            });
            this.linkTo("/index/page");
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
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie: function() {
      console.log(document.cookie);
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "userName") {
            this.ruleForm.userName = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "userPwd") {
            this.ruleForm.password = arr2[1];
          }
        }
      }
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
    },
    linkTo(url) {
      this.$router.push({ path: url });
    }
  },
  components: {
    Loginbg: Loginbg,
    Inputsuper: Inputsuper
  },
  mounted() {
    this.$nextTick(function() {
      this.getCookie();
    });
  }
};
</script>

