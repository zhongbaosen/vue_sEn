import Vue from "vue";
import store from '../store'
export default {
    state: {
        row: "",
        opentoast: false //编辑窗口用
    },
    mutations: {
        "SET_MSG": function (state, row, opentoast) {
            state.row = row;
            state.opentoast = true;
            //console.log('保存数据', state)
        }
    },
    getters: {
        "GET_MSG": function (state) {
            //console.log('获取数据', state)
            return state
        }
    },
    actions: {
        "SET_MSG": function (state, row, opentoast) {
            //console.log('获取', state)
            store.commit("SET_MSG", row, opentoast)
        }
    }
}