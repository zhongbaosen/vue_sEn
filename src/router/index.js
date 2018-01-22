import Vue from 'vue'
import ElementUI from 'element-ui'
import { Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'   //日历
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
import Router from 'vue-router'
import Head_Bar from '@/components/Head_Bar'
import HelloWorld from '@/components/Welcome'
import _Index from '@/components/Test_api'
import Chart from '@/components/Chart'
import Myinfo from '@/components/My_info'
import Draw from '@/components/Draw'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(vueEventCalendar, {locale: 'zh'}) //可以设置语言，支持中文和英文

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
        title: '首页',
        index:"1"
      }
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
      meta: {
        title: '图表',
        index:"2-1"
      }
    },
    {
      path: '/get_record',
      name: 'Index',
      component: _Index,
      meta: {
        title: '账号记录',
        index:"2-2"
      }
    },
    {
      path: '/myinfo',
      name: 'Myinfo',
      component: Myinfo,
      meta: {
        title: '我的资料',
        index:"2-3"
      }
    },
    {
      path: '/draw',
      name: 'Draw',
      component: Draw,
      meta: {
        title: '画板',
        index:"3"
      }
    }, 
    {
      path: "*",
      redirect: '/'
    }
  ]
})
