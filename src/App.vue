<template>
  <div id="app">
  <index></index>
  </div>
</template>

<script>
import _Index from "./components/Index";
export default {
  name: 'app',
  components: {
    "index":_Index
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
