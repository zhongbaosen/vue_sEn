import Vue from 'vue'
import store from '../store'
export default {
    state:{
        currentUser:{
            get UseruserID(){
                return localStorage.getItem("User_userID");
            },
            get UserHeadImg(){
                return localStorage.getItem("User_headImg");
            },
            get UserSex(){
                return localStorage.getItem("User_sex");
            },
            get UserRandom(){
                return localStorage.getItem("User_random");
            },
            get UserName(){
                return localStorage.getItem("User_name");
            }
        }
    },
    mutations:{
        setUser(state,data){
            // 在这里把用户名和token保存起来
            console.log("mutations",data);
            localStorage.setItem("User_userID",data.账号);
            localStorage.setItem("User_headImg",data.头像);
            localStorage.setItem("User_sex",data.性别);
            localStorage.setItem("User_random",data.随机码);
            localStorage.setItem("User_name",data.昵称);
        }
    },
    getters: {
        lq: function (state) {
            // console.log('123')
            // return state
        }
    },
    actions:{
        userLogin(context,data){
            // 发送get请求做权限认证(真实开发建议用post的方式)
               store.commit("setUser", data);
        }
    }
}