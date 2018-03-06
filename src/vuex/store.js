import Vue from 'vue'
/* 要注册到dependencies中，不管是开发还是发布都要用 */
import Vuex from 'vuex'
import editModule from './modules/md_editor'
import userModule from './modules/md_userinfo'
import MainNavModule from './modules/md_mainnav'
/*  vue提供给第三方拿到vue对象的方法，功能是注册
    vuex集中管理方法    
*/
Vue.use(Vuex)

/* vuex应用的核心是store，包含着应用中大部分的状态，他是响应式的 */
const store = new Vuex.Store({
    /* 避免臃肿，可以将store分成若干模块，每个模块有自己的state mutation action getting ...  */
    modules:{
        editor:editModule,
        user:userModule,
        mainav:MainNavModule
    }
})
export default store