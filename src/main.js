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

/* eslint-disable no-new */
/*  把状态从根组件注入到每一个子组件中，也是注册 
    注册到根组件中：store，router（vuex，vue-route）
    有一个<App/>的标签生成在index.html中
    当webpack解析时，会把静态资源放在一个8080端口的服务器上，会指定进入http://localhost:8080/index.html（即webpack.dev.conf中devServer参数）
    webpack使用HTML插件在内存中生成一个index.html的虚拟文件（没有在硬盘中创建这个文件），而且引用app.js和common.js
    app.js（main.js中引用的css，js，img等都会糅合在里面），common.js（智能提取出公共部分）
    这个文件app.js启动，运行下面的这个vue实例，业务才正式开启（所以这个放哪，顺序没有关系，但为了合乎逻辑，就提到前面去）
    业务1 : 进入组件App，即入口组件App
    业务2 ：App中有路由组件，用来切换页面，进入路由组件（Login.vue 写页面什么的最讨厌）
*/
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  render: h => h(App) // 基本没啥逻辑，直接切换为路由的组件，div大到铺面屏幕
  // components: { App }
})

// 路由实例的一个方法，不加$，很奇怪啊
/* 
    导航守卫，路由跳转前做一些验证 to 要进入的路由 from 要离开的路由    
    每次的路由都会经过这个中转站，路由中设置了所要使用的url，设置了url的结构，#锚点的变化为路由的切换。
*/
router.beforeEach((to, from, next) => {
  /* to，from是方法中就会传过来的参数。无需自己赋值 */
  console.log('tip：main.js中跳转的验证哦~')
  console.log('tip：main.js中要进入的路由：', to)
  console.log('tip：main.js中要离开的路由：', from)
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
  /* 拿取仓库中mainav模块下Navsnum的状态（数据），匹配路由中的属性 */
  store.state.mainav.Navsnum = to.meta.title;
  console.log('tip：main.js中头部导航的个数哦~')
  console.log(store.state.mainav.Navsnum, to.meta.title)
  var Nowpath = to.path;

  // console.log(to.matched);
  // to.matched.some(record => {
  //     console.log(record);
  // });
  /* msg：网页标题 */
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
  /*  请求的限制都走完了，到真正的路由文件里去，
      比如说路由为/index/page，查route的routes中，有一个路由Welcome，用的组件是Welcome组件
      之后next()，进入Welcome组件的vue中去。 
  */ 
  next()
})

function titAn() {
  msg = msg.substring(1, msg.length) + msg.substring(0, 1);
  window.document.title = msg;
}
