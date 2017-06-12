// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import Hot from './Hot'
import Mint from 'mint-ui'
import { Tabbar,TabItem,Header,TabContainer,TabContainerItem,Button,Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'


Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


Vue.use(Mint);

import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Hot/>',
  components: { 
  	Hot,Tabbar,TabItem,Header,TabContainer,TabContainerItem,Button,Swipe,SwipeItem,
  	"my-footer":{
		template:`<footer><button>同意</button></footer>`
	}
  }
})
