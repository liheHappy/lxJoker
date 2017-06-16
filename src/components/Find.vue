<template>
  <div class="find">
		<!-- 头部 -->
  		<hx-header-tab></hx-header-tab>
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  name: 'Find',
  components:{
  	"hx-header-tab":{
  		template:`
  			<div class="am-tabs " data-am-tabs>
				<ul class="am-tabs-nav am-nav am-nav-tabs">
				  	<router-link to="/Search">
				  		<span class="am-icon-search"></span>
				  	</router-link>
				  		<li></li>
				  		<li></li>
				  		<li class="am-active"><a href="#tab1">热吧</a></li>
				    	<li><a href="#tab2">订阅</a></li>
				    	<li></li>
				    	<li></li>
				   <span class="am-icon-map-o"></span>
				  </ul>
				  <div class="am-tabs-bd">
				    <div class="am-tab-panel am-active" id="tab1">
				    <mt-swipe :auto="4000">
						  <mt-swipe-item>
							<img src="./../../static/img/find1.jpg">
						  </mt-swipe-item>
						  <mt-swipe-item>
						  	<img src="./../../static/img/find2.jpg">
						  </mt-swipe-item>
						  <mt-swipe-item>
							<img src="./../../static/img/find3.jpg">
						  </mt-swipe-item>
						</mt-swipe>
				    	<hx-find-list></hx-find-list>
				    </div>
				    <div class="am-tab-panel" id="tab2">
						
			        </div>
			    </div>
			</div>`,
		components:{
			"hx-find-list":{
		  		template:`
		  			<div>
							<div class="head" v-for="items in arr">
									<img :src="items.images" class="am-img-thumbnail" width="48" height="48"/>
									<div class="findName">
										<h5>{{items.title}}</h5>
										<p>
											<span>{{items.content}}</span>
											<i>{{items.take}} 订阅 | 总贴数 </i><b>{{items.sum}}</b>
										</p>
									</div>
									<button>订阅</button>
							</div>
				    </div>
				  `,
			  	data(){
					return {
						arr:""
					}
				},
				created(){
					// ../static/json/find.json
					// ./dist/static/json/find.json
					Vue.axios.get("../static/json/find.json").then((res)=>{
						//console.log(res.data.head)
						return res.data.head;
					}).then((data)=>{
						this.arr = data;
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
.mint-swipe-item img{
	height: 100%;
	width: 100%;
}
.find #tab1{
	padding: 0;
	background: #FFFFFF;
	margin-bottom: 4.7rem;
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
	width: 100%;
}
.am-nav>li>a{
	padding: .2rem .5rem;
	margin: .5rem 0;
	color: #493d32;
}
.am-tabs-nav.am-nav.am-nav-tabs a{
	color: #493d32;
}
.find{
	overflow: auto; 
}
.head{
	padding: 0.5rem 0.5rem 0.5rem 0rem;
	margin-left: 0.5rem;
	display: flex;
	border-bottom: 1px solid #e6e6e6;
}
.head img{
	width: 4.3rem;
	height: 4.3rem;
	margin-right: 0.6rem;
	border: 0;
}
.head button{
	background: #FFFFFF;
	border: 1px solid #999999;
	color: #999999;
	width: 4rem;
	height: 2rem;
	border-radius: 0.3rem;
	font-size: 1.4rem;
	margin-top: 1rem;
}
.head .findName{
	width: 65vw;
}
.head .findName h5{
	font-size: 1.5rem;
	margin: 0;
	color: #333333;
	font-weight: normal;
}
.head .findName p{
	font-size: 0.6rem;
	color: #999999;
	margin: 0;
}
.head .findName p span{
	display: block;
}
.head .findName p i{
	font-style: normal;
}
.head .findName p b{
	font-weight: normal;
	color: #ff6721;
}
.find #tab2{
	background: url('./../../static/img/jie1.png') no-repeat;
	height: 30vh;
	width: 100%;
	background-size: 100% 100%;
} 
</style>
