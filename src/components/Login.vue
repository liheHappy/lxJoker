<template>
<div  class="field">
  <div class="am-animation-slide-right">
  	<hx-field-header></hx-field-header>
    <ul class="am-list am-list-static am-list-border">
    	<a>
    		<li><span><i class="am-icon-mobile am-icon-md"></i></span>手机号</li>
    	</a>
    	<a>
    		<li><span><i class="am-icon-wechat am-icon-sm"></i></span>微信</li>
    	</a>
    	<a>
    		<li><span><i class="am-icon-weibo am-icon-sm"></i></span>新浪微博</li>
    	</a>
    	<a>
    		<li><span><i class="am-icon-qq am-icon-sm"></i></span>腾讯QQ</li>
    	</a>
    	<a>
    		<li><span><i class="am-icon-tencent-weibo am-icon-sm"></i></span>腾讯微博</li>
    	</a>
	</ul>
		<router-link class="aggrement" to="/Aggrement">
			<input type="checkbox" checked="checked" />我同意《内涵段子用户使用协议》
		</router-link>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Field',
  data () {
    return {
    	
    }
  },
	components:{
		"hx-field-header":{
			template:`
				<div>
					<header data-am-widget="header" class="am-header am-header-default">
			      <div class="am-header-left am-header-nav" @click="goBack">
			  			<i class=" fa am-icon-angle-left"></i>
			      </div>
			      <h1 class="am-header-title">登陆</h1>
				  </header>
			 	</div>`,
			methods:{
				goBack(){
					window.history.back();
				}
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.field{
	height: 100vh;
	width: 100%;
	background: #f5f5f5;
	position: absolute;
	z-index: 1000;
	text-align: center;
}
.aggrement{
	color: black;
}
.am-header.am-header-default{
	background:#dcd9cf;
	position: fixed;
	z-index: 100;
}
.am-header-left.am-header-nav,.am-header-default .am-header-title,.am-header-right.am-header-nav{
	color: #874c0d;
}
.field .am-list{
	margin-top: 49px;
	padding-top: 1rem;
}
.field .am-list a:nth-of-type(1){
	margin-bottom: 1rem;
}
.field .am-list a{
	display: block;
	padding: 1rem;
	background: #ffffff;
	color: black;
	text-align: left;
	margin-bottom: 0.1rem;
}
.field .am-list a:nth-of-type(2)>li>span{
	background: #6ec850;
}
.field .am-list a:nth-of-type(3)>li>span{
	background: #ff5454;
}
.field .am-list a:nth-of-type(4)>li>span{
	background: #40a7ff;
}
.field .am-list a:nth-of-type(5)>li>span{
	background: #1ac5de;
}
.field>.am-list>a>li>span{
	display: inline-block;
	background: #3dcb72;
	border-radius: 3rem;
	width: 3rem;
	height: 3rem;
	text-align: center;
	line-height: 3rem;
	padding: 0;
	color: white;
	margin-right: 1rem;
}
</style>
