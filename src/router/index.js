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
    }
  ]
})
