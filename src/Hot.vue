<template>
  <div id="hot">
    <div class="view">
      <router-view></router-view>
    </div>
    <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
          <router-link to="/" class="nounder">
          	<span class="iconfont icon-shouye"></span>
            首页
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <router-link to="/Find" class="nounder">
            <span class="iconfont icon-faxian"></span>
            发现
          </router-link>
        </mt-tab-item>
      <mt-tab-item id="tab">
        <router-link to="/Write" class="nounder">
          <b>+</b>
        </router-link> 
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <router-link to="/Message" class="nounder">
          <span class="iconfont icon-xiaoxi"></span>
          消息
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <router-link to="/My" class="nounder">
          <span class="iconfont icon-wode"></span>
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
      selected:""
    }
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}/* 
.mint-tabbar{
  position: fixed;
} */
.view{
  overflow: auto;
}
.mint-tab-item-label span{
	display: block;
	margin-top: 4px;
	font-size: 1.5rem;
}
.mint-tab-item-label b{
	display: block;
	background: pink;
	color: #fff;
	line-height: 35px;
	height: 40px;
	border-radius: 10px;
	font-size: 2.5rem;
	margin-top: 3px;
}
.router-link-exact-active.router-link-active{
  text-decoration: none;
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
}
</style>
