import Head_Bar from '@/components/Head_Bar'
import Welcome from '@/components/Welcome'
import Test_api from '@/components/Test_api'
import _Index from '@/components/Index'
import Chart from '@/components/Chart'
import Myinfo from '@/components/My_info'
import Draw from '@/components/Draw'
import Login from '@/components/Login'

var menu = [
    { path: "/", redirect: "/login" },  
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        role: ['admin','super_editor'],
        title: '登录',
        index: "0"
      }
    },
    {
      path: '/index/:name',
      name: 'Index',
      component: _Index,
      meta: {
        role: ['admin','super_editor'],
        title: '首页',
        index: "1"
      },
      children: [
        {
          path: '/index/page',
          name: 'Welcome',
          component: Welcome,
          meta: {
            role: ['admin','super_editor'],
            title: '首页',
            index: "1"
          }
        },
        {
          path: '/index/chart',
          name: 'Chart',
          component: Chart,
          meta: {
            role: ['admin','super_editor'],
            title: '图表',
            index: "2-1"
          }
        },
        {
          path: '/index/get_record',
          name: 'Test_api',
          component: Test_api,
          meta: {
            role: ['admin','super_editor'],
            title: '账号记录',
            index: "2-2"
          }
        },
        {
          path: '/index/myinfo',
          name: 'Myinfo',
          component: Myinfo,
          meta: {
            role: ['admin','super_editor'],
            title: '我的资料',
            index: "2-3"
          }
        },
        {
          path: '/index/draw',
          name: 'Draw',
          component: Draw,
          meta: {
            role: ['admin','super_editor'],
            title: '画板',
            index: "3-1"
          }
        },
        {
          path: '/index/t',
          name: 't',
          component: Head_Bar,
          meta: {
            role: ['admin','super_editor'],
            title: '显示列表',
            index: "3-2"
          }
        },
        {
          path: '/index/show',
          name: 'show',
          component: Head_Bar,
          meta: {
            role: ['admin','super_editor'],
            title: '富文本',
            index: "3-3"
          }
        }]
    }
  ]

export default menu;