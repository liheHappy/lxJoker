import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Find from '@/components/Find'
import Message from '@/components/Message'
import My from '@/components/My'
import Write from '@/components/Write'
import Aggrement from '@/components/Aggrement'
import Set from '@/components/Set'
import Register from '@/components/Register'
import Forget from '@/components/Forget'
import Userinfo from '@/components/Userinfo'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Write',
      name: 'Write',
      component: Write
    },
    {
      path: '/Aggrement',
      name: 'Aggrement',
      component: Aggrement
    },
    {
      path: '/Set',
      name: 'Set',
      component: Set
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/Userinfo',
      name: 'Userinfo',
      component: Userinfo
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
