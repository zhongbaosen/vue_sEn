<template>
<el-container>
    <el-header>
<el-menu class="el-menu-demo" mode="horizontal"  default-active="1">
  <el-menu-item index="1">富文本</el-menu-item>
</el-menu>
</el-header>
<el-main>
  <div class="Head_Bar">
    <el-row :gutter="20">
   <el-col :span="12">
     <Uediter :value="ueditor.value" :config="ueditor.config" ref="ue"></Uediter>
     </el-col>
     <el-col :span="4">
       <el-button type="primary"  @click="returnContent" plain>显示编辑器内容</el-button>
     </el-col>
     <el-col :span="6">
         {{dat.content}}
     </el-col>
     </el-row>
</div>
</el-main>
</el-container>
</template>

<script>
import Banner from "./banner/Carousel";
import Uediter from "@/components/editor/ue.vue";
export default {
  name: "Head_Bar",
  data() {
    return {
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