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
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm2.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="linkTo('/index/page')">进入首页</el-button>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
  </el-col>
  <div id="src" ref="src"></div>
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
.logo{
  width: 10rem;
  top:10rem;
  text-align: center
}
.main{
  width: 100%;
  top:10rem;
}
input { 
  border: 2px solid #5E6C77; 
  font-size: 1.5em; 
  padding: .25em .5em .3125em; 
  color: #5E6C77; 
  border-radius: .25em; 
  background: transparent; 
  -webkit-transition: all .100s; 
  transition: all .100s; 
  margin:80px auto; 
} 
input:focus { 
  outline: none; 
  color: #A2ACB3; 
  border-color: #A2ACB3; 
} 
input.keyup { 
  color: white; 
  border-color: white; 
  text-shadow: 0 0 .125em white; 
  box-shadow: 0 0 .25em white,inset 0 0 .25em white; 
} 
 
body { 
  -webkit-box-align: center; 
  -webkit-align-items: center; 
      -ms-flex-align: center; 
          align-items: center; 
  -webkit-box-pack: center; 
  -webkit-justify-content: center; 
      -ms-flex-pack: center; 
          justify-content: center; 
} 
 
canvas { 
  position: absolute; 
  left: 0; 
  right: 0; 
  top: 0; 
  bottom: 0; 
  pointer-events: none; 
} 
 
input { 
  font-family: "Arial Rounded MT Bold","Helvetica Rounded",Arial,sans-serif; 
} 
 
::-webkit-input-placeholder { 
  color: #5E6C77; 
  text-shadow: 0 0 .125em transparent; 
  -webkit-transition: all .25s; 
  transition: all .25s; 
} 
 
input:focus::-webkit-input-placeholder { 
  opacity: .5; 
} 
 
::-moz-placeholder { 
  color: #5E6C77; 
  text-shadow: 0 0 .125em transparent; 
  -webkit-transition: all .25s; 
  transition: all .25s; 
} 
 
input:focus::-moz-placeholder { 
  opacity: .5; 
} 
 
:-ms-input-placeholder { 
  color: #5E6C77; 
  text-shadow: 0 0 .125em transparent; 
  -webkit-transition: all .25s; 
  transition: all .25s; 
} 
 
input:focus:-ms-input-placeholder { 
  opacity: .5; 
} 
 
html, body { 
  height: 100%; 
  overflow: hidden; 
} 
 
html { 
  background: #282E33; 
}
</style>


<script>
import Loginbg from "./canvas/loginbg";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    linkTo(url) {
      this.$router.push({ path: url });
    }
  },
  components: {
    Loginbg: Loginbg
  }
};
</script>

