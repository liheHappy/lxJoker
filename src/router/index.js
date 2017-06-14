import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Find from '@/components/Find'
import Message from '@/components/Message'
import My from '@/components/My'
import Write from '@/components/Write'
import Aggrement from '@/components/Aggrement'
import Text from '@/components/Text'
import Pic from '@/components/Pic'
import Video from '@/components/Video'
import Textshow from '@/components/Textshow'
import Picshow from '@/components/Picshow'
import Field from '@/components/Field'
import Login from '@/components/Login'
import ForgetPass from '@/components/ForgetPass'
import Register from '@/components/Register'
import Set from '@/components/Set'
import Setpass from '@/components/Setpass'
import Setnickname from '@/components/Setnickname'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/',
          name: 'Text',
          component: Text
        },
        {
          path: '/Pic',
          name: 'Pic',
          component: Pic
        },
        {
          path: '/Video',
          name: 'Video',
          component: Video
        }
      ]
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
      path: '/Textshow/:id',
      name: 'Textshow',
      component: Textshow
    },
    {
      path: '/Picshow/:id',
      name: 'Picshow',
      component: Picshow
    },
    {
      path: '/Field',
      name: 'Field',
      component: Field
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ForgetPass',
      name: 'ForgetPass',
      component: ForgetPass
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Set',
      name: 'Set',
      component: Set
    },
    {
      path: '/Setpass',
      name: 'Setpass',
      component: Setpass
    },
    {
      path: '/Setnickname',
      name: 'Setnickname',
      component: Setnickname
    }
  ]
})
