import Vue from 'vue'
import ElementUI from 'element-ui'
import { Input } from 'element-ui'
import Menu from './menu'   //加载权限菜单
import 'element-ui/lib/theme-chalk/index.css'   //日历
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(vueEventCalendar, { locale: 'zh' }) //可以设置语言，支持中文和英文

export default new Router({
  mode: 'hash',
  routes: Menu
})
