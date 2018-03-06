import Head_Bar from '@/components/Head_Bar'
import Welcome from '@/components/Welcome'
import Test_api from '@/components/Test_api'
import _Index from '@/components/Index'
import Chart from '@/components/Chart'
import Myinfo from '@/components/My_info'
import Draw from '@/components/Draw'
import Login from '@/components/Login'

var menu = [
    // redirect 重定向到登录页
    { path: "/", redirect: "/login" },
    // 登录页面，组件在Login，
    {
      path: '/login',
      name: 'login',
      component: Login,
      // 路由元信息，用来匹配值的，在导航守卫中可以检查这些原字段
      meta: {
        role: ['admin','super_editor'],
        title: '登录',
        index: "0"
      }
    },
    {
      // 嵌套路由可以不用加子路由的预格式，路由为'/index'，子路由为'path'，子路由不用加斜杠，会自动拼成/index/path
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