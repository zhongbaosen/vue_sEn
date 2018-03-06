// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Req from './utils/request'
import Utils from './utils/utils'
// vuex 集中管理vue中的大部分状态，这里又把状态进行了封装
import store from './vuex/store'
import $ from 'jquery'
/* 百度编辑器 */
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.prototype.$http = Req;
Vue.prototype.$utils = Utils;
var msg = "";

// 路由实例的一个方法，不加$，很奇怪啊
/* 
    导航守卫，路由跳转前做一些验证 to 要进入的路由 from 要离开的路由    
    每次的路由都会经过这个中转站，路由中设置了所要使用的url，设置了url的结构，#锚点的变化为路由的切换。
*/
router.beforeEach((to, from, next) => {
  /* to，from是方法中就会传过来的参数。无需自己赋值 */
  console.log('lq：main.js中跳转的验证哦~')
  console.log('lq：main.js中要进入的路由：', to)
  console.log('lq：main.js中要离开的路由：', from)
  /*  action的触发方法是dispatch，这里是说触发了一个叫setNavs的mutation 
      可传递多个参数，这里的第二个参数会在setNavs中的第二个参数中
      这里的第二个参数是要进入的路由的元信息
      meta: 
      {
        role: ['admin','super_editor'],
        title: '我的资料',
        index: "2-3"
      }
      这个方法的意思是设置除了登录页的页面不用，其他页面要更新其tab数据（tab数据放在了仓库中，所有的子组件都可以用），最终根据其变动（响应式的）加入头部tab切换导航
  */
  store.dispatch("setNavs", {
    title: to.meta.title,
    name: to.meta.title,
    content: to.path
  })
  store.state.mainav.Navsnum = to.meta.title;
  var Nowpath = to.path;

  // console.log(to.matched);
  // to.matched.some(record => {
  //     console.log(record);
  // });
  if (!to.name) {
    msg = "非法访问";
  } else {
    msg = "管理平台" + "(" + to.meta.title + ") - Make by sEn";
  }
  window.document.title = "管理平台" + "(" + to.meta.title + ") - Make by sEn";

  window.document.title = msg;
  setInterval(function(){
    titAn()
  },1000);//设置时间间隔运行 
  next()
})

/* eslint-disable no-new */
/* 把状态从根组件注入到每一个子组件中，也是注册 */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  render: h => h(App)
  // components: { App }
})

function titAn() {
  msg = msg.substring(1, msg.length) + msg.substring(0, 1);
  window.document.title = msg;
}
