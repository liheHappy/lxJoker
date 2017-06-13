<template>
  <div class="find">
		<!-- 头部 -->
  		<hx-header-tab></hx-header-tab>
		<!-- 轮播图 -->
		<!-- <mt-swipe :auto="4000">
		  <mt-swipe-item>
			<img src="../assets/find1.jpg">
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../assets/find2.jpg">
		  </mt-swipe-item>
		  <mt-swipe-item>
			<img src="../assets/find3.jpg">
		  </mt-swipe-item>
		</mt-swipe> -->
		<!--发现界面-->
		
		<!-- <img src="../assets/head1.jpg" /> -->
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  name: 'Find',
  components:{
  	"hx-header-tab":{
  		template:`<div class="am-tabs " data-am-tabs>
				  <ul class="am-tabs-nav am-nav am-nav-tabs">
				  	<span class="iconfont icon-sousuo-sousuo "></span>
				  		<li></li>
				  		<li></li>
				  		<li class="am-active"><a href="#tab1">热吧</a></li>
				    	<li><a href="#tab2">订阅</a></li>
				    	<li></li>
				    	<li></li>
				   <span class="iconfont icon-dingwei"></span>
				  </ul>
				  <div class="am-tabs-bd">
				    <div class="am-tab-panel am-active" id="tab1">
				    <mt-swipe :auto="4000">
						  <mt-swipe-item>
							<img src="./static/img/find1.jpg">
						  </mt-swipe-item>
						  <mt-swipe-item>
						  	<img src="./static/img/find2.jpg">
						  </mt-swipe-item>
						  <mt-swipe-item>
							<img src="./static/img/find3.jpg">
						  </mt-swipe-item>
						</mt-swipe>
				    	<hx-find-list></hx-find-list>
				    </div>
				    <div class="am-tab-panel" id="tab2">222</div>
				  </div>
				</div>`,
		components:{
			"hx-find-list":{
		  		template:`<div>
							<div class="head" v-for="items in arr">
									<img :src="items.images" class="am-img-thumbnail" width="48" height="48"/>
							</div>
				    	</div>`,
			  	data(){
					return {
						arr:""
					}
				},
				created(){
					Vue.axios.get("../static/json/find.json").then((res)=>{
						//console.log(res.data.head)
						return res.data.head;
					}).then((data)=>{
						this.arr = data;
						console.log(data[0].images)
						//console.log(this.arr);
						//console.log(data.head);
					})
				}
		  	}
		}
  	}
  	
  }	//components结尾
}
</script>

<style>

.mint-swipe{
	height: 25vh;
}
.mint-swipe-items-wrap{
	background: green;
}
.mint-swipe-item img{
	height: 100%;
	width: 100%;
}

.am-tabs-bd{
	border: none;
	z-index: -1;
	padding-top: 44px;
}
.am-tabs-nav.am-nav.am-nav-tabs{
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #dcd9cf;
	color: #493d32;
	position:fixed;
	z-index: 100;
	width: 100% 
}
.am-nav>li>a{
	padding: .2rem .5rem;
	margin: .5rem 0;
	color: #493d32;
}
.am-nav-tabs>li.am-active>a, .am-nav-tabs>li.am-active>a:focus, .am-nav-tabs>li.am-active>a:hover{
	background: pink;
	border-radius: 7px;
}

.find{
	overflow: auto; 
}
</style>
