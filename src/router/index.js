import Vue from 'vue'
import ElementUI from 'element-ui'
import { Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import Head_Bar from '@/components/Head_Bar'
import HelloWorld from '@/components/HelloWorld'
import _Index from '@/components/Test_api'
import Chart from '@/components/Chart'
import Myinfo from '@/components/My_info'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/t',
      name: 'Head_Bar',
      component: Head_Bar
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/get_record',
      name: 'Index',
      component: _Index,
      meta: {
        title: '账号记录'
      }
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
      meta: {
        title: '图表'
      }
    },
    {
      path: '/myinfo',
      name: 'Myinfo',
      component: Myinfo,
      meta: {
        title: '我的资料'
      }
    }, 
    {
      path: "*",
      redirect: '/'
    }
  ]
})
