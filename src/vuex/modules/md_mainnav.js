import Vue from 'vue'
import store from '../store'
export default {
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
    mutations:{
        Navs(state,data){
            // 在这里把用户名和token保存起来
            console.log("缓存顶部栏标签页",data);
            console.log("state.Navslist",state.Navslist);
            var List = state.Navslist;
            if(data.content == "/login"){
                return;   //过滤登录页面
            }
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
            console.log(listlen);
            (state.Navslist).push(data);
        }
    },
    actions:{
        setNavs(context,data){
            // 发送get请求做权限认证(真实开发建议用post的方式)
               store.commit("Navs", data);
        }
    }
}