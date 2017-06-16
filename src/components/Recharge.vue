<template>
  <div class="recharge">
		<!-- 头部 -->
		<hx-recharge-header></hx-recharge-header>
		<!--余额-->
		<div class="balance">
			<h1>0</h1>
			<p>
				余额 <span class="am-icon-diamond"></span>
			</p>
		</div>
		<div class="honor">
			<ul>
				<li>
					<span class="am-icon-diamond"></span>
					<span>累计钻石</span>
					<i>0</i>
					<i class="am-icon-diamond"></i>
				</li>
				<li>
					<span class="am-icon-frown-o"></span>
					<span>当前荣誉</span>
					<i>暂无</i>
				</li>
				<li>
					<span class="am-icon-envira"></span>
					<span>下个荣誉</span>
					<i>0/1万</i>
					<i class="am-icon-diamond"></i>
				</li>
			</ul>
		</div>
		<!--充值金额-->
		<div class="money">
			<p>充值金额</p>
			<ul>
				<li>
					<span class="am-icon-diamond"></span>
					<span>10</span>
					<i>赠送10钻石（首充特惠）</i>
					<button type="button" class="am-btn am-btn-warning am-round">￥1</button>
				</li>
				<li>
					<span class="am-icon-diamond"></span>
					<span>60</span>
					<button type="button" class="am-btn am-btn-warning am-round">￥1</button>
				</li>
				<li>
					<span class="am-icon-diamond"></span>
					<span>300</span>
					<button type="button" class="am-btn am-btn-warning am-round">￥30</button>
				</li>
				<li>
					<span class="am-icon-diamond"></span>
					<span>980</span>
					<button type="button" class="am-btn am-btn-warning am-round">￥98</button>
				</li>
				<li>
					<span class="am-icon-diamond"></span>
					<span>2980</span>
					<button type="button" class="am-btn am-btn-warning am-round">￥298</button>
				</li>
				<li>
					<span class="am-icon-diamond"></span>
					<span>5880</span>
					<button type="button" class="am-btn am-btn-warning am-round">￥588</button>
				</li>
				<li>
					<span class="am-icon-diamond"></span>
					<span>15980</span>
					<i>赠送388钻石</i>
					<button type="button" class="am-btn am-btn-warning am-round">￥1598</button>
				</li>
			</ul>
			<p>
				<span>火山小提示：</span>
				<span>你的火山ID为131661112，搜索支付宝服务号“火山星球”也可以充值购买钻石哦~</span>
			</p>
		</div>
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  name: 'recharge',
  data(){
  	return {
  		id:""
  	}
  },
  methods:{

  },
  components:{
  	"hx-recharge-header":{
  		template:`
	  		<div>
					<header data-am-widget="header" class="am-header am-header-default">
			      <div class="am-header-left am-header-nav" @click="goBack">
			  			<i class=" fa am-icon-angle-left"></i>
			      </div>
			      <h1 class="am-header-title">充值</h1>
			      <div class="am-header-right am-header-nav">
			      	<i class="am-icon-pencil-square-o"></i>
			      </div>
				  </header>
				</div>
			`,
			methods:{
				goBack(){
					window.history.back();
				}
			}
  	}
  }
}
</script>

<style>
.recharge{
	height: 100vh;
	background: #ffffff;
	position: absolute;
	z-index: 100;
	overflow-x: hidden;
	width: 100%;
}
.recharge .am-header.am-header-default{
	background: #ffdc3c;
	position: fixed;
	z-index: 100;
}
.recharge .am-header-left.am-header-nav,.am-header-default .am-header-title,.am-header-right.am-header-nav{
	color: #786b2d;
}
.recharge .am-header-default .am-header-title{
	font-size: 1.5rem;
	color: #786b2d;
}
.recharge .am-header-nav i{
	font-weight: normal;
	color: #333333;
}
/*余额*/
.recharge .balance{
	margin-top: 49px;
	background: #ffdc3c;
	text-align: center;
	padding-bottom: 3rem;
}
.recharge .balance h1{
	font-size: 4rem;
	font-weight: normal;
	margin: 0;
	color: #1e1e1e;
}
.recharge .balance p{
	margin: 0;
	color: #333333;
}
.recharge .balance p span{
	color: #2e82ce;
}
/*荣誉*/
.recharge .honor{
	padding-top: 1.6rem;
	padding-bottom: 1.6rem;
	border-top: 1px solid #6B5547;
}
.recharge .honor ul{
	padding: 0;
	display: flex;
	justify-content: space-around;
}
.recharge .honor ul li{
	list-style: none;
	text-align: center;
	font-size: 1.4rem;
	color: #686868;
}
.recharge .honor ul li i{
	font-style: normal;
	color: #D8D8D8;
}
.recharge .honor ul li span{
	display: block;
}
.recharge .honor ul li span:nth-of-type(1){
	width: 5.3rem;
	height: 5.3rem;
	border: 3px solid #f6f6f6;
	border-radius: 100%;
	color: #D8D8D8;
	font-size: 3rem;
	line-height: 4.6rem;
}
/*充值金额*/
.recharge .money p{
	margin: 0;
	padding: 0.6rem;
	font-size: 1.4rem;
	background: #f6f6f6;
	color: #999999;
}
.recharge .money p:nth-of-type(2){
	padding: 1rem 0.6rem 3rem 0.6rem;
}
.recharge .money p span{
	display: block;
}
.recharge .money ul{
	padding: 0;
	margin: 0;
}
.recharge .money ul li{
	list-style: none;
	font-size: 1.4rem;
	border-top: 1px solid #f6f6f6;
	padding: 0.6rem;
	line-height: 2rem;
}
.recharge .money ul li i{
	font-style: normal;
	color: #ffd630;
	width: 5rem;
	margin-left: 4.6rem;
	font-size: 1rem;
}
.recharge .money ul li span{
	color: #1e1e1e;
}
.recharge .money ul li .am-icon-diamond{
	color: #2e82ce;
}
.recharge .money ul li .am-btn{
	padding: 0.2rem 0 0.2rem 0;
	width: 6rem;
	float: right;
	background: #FFFFFF;
	border: 1px solid #ffd630;
	color: #ffd630;
}
</style>


