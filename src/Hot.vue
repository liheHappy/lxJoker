<template>
  <div id="hot">
    <!-- 加载动画 -->
    <!-- <div id="loading" v-if="show" class="am-animation-fade am-animation-reverse"></div> -->

    <div class="view">
      <router-view></router-view>
    </div>
    <!-- 底部选项卡组件 -->
    <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
          <router-link to="/" class="nounder">
            <a @click="isLocal" class="newA">
            	<span class="am-icon-home am-icon-sm"></span>
              首页
            </a>
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <router-link to="/Find" class="nounder">
              <span class="am-icon-globe am-icon-sm"></span>
              发现
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab">
          <router-link :to="path" class="nounder">
            <b class="add">+</b>
          </router-link> 
        </mt-tab-item>
        <mt-tab-item id="tab3">
          <router-link to="/Message" class="nounder">
              <span class="am-icon-commenting am-icon-sm"></span>
              消息
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab4">
          <router-link to="/My" class="nounder">
            <span class="am-icon-child am-icon-sm"></span>
            我的
          </router-link>
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Hot',
  data(){
    return {
      selected:"",
      show:true,
      path:"/Field"
    }
  },
  created(){
      if(localStorage.user){
          this.path="/Write";
      }
  },
  methods:{
    isLocal(){
          if(localStorage.textData){
            localStorage.removeItem("textData");
          }
    },
    loadingImg(){
        this.show=!this.show;
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #eeeeee;
}
.view{
  overflow: auto;
}
.mint-tab-item-label span{
	display: block;
	margin-top: 4px;
	font-size: 1.5rem;
}
.mint-tab-item-label .nounder .add{
	display: block;
	background: #ff8ba7;
	color: #fff;
	line-height: 2.4rem;
	font-weight: normal;
	height: 3.2rem;
	border-radius: 10px;
	font-size: 5rem;
	margin-top: 3px;
}
.router-link-exact-active.router-link-active{
  text-decoration: none;
  color: #874c0d;
}
.newA{
  color: #666;
}
.router-link-exact-active.router-link-active a{
  color: #874c0d;
}
.nounder{
  text-decoration: none;
  color: #666;
}
.mint-header{
  background: #dcd9cf;
  color: #493d32;
}
.mint-tabbar{
  position: fixed;
  z-index: 21;
}
.mint-tabbar > .mint-tab-item.is-selected{
  color: #874c0d;
  background: none;
}
/* #loading{
  background: url('./../static/img/index.png') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 1000;
} */

/* .mint-cell-swipe .mint-cell-wrapper, .mint-cell-swipe .mint-cell-left, .mint-cell-swipe .mint-cell-right {
    -webkit-transition: -webkit-transform 1000ms ease-in-out;
    transition: -webkit-transform 1000ms ease-in-out;
    transition: transform 1000ms ease-in-out;
    transition: transform 1000ms ease-in-out, -webkit-transform 1000ms ease-in-out;
} */
</style>
