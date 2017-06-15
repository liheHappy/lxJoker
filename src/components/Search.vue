<template>
  <div class="search">
  <!-- 搜索栏 -->
		<header data-am-widget="header" class="am-header am-header-default">
		  	<div class="am-header-left am-header-nav" @click="goBack">
	  			<i class=" fa am-icon-angle-left"></i>
	      	</div>
	      	<h1 class="am-header-title">
			    <mt-search v-model="value" cancel-text="" placeholder=""></mt-search>
			</h1>
	      	<div class="am-header-right am-header-nav">
			      	搜索
			</div>
		</header>
		
		<!-- 背景图片 -->
		<div class="bg"></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
	name: 'Search',
	data(){
		return {
			value:""
		}
	},
	methods:{
			goBack(){
				window.history.back();
			}
		}
}
</script>

<style scoped>
.search{
	height: 100vh;
	width: 100%;
	background:#eee;
	position: absolute;
	z-index: 100;
}
.search .bg{
	background: url('./../../static/img/jie4.png') no-repeat;
	background-size: 100% 100%;
	width: 100%;
	height: 90vh;
}
.am-header.am-header-default{
	background:#dcd9cf;
	height: 44px;
	line-height: 44px;
}
.am-header-left.am-header-nav,.am-header-default .am-header-title,.am-header-right.am-header-nav{
	color: #874c0d;
}
.am-header-default .am-header-title{
	font-size: 1.7rem;
}
.am-header-left.am-header-nav i{
	font-weight: normal;
}
.am-header .am-header-title{
	margin: 0 12% 0 4%;
}
.mint-searchbar-core{
	color: #000;
}
.search .mint-search[data-v-b75182e0]{
	margin-right: 0;
}
</style>
