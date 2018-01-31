<template>
<el-container>
  <el-header>
<el-menu class="el-menu-demo" mode="horizontal"  default-active="1">
  <el-menu-item index="1">表格模拟</el-menu-item>
</el-menu>
</el-header>
<el-main>
  <div class="Testapi">
      <img class="logo" src="../assets/logo.png">
      <br>
<label for="">账号</label>
<el-input v-model="Inputuser" placeholder="请输入账号" :Inputuser ="Inputuser"></el-input>
<label for="">随机码</label>
<el-input v-model="Inputrandom" placeholder="请输入随机码" :Inputrandom ="Inputrandom"></el-input>
<div class="btn">
<el-button type="primary" @click="open" :loading="is_btnload">{{btn_text}}</el-button>
</div>
    <el-table
      ref="multipleTable"
      :data="listres"
      align="center"
      class="ntable"
      style="width: 100%;height:40rem;"
      @selection-change="handleSelectionChange">
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="id"
        label="id">
      </el-table-column>
      <el-table-column
        prop="交易类别"
        label="交易类别">
      </el-table-column>
      <el-table-column
        prop="积分"
        label="积分">
      </el-table-column>
      <el-table-column
        prop="交易账户"
        label="交易账户">
      </el-table-column>
      <el-table-column
        prop="余额"
        label="余额">
      </el-table-column>
      <el-table-column
        prop="录入时间"
        label="录入时间">
      </el-table-column>
      <el-table-column
        prop="说明"
        label="说明">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizechage"
      @current-change="page"
      :current-page="currentpage"
      :page-sizes="[10, 100, 500, 1000]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total_row">
    </el-pagination>
    <handleedit ref="handle"></handleedit>
  </div>
</el-main>
</el-container>  
</template>

<style>
.Testapi {

}
.el-table__body-wrapper{
  overflow-y: scroll;
  height: 37.6rem;
}
::-webkit-scrollbar-track-piece{
background-color:#fff;/*滚动条的背景颜色*/
-webkit-border-radius:0;/*滚动条的圆角宽度*/
}
::-webkit-scrollbar{
width:8px;/*滚动条的宽度*/
height:8px;/*滚动条的高度*/
}
::-webkit-scrollbar-thumb:vertical{/*垂直滚动条的样式*/
height:50px;
background-color:#999;
-webkit-border-radius:4px;
outline:2px solid #fff;
outline-offset:-2px;
border:2px solid #fff;
}
::-webkit-scrollbar-thumb:hover{/*滚动条的hover样式*/
height:50px;
background-color:#9f9f9f;
-webkit-border-radius:4px;
}
::-webkit-scrollbar-thumb:horizontal{/*水平滚动条的样式*/
width:5px;
background-color:#CCCCCC;
-webkit-border-radius:6px;
}
</style>


<script>
import Handleedit from "./toast/Handle_edit";
export default {
  name: "Test_api",
  data() {
    return {
      Inputuser: "15817319768",
      Inputrandom: "1d5bc67956a9f5ccbd0828dc6c2ec1b0",
      count: 10, //每页条数
      currentpage: 1, //当前页数
      is_btnload: false, //按钮是否显示加载中
      total_row: 0, //当前总条数
      btn_text: "获取账号记录",
      listres: [],
      dialogFormVisible: true,
      rowlist: []
    };
  },
  components: {
    Handleedit
  },
  methods: {
    myajax: function(data) {
      let res = {};
      this.is_btnload = true;
      this.btn_text = "加载中...";
      return new Promise((resolve, reject) => {
        this.$http({
          method: "post",
          url: "/get_list",
          data: data
        }).then(
          response => {
            console.log("获取信息成功");
            console.log(response);
            resolve(response.data);
          },
          response => {
            console.log("获取信息失败");
            console.log(response);
            reject(response.data);
          }
        );
      });
    },
    open() {
      var _this = this;
      let data = {};
      data.账号 = this.Inputuser;
      data.随机码 = this.Inputrandom;
      data.每页条数 = this.count;
      data.页数 = this.currentpage;
      _this.myajax(data).then(
        res => {
          if (res.状态 == "成功") {
            res.账号 = "";
            _this.listres = res.积分列表;
            this.total_row = Number(res.总条数);
            this.is_btnload = false;
            this.btn_text = "获取账号记录";
            this.$message({
              showClose: true,
              message: "获取信息:"+res.状态,
              type: "success"
            });
            //console.log(JSON.stringify(_this.listres));
          } else {
            this.$message({
              showClose: true,
              message: "失败原因:"+res.状态,
              type: "error"
            });
            this.is_btnload = false;
            this.btn_text = "获取账号记录";
          }

          //   _this.$alert(res, "获取的信息", {
          //     confirmButtonText: "确定",
          //     callback: action => {
          //       console.log(action);
          //       _this.$message({
          //         type: "info",
          //         message: `你点击了: ${action}`
          //       });
          //     }
          //   });
        },
        res => {
          this.is_btnload = false;
          this.btn_text = "获取账号记录";
          //   _this.$alert(res, "获取的信息", {
          //     confirmButtonText: "确定",
          //     callback: action => {
          //       console.log(action);
          //       _this.$message({
          //         type: "info",
          //         message: `你点击了: ${action}`
          //       });
          //     }
          //   });
        }
      );
    },
    page(nowpage) {
      //获取当前页数
      var _this = this;
      _this.currentpage = nowpage;
      console.log("当前页数:" + _this.currentpage);
      _this.open();
    },
    sizechage(nowrow) {
      //更改每页的数量
      var _this = this;
      _this.count = nowrow;
      console.log("每页条数:" + _this.count);
      _this.open();
    },
    handleEdit(index, row) {
      this.$store.dispatch("SET_MSG", row, true);
      this.rowlist = row;
      this.$refs.handle.openit(); //调用子组件的函数
    },
    handleDelete(index, row) {
      this.$store.dispatch("SET_MSG", row, true);
      this.rowlist = row;
    },
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {    //获取勾选后每行的信息
        this.multipleSelection = val;
        console.log(val);
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
.logo {
  text-align: center;
}
.btn {
  margin: 0.8rem 0 0 0;
}
</style>