import Vue from 'vue'
import store from '../store'
/* 头部tab型切换所需的数据及其逻辑 */
export default {
    // 先别看这个
    state:{
        Navslist:[],
        Navsnum:0,
        mainstate:{
            get GetNavs(){
                return localStorage.getItem("Navslist");
            }
            // get RemoveNavs(removedata){
            //     var arr = localStorage.getItem("Navslist");
            //     Array.prototype.del=function(value){ 
            //         var index=0;
            //         for(;index<this.length;index++){
            //               if(this[index]==value) break;
            //         }
               
            //         this.splice(index,1); 
            //         return this;
            //     };

            //     arr.del(removedata);

            // }
        }
    },
    /* 调用这个函数就是为了改仓库里的状态值呗 */
    mutations:{
        Navs(state,data){
            /* 在这里把用户名和token保存起来 */
            /* mutation：转变 更改store中数据(state)的唯一方法，而且还可以通过dispatch去触发行为，行为在触发其才能更改，略为麻烦，也可以直接commit提交，但是要注意是同步的 */
            console.log('lq：md_mainnav.js中触发变异的事件哦~')
            // console.log("缓存顶部栏标签页",data);
            console.log("state.Navslist",state.Navslist);
            var List = state.Navslist;
            /* 找页面的路由，加入限制，如果是登录页，不执行操作 */
            if(data.content == "/login"){
                return;   //过滤登录页面
            }
            /* 不是登录页，找列表里缓存的头部标签值，如果是以前就有的值，结束 */
            for(var a in List){
                if(List[a].content){
                    if(data.content == List[a].content){
                        //state.Navsnum = ''+Number(List[a].name) - 1+'';
                        state.Navsnum = data.title;
                        return;
                    }
                }
                
            }
            var listlen = state.Navslist.length;
            // console.log(listlen);
            /* 新来的标签值就存在状态里了 */
            (state.Navslist).push(data);
        }
    },
    actions:{
        /*  原本的context可以说是包罗了一个仓库的上下文
            可以用context.state，context.getters获取随便哪个state或是getters，context.commit随便提交一个事件去改state
            用es2015解构来简化它 { 你只想要的一个或某几个参数 }，这个json就不会太大咯
        */
        setNavs({ commit },data){
            /* 发送get请求做权限认证(真实开发建议用post的方式) */
            console.log('lq：md_mainnav.js中行为的订阅哦~')
            /* commit可以用来提交mutation */
            // commit("Navs", data)
            /*  第一个参数中的getters可以拿取仓库中的所有模块下的getters方法
                通过他还可以拿取其他模块下的状态哦(前提是返回一个state)
                rootState又可以拿到所有模块下的东西 
            */
            // console.log('context', context)
            // console.log(context.getters.lq.currentUser)
            /* 是触发函数dispatch中的第二个参数哦 */
            // console.log('data', data)
            store.commit("Navs", data);
        }
    }
}