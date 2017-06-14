<template>
	
  <div class="Set am-animation-slide-right">
  	<hx-Set-header></hx-Set-header>
  	<!--<hx-Set-input></hx-Set-input>-->
	<div>
		<div class="set1">
			<mt-checklist align="right" v-model="value" :options="options"></mt-checklist>
		</div>
		<div class="set2">
			<span>字体大小</span>
			<div data-am-widget="tabs" class="am-tabs am-tabs-default">
      			<ul class="am-tabs-nav am-cf">
		          <li class="am-active"><a>小</a></li>
		          <li class=""><a>中</a></li>
		          <li class=""><a>大</a></li>
		     	</ul>
		 	</div>
		</div>
		<div class="set2 set3">
			<span>2G/3G图片显示模式</span>
			<div data-am-widget="tabs" class="am-tabs am-tabs-default">
      			<ul class="am-tabs-nav am-cf">
		          <li class="am-active"><a>大图</a></li>
		          <li class=""><a>小图</a></li>
		          <li class=""><a>无图</a></li>
		     	</ul>
		 	</div>
		</div>
		<div class="set4">
			<mt-checklist align="right" v-model="value" :options="options1"></mt-checklist>
		</div>
		<div class="set5">
			<mt-cell title="帮助" is-link value=""></mt-cell>
			<mt-cell title="清除缓存" is-link value="0M"></mt-cell>
			<mt-cell title="联系我们" is-link value=""></mt-cell>
			<mt-cell title="检查新版本" is-link value="当前版本2.5.0"></mt-cell>
			<mt-cell title="用户使用协议" is-link value=""></mt-cell>
		</div>
		<div class="set6">
			<p>&copy; lxJoker出品 git@github.com</p>
			<span>v2.5.0 Build oppo-cpa_ee95742_20170524</span>
		</div>
		<div class="set7">
			<a>推荐给好友</a>
			<a>意见反馈</a>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    	value:[''],
    	options:['夜间模式','智能刷新内容'],
    	options1:['4G/Wi-Fi动图自动播放','视频自动播放','允许非Wi-Fi环境下观看直播','精彩内容推送']
    }
  },
	components:{
		"hx-Set-header":{
			template:`
			 	<div>
  				  <header data-am-widget="header" class="am-header am-header-default">
			        <div class="am-header-left am-header-nav" @click="goBack">
			  		  <i class=" fa am-icon-angle-left"></i>
			        </div>
			        <h1 class="am-header-title">设置</h1>
			  	  </header>
			    </div>
			 	`,
			methods:{
				goBack(){
					window.history.back();
				}
			}
		}
//		"hx-Login-input":{
//			template:`
//				<div>
//				  <div class="logininput">
//				    <mt-field label="手机号" placeholder="请输入你的手机号" type="number"></mt-field>
//				    <mt-field label="密码" placeholder="输入密码" type="password"></mt-field>
//				    <router-link to="/My">
//				    <mt-button size="large" type="danger">
//				    	登录
//				    </mt-button>
//				    </router-link>
//				    <router-link class="forget" to="/ForgetPass">忘记密码</router-link>
//				  </div>
//				</div>
//			`
//		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.Set.am-animation-slide-right{
	width: 100%;
	background: #f5f5f5;
	position: absolute;
	z-index: 1000;
	text-align: center;
}
.Set.am-animation-slide-right .set1{
	margin-top: 48px;
}
.am-header .am-header-title{
	font-size: 1.7rem;
}
.am-header-default .am-header-nav .register{
	color: #874c0d;
}
.am-header.am-header-default{
	background:#dcd9cf;
	position: fixed;
	z-index: 100;
}
.am-header-left.am-header-nav,.am-header-default .am-header-title,.am-header-right.am-header-nav{
	color: #874c0d;
}
.set1,.set4{
	text-align: left;
}
.set1 .mint-checklist .mint-cell .mint-cell-wrapper,.set4 .mint-checklist .mint-cell .mint-cell-wrapper{
	font-size: 1.4rem;
}
.set2{
	text-align: left;
	display: flex;
	justify-content: space-between;
	margin-top: 0.6rem;
	padding: 1rem 1rem 1rem 2rem;
	border-bottom: 1px solid #e5e5e5;
	background: #FFFFFF;
	font-size: 1.4rem;
}
.set3{
	margin-top: 0;
}
.set2 span{
	float: left;
}
.set2 .am-tabs{
	margin: 0;
}
.set2 .am-tabs .am-tabs-nav{
	background: #FFFFFF;
}
.set2 .am-tabs .am-tabs-nav li a{
	width: 4rem;
    height: 2rem;
    line-height: 2rem;
    background: #dedede;
    border-top: 1px solid #666666;
    border-bottom: 1px solid #666666;
}
.set2 .am-tabs .am-tabs-nav li:nth-of-type(1) a{
	border-radius: 0.8rem 0rem 0rem 0.8rem;
	border: 1px solid #666666;
}
.set2 .am-tabs .am-tabs-nav li:nth-of-type(3) a{
	border-radius: 0rem 0.8rem 0.8rem 0rem;
	border: 1px solid #666666;
}
.set2 .am-tabs .am-tabs-nav .am-active a{
    background: #6092e6;
}
.set5{
	text-align: left;
	background: #FFFFFF;
	margin-top: 0.6rem;
}
.set5 .mint-cell .mint-cell-wrapper .mint-cell-title{
	font-size: 1.4rem;
	color: #333333;
	padding-left: 1.4rem;
}
.set6{
	margin-bottom: 4rem;
	font-size: 1.4rem;
}
.set6 p{
	margin: 0;
}
.set7{
	border-top: 1px solid #e5e5e5;
	background: #FFFFFF;
	height: 4rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}
.set7 a{
	width: 50%;
	display: block;
	text-align: center;
	line-height: 3rem;
	color: #37acff;
}
.set7 a:nth-of-type(1){
	border-right: 1px solid #e5e5e5;
}
.mint-checkbox-label{
	font-weight: normal;
	color: black;
}
.Set .mint-checkbox-core{
	border-radius: 0.2rem;
	border: 2px solid #ccc;
}
.Set .mint-checkbox-input:checked + .mint-checkbox-core{
	color: #CCCCCC;
	background: #CCCCCC;
	border-color: #CCCCCC;
}
</style>
