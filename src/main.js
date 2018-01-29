// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Req from './utils/request'
import Utils from './utils/utils' 
import store from './vuex/store'
import $ from 'jquery'
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.prototype.$http = Req;
Vue.prototype.$utils = Utils;
var msg = "";

router.beforeEach((to, from, next) => {
  console.log(to);
  if(!to.name){
    msg = "非法访问";
  }else{
    msg = "管理平台" + "(" + to.meta.title + ") - Make by sEn";
  }
  //window.document.title = "管理平台" + "(" + to.meta.title + ") - Make by sEn";
  
  window.document.title = msg;
  // setInterval(function(){
  //   titAn()
  // },1000);//设置时间间隔运行 
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  render: h => h(App)
})

function titAn() {
  msg = msg.substring(1,msg.length)+ msg.substring(0,1);
  window.document.title = msg;
}
