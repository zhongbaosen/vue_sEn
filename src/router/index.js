import Vue from 'vue'
import ElementUI from 'element-ui'
import {Input} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import Head_Bar from '@/components/Head_Bar'
import HelloWorld from '@/components/HelloWorld'
import _Index from '@/components/Index'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/t',
      name: 'Head_Bar',
      component: Head_Bar
    },
    {
      path: '/hh',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Index',
      component: _Index
    }
  ]
})
