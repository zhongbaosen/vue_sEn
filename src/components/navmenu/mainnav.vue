<template>
<el-row :gutter="20">
    <el-col :span="23" :offset="0">
    <el-tabs v-model="editableTabsValue" type="card" closable @edit="handleTabsEdit" @tab-click="selectTab" :value="tabIndex">
  <el-tab-pane
    :key="item.name"
    v-for="item in editableTabs"
    :label="item.title"
    :name="item.name"
  >
  </el-tab-pane>
</el-tabs>
</el-col>
  <el-col :span="1" :offset="25">
  <el-button
    size="small"
    @click="closeAllTab()"
  >
    关闭所有
  </el-button>
  </el-col>
</el-row>
</template>
<script>
export default {
  data() {
    return {
      editableTabsValue: "" + this.$store.state.mainav.Navsnum + "",
      editableTabs: this.$store.state.mainav.Navslist,
      tabIndex: 0
    };
  },
  computed: {
    listendata() {
      return this.$store.state.mainav.Navsnum;
    },
    listenlist() {
      return this.$store.state.mainav.Navslist;
    }
  },
  watch:{
    listendata:function(a,b){
      this.editableTabsValue = a;
      // console.log("修改前卫：" + a);  
      // console.log("修改后为：" + b); 
    },
    listenlist:function(c,d){
      this.editableTabs = c;
    }
  },
  methods: {
    closeAllTab() {
      this.$store.state.mainav.Navslist = [];
      this.$store.state.mainav.Navslist.push({
        title: "首页",
        name: "首页",
        content: "/index/page"
      });
      this.$store.state.mainav.Navsnum = "首页";
      this.$router.push({ path: "/index/page" });
    },
    selectTab(data) {
      console.log("你选了我:", data);
      var arr = this.editableTabs;
      var num = Number(data.index);
      var tourl = arr[num].content;
      this.linkTo(tourl);
    },
    linkTo(url) {
      this.$router.push({ path: url });
    },
    selectedNav(data) {
      console.log("当前选中的是" + data);
    },
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        //当前没用到
        let newTabName = ++this.$store.state.mainav.Navsnum + "";
        this.editableTabs = this.$store.state.mainav.Navslist;
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        //关闭标签时的效果
        let tabs = this.$store.state.mainav.Navslist;
        let activeName = this.$store.state.mainav.Navsnum;
        console.log(tabs,activeName);
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        let Nowtabs = tabs.filter(tab => tab.name !== targetName);
        if (Nowtabs.length == 0) {
          let index = {
            title: "首页",
            name: "首页",
            content: "/index/page"
          };
          this.editableTabs.push(index);
          this.editableTabsValue = index.name;
          this.$router.push({ path: "/index/page" });
          Nowtabs.push(index);
        }
        this.$store.state.mainav.Navslist = Nowtabs;
        this.editableTabs = Nowtabs;
      }
    }
  }
};
</script>