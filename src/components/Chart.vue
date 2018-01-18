<template>
<el-container>
<el-header>
<el-menu class="el-menu-demo" mode="horizontal"  default-active="1">
  <el-menu-item index="1">图表示例</el-menu-item>
</el-menu>
</el-header>
<el-main>
<el-row>
  <el-col :span="12"><monthly-income :chart-data="linedata" :options="lineoptions"/></el-col>
  <el-col :span="12"><bar-income :chart-data="bardata" :options="baroptions"/></el-col>
</el-row>
<el-row>
  <el-col :span="12"><doughnut-income :chart-data="doughnutdata" :options="doughnutoptions"/></el-col>
  <el-col :span="12"><pie-income :chart-data="piedata" :options="pieoptions"/></el-col>
</el-row>
</el-main>
</el-container>
</template>

<script>
import MonthlyIncome from "./chart/Line";
import BarIncome from "./chart/Bar";
import DoughnutIncome from "./chart/Doughnut";
import PieIncome from "./chart/Pie";
export default {
  data() {
    return {
      defultdata: {
        labels: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月"
        ],
        datasets: [
          {
            label: "登录人数",
            data: [40, 39, 50, 40, 39, 80],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)"
            ],
            pointBorderColor: "#fff",
            cubicInterpolationMode: "monotone"
          },
          {
            label: "访问人数",
            data: [80, 20, 50, 55, 26, 14],
            backgroundColor: [
              "rgba(0, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)"
            ],
            pointBorderColor: "#fff",
            cubicInterpolationMode: "monotone"
          }
        ]
      },
      linedata: { labels: [], datasets: [] },
      lineoptions: { responsive: true, maintainAspectRatio: false },
      bardata: { labels: [], datasets: [] },
      baroptions: { responsive: true, maintainAspectRatio: false },
      doughnutdata: { labels: [], datasets: [] },
      doughnutoptions: { responsive: true, maintainAspectRatio: false },
      piedata: { labels: [], datasets: [] },
      pieoptions: { responsive: true, maintainAspectRatio: false }
    };
  },
  components: {
    "monthly-income": MonthlyIncome,
    "bar-income": BarIncome,
    "doughnut-income": DoughnutIncome,
    "pie-income": PieIncome
  },
  mounted() {
    this.LineData(); //线性图调用
    this.BarData(); //柱状图调用
    this.DoughnutData(); //环形图调用
    this.PieData(); //圆饼图调用
  },
  methods: {
    LineData() {
      this.linedata = this.defultdata;
    },
    BarData() {
      this.bardata = this.defultdata;
    },
    DoughnutData() {
      this.doughnutdata = this.defultdata;
    },
    PieData() {
      this.piedata = this.defultdata;
    }
  }
};
</script>