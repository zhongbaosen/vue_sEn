<template>
<el-row :gutter="20">
    <el-col :span="23" :offset="0">
    <el-tabs v-model="editableTabsValue" type="card" closable @edit="handleTabsEdit" @tab-click="selectTab">
  <el-tab-pane
    :key="item.name"
    v-for="item in editableTabs"
    :label="item.title"
    :name="item.name"
    :tourl="item.url"
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
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "首页",
          name: "1",
          url:"/index/page"
        },
        {
          title: "图表",
          name: "2",
          url:"/index/chart"
        }
      ],
      tabIndex: 2
    };
  },
  methods: {
    closeAllTab() {
      this.editableTabs = [];
      this.editableTabs.push({
          title: "首页",
          name: "1",
          content: "/index/page"
        });
      this.editableTabsValue = "1";
      this.$router.push({path: "/index/page"});
    },
    selectTab(data){
       var arr = this.editableTabs;
       var num = Number(data.name) - 1;
       var tourl = arr[num].url;
       this.linkTo(tourl);
    },
    linkTo(url) {
      this.$router.push({path: url});
    },
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "首页",
          name: "1",
          content: "/index/page"
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
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
        console.log(this.editableTabsValue);

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
};
</script>