<template>
<el-container class="leftnav-bg">
  <el-header>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
  </el-header>
<el-main>
<el-menu
      :default-active="navselected"
      :default-openeds="navopen"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      ref="leftnav">
      <el-menu-item index="1"  @click="linkTo('/')">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>基本功能</span>
        </template>
        <el-menu-item-group>
          <template slot="title">系统概况</template>
          <el-menu-item index="2-1" @click="linkTo('/chart')">图表</el-menu-item>
          <el-menu-item index="2-2" @click="linkTo('/get_record')">账户记录</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="我的">
          <el-menu-item index="2-3"  @click="linkTo('/myinfo')">我的资料</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">我的设置</template>
          <el-menu-item index="2-4-1">资料修改</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-main>
  </el-container>
</template>

<style>
.leftnav-bg{
  background-color: rgb(84, 92, 100);
}
.el-menu-vertical-demo {
}
.el-menu{
  border:none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 2000px;
  max-height: auto;
  max-width: auto;
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner{
  background-color: #409EFF;
}
.el-radio-button:first-child .el-radio-button__inner{
  border-left: 1px solid #409EFF;
}
</style>

<script>
export default {
  data() {
    return {
      clientHeight: 0,
      isCollapse:true,
      navselected:"",
      pathstatus:"",
      navopen:[]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log("我是打开菜单的方法");
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("我是关闭菜单的方法");
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log("我是选中菜单的方法");
      console.log(key, keyPath);
      this.navselected = key;
    },
    linkTo(url,index) {
      console.log("点击的序列为:"+this.navselected);
      this.$router.push({ path: url });
    }
  },
  watch:{
      isCollapse: function(val) { //此处不要使用箭头函数
           if(val){
             this.navopen = [];
           }else{
             this.navopen = ["1","2","3"];
           }
      },
      pathstatus:function(data){
        console.log(data);
      },
      $route (to,from){
        console.log(to,from);
        this.pathstatus = to.path;
      }
  },
  mounted(){
     var _this = this;
     console.log(this.$route);  //页面刷新后会自动加载此方法
     
  }
};
</script>