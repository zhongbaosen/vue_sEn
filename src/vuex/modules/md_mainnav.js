import Vue from 'vue'
import store from '../store'
export default {
    state:{
        Navslist:[],
        mainstate:{
            get GetNavs(){
                return localStorage.getItem("Navslist");
            },
            get RemoveNavs(removedata){
                var arr = localStorage.getItem("Navslist");
                Array.prototype.del=function(value){ 
                    var index=0;
                    for(;index<this.length;index++){
                          if(this[index]==value) break;
                    }
               
                    this.splice(index,1); 
                    return this;
                };

                arr.del(removedata);

            }
        }
    },
    mutations:{
        setNavs(state,data){
            // 在这里把用户名和token保存起来
            console.log("缓存顶部栏标签页",data);
            (state.Navslist).push(data);
            localStorage.setItem("Navslist",data);
        }
    },
    actions:{
        userLogin(context,data){
            // 发送get请求做权限认证(真实开发建议用post的方式)
               store.commit("setNavs", data);
        }
    }
}