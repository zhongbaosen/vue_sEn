import Vue from "vue";
import store from '../store'
export default {
    // 状态，数据源
    state: {
        row: "",
        opentoast: false //编辑窗口用
    },
    // 更改状态的唯一方法是提交，不能直接调用 这个是handler 管理器
    mutations: {
        "SET_MSG": function (state, row, opentoast) {
            console.log('lq：md_editor.js中store的修改哦~')
            console.log(state, row, opentoast)
            state.row = row;
            state.opentoast = true;
            //console.log('保存数据', state)
        }
    },
    //  store的计算属性
    getters: {
        "GET_MSG": function (state) {
            //console.log('获取数据', state)
            console.log('lq：md_editor.js中store的计算属性哦~', state)
            return state
        },
        "GET_LQ": function (state) {
            //console.log('获取数据', state)
            console.log('lq：md_editor.js中store的计算属性哦~', state)
            return state
        }
    },
    // mutation上提供了更改状态的唯一方法，而我们在外部应该是调不到它的，用actions进行触发
    actions: {
        "SET_MSG": function (state, row, opentoast) {
            //console.log('获取', state)
            console.log('lq：md_editor.js中行为的获取哦~')
            // 提交的是mutations中的对象哦 触发是store.dispatch('SET_MSG')
            store.commit("SET_MSG", row, opentoast)
        }
    }
}