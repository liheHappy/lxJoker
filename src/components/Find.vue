<template>
  <div class="find">
  	<!-- <mt-header title="发现">
	  <router-link to="/" slot="left">
	    <mt-button><span class="iconfont icon-sousuo-sousuo"></span></mt-button>
	  </router-link>
	  <mt-button slot="right"><span class="iconfont icon-dingwei"></span></mt-button>
	</mt-header> -->
	<!-- 头部 -->
	<header class="findTop">
		 <span class="iconfont icon-sousuo-sousuo"></span>
		 <p>
		 	<button class="findButton left">热吧</button>
		 	<button class="findButton right">订阅</button>
		 </p>
		 <span class="iconfont icon-dingwei"></span>
	</header>
	<!-- 轮播图 -->
	<mt-swipe :auto="4000">
	  <mt-swipe-item>
		<img src="../assets/find1.jpg">
	  </mt-swipe-item>
	  <mt-swipe-item>
	  	<img src="../assets/find2.jpg">
	  </mt-swipe-item>
	  <mt-swipe-item>
		<img src="../assets/find3.jpg">
	  </mt-swipe-item>
	</mt-swipe>
    
  </div>
</template>

<script>
export default {
  name: 'Find'
}
</script>

<style>
.findTop{
	height: 40px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #dcd9cf;
	color: #493d32;
}
.findButton{
	color: #493d32;
	border: 1px solid #493d32;
	background: #dcd9cf;
	float: left;
	height: 28px;
	width: 4rem;
}
.findButton.left{
	border-right: none;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
}
.findButton.right{
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
}
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
</style>
