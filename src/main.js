// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import Hot from './Hot'
import Mint from 'mint-ui'
import { Tabbar,TabItem,Header,TabContainer,TabContainerItem,Button,Swipe, SwipeItem,Checklist } from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'amazeui/dist/css/amazeui.min.css'
import 'amazeui/dist/js/amazeui.min.js'
import 'jquery/dist/jquery.min.js'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jsonp from 'jsonp'


Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Checklist.name, Checklist);


Vue.use(Mint);
Vue.use(VueAxios,axios,jsonp);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Hot/>',
  components: { Hot,Tabbar,TabItem,Header,TabContainer,TabContainerItem,Button,Swipe,SwipeItem,Checklist}
})
