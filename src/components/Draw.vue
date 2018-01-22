<template>
<el-container>
  <el-header>
<el-menu class="el-menu-demo" mode="horizontal"  default-active="1">
  <el-menu-item index="1">画图板</el-menu-item>
</el-menu>
</el-header>
<el-main>
    <el-row>
   <Drawbg />
   </el-row>
       <el-row>
           <Countdown />
        </el-row>   
</el-main>
</el-container>  
</template>

<style>
.Testapi {
}
.el-table__body-wrapper {
  overflow-y: scroll;
  height: 37.6rem;
}
::-webkit-scrollbar-track-piece {
  background-color: #fff; /*滚动条的背景颜色*/
  -webkit-border-radius: 0; /*滚动条的圆角宽度*/
}
::-webkit-scrollbar {
  width: 8px; /*滚动条的宽度*/
  height: 8px; /*滚动条的高度*/
}
::-webkit-scrollbar-thumb:vertical {
  /*垂直滚动条的样式*/
  height: 50px;
  background-color: #999;
  -webkit-border-radius: 4px;
  outline: 2px solid #fff;
  outline-offset: -2px;
  border: 2px solid #fff;
}
::-webkit-scrollbar-thumb:hover {
  /*滚动条的hover样式*/
  height: 50px;
  background-color: #9f9f9f;
  -webkit-border-radius: 4px;
}
::-webkit-scrollbar-thumb:horizontal {
  /*水平滚动条的样式*/
  width: 5px;
  background-color: #cccccc;
  -webkit-border-radius: 6px;
}
</style>


<script>
import Draw_BG from "./canvas/draw";
import Countdown from "./canvas/countdown";
export default {
  name: "Draw",
  data() {
    return {};
  },
  components: {
    "Drawbg": Draw_BG,
    "Countdown":Countdown
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>