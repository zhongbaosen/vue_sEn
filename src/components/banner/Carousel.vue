<template>
  <el-carousel :interval="4000" type="card" height="300px" width="1.2rem"  @change="change" ref="carousel">
    <el-carousel-item v-for="(item,index) in Imgurl" :key="item" name="index">
      <img :src="item" @click="clickbanner(index)" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
export default {
  data() {
    return {
      Imgurl: [
        "../../static/images/banner/1.jpg",
        "../../static/images/banner/2.jpg",
        "../../static/images/banner/3.jpg",
        "../../static/images/banner/4.jpg",
        "../../static/images/banner/5.jpg",
        "../../static/images/banner/6.jpg"
      ]
    };
  },
  methods: {
    change(index) {
      console.log(index);
    },
    clickbanner(index) {
      console.log(index);
    }
  }
};
</script>
