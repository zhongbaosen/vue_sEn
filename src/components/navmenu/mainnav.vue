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
      editableTabsValue: ''+this.$store.state.mainav.Navsnum+'',
      editableTabs: this.$store.state.mainav.Navslist,
      tabIndex: 0,
    };
  },
  methods: {
    closeAllTab() {
      console.log("我进来了")
      this.$store.state.mainav.Navsnum = 0;
      ++this.$store.state.mainav.Navsnum;
      this.$store.state.mainav.Navslist = [];
      this.$store.state.mainav.Navslist.push({
          title: "首页",
          name: "1",
          content: "/index/page"
        });
      this.$store.state.mainav.Navsnum = "1";
      this.$router.push({path: "/index/page"});
    },
    selectTab(data){
      console.log(data);
       var arr = this.editableTabs;
       var num = Number(data.index);
       var tourl = arr[num].content;
       this.linkTo(tourl);
    },
    linkTo(url) {
      this.$router.push({path: url});
    },
    selectedNav(data){
        console.log("当前选中的是"+data);
    },
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.$store.state.mainav.Navsnum + "";
        this.editableTabs = this.$store.state.mainav.Navslist;
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.$store.state.mainav.Navsnum;
        console.log(activeName,targetName);
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
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
};
</script>