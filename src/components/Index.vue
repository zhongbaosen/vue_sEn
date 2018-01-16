<template>

  <div id="index">
    <el-container>
      <el-header class="header" style="height:80px;">
      <Headnav></Headnav>
      </el-header>
    </el-container>

    <el-container>
      <el-aside class="aside">
         <Leftnav></Leftnav>
        </el-aside>
        <keep-alive>
        <el-main>
          <Content></Content>
        </el-main> 
        </keep-alive>
    </el-container>

      <el-container>
        <el-footer class="footer">
          <Footer></Footer>
        </el-footer>    
    </el-container>  
  </div>
</template>

<style scoped>
.header{
     background: rgb(84, 92, 100);
}
.aside{
  width: 200px;
}
.footer{
     background: rgb(84, 92, 100);
}
</style>


<script>
import Content from "./Test_api";
import Leftnav from "./navmenu/leftnav";
import Headnav from "./navmenu/headnav";
import Footer from "./navmenu/footer";
export default {
  data() {
    return {};
  },
  components: {
    Content,
    Leftnav,
    Headnav,
    Footer
  }
};
</script>
