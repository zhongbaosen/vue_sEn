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
      <el-menu-item index="1"  @click="linkTo('/index/page')">
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
          <el-menu-item index="2-1" @click="linkTo('/index/chart')">图表</el-menu-item>
          <el-menu-item index="2-2" @click="linkTo('/index/get_record')">账户记录</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="我的">
          <el-menu-item index="2-3"  @click="linkTo('/index/myinfo')">我的资料</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">账号管理</template>
          <el-menu-item index="2-4-1">添加账号</el-menu-item>
          <el-menu-item index="2-4-2">资料修改</el-menu-item>
        </el-submenu>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>展示功能</span>
        </template>
        <el-menu-item-group>
          <template slot="title">编辑列表</template>
          <el-menu-item index="3-1" @click="linkTo('/index/draw')">
        <i class="el-icon-setting"></i>
        <span slot="title">画板</span>
      </el-menu-item>
          <el-menu-item index="3-2" @click="linkTo('/index/t')">
          <i class="el-icon-document"></i>
          <span slot="title">显示列表</span>
          </el-menu-item>
          <el-menu-item index="3-3" @click="linkTo('/index/show')">
          <i class="el-icon-edit"></i>
          <span slot="title">富文本</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-main>
  </el-container>
</template>

<style scoped>
.leftnav-bg {
  background-color: rgb(84, 92, 100);
}
.el-menu-vertical-demo {
}
.el-menu {
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 2000px;
  max-height: auto;
  max-width: auto;
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  background-color: #409eff;
}
.el-radio-button:first-child .el-radio-button__inner {
  border-left: 1px solid #409eff;
}
/*
自定义修改样式
*/
li.el-submenu.is-active > .el-submenu__title span {
  color: rgb(255, 208, 75);
}
li.el-submenu.is-opened {
  border: 1px solid;
}
li.el-submenu.is-active {
  color: rgb(255, 208, 75);
}
</style>

<script>
export default {
  data() {
    return {
      clientHeight: 0,
      isCollapse: true,
      navselected: "",
      pathstatus: "",
      navopen: []
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
    linkTo(url, index) {
      console.log("点击的序列为:" + this.navselected);
      this.$router.push({ path: url });
    }
  },
  watch: {
    isCollapse: function(val) {
      //此处不要使用箭头函数
      if (val) {
        this.navopen = [];
      } else {
        this.navopen = ["1", "2", "3", "4"];
      }
    },
    pathstatus: function(data) {
      console.log(data);
    },
    $route(to, from) {
      var arrlen = this.$store.state.mainav.Navslist.length;
  console.log(arrlen);
      let _list = this.$store.state.mainav.Navslist;
      var _arr = new Array();
      if (arrlen == 0) {
        this.$store.state.mainav.Navsnum = "0";
      } else {
        for (var a in _list) {
          if (!_list.hasOwnProperty(a)) {
            continue;
          }
          console.log(_list[a]);
          if (_list[a].content == to.path) {
            console.log("dddd:",this.$store.state.mainav.Navslist[a].name);
            this.$store.state.mainav.Navsnum = _list[a].title;
          }

          _arr.push(_list[a].name);
        }
      }

      this.pathstatus = to.path;
      this.navselected = to.meta.index;
    }
  },
  mounted() {
    var _this = this;
    console.log("当前的路径为:", this.$route); //页面刷新后会自动加载此方法
    this.navselected = this.$route.meta.index;
  }
};
</script>