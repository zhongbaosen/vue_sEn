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
      <img src="http://www.sq86.cn/d/file/qqdaima/QQtouxiang/QQgexingtouxiang/2013-03-29/8da862d05d3e0b400660f01811768257.jpg" alt="" srcset="">
    </div>
  </el-form-item>
  <el-form-item label="账号">
    <el-input type="text" v-model="form.desc" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="昵称">
    <el-input type="text" v-model="form.desc" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="性别">
    <el-radio-group v-model="form.resource">
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
.head_img{
   display: inline-block;
  vertical-align:middle;
}
.head_img img{
   border-radius: 30px;
}
</style>


<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
