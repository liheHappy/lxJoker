<template>
	<div class="userinfo">
		<!-- 头部 -->
		<hx-user-header></hx-user-header>
		<!-- 主体内容 -->
		<hx-user-main></hx-user-main>
		<!-- 退出登录 -->
		<p class="btnBlock">
			<router-link :to="isExit">
				<button class="am-btn  am-btn-block" @click="userExit"> 退出登录
				</button>
			</router-link>
		</p>
	</div>
</template>

<script>
	export default{
		name:"Userinfo",
		data(){
			return {
				isExit:""
			}
		},
		methods:{
			userExit(){
				var demo=confirm("官人，您真的舍得离开奴家吗？");
				if(demo==true){
					if(localStorage.user){
						localStorage.flag=false;
						localStorage.removeItem("user");
					}
					this.isExit="/My";
				}
			}
		},
		components:{
			"hx-user-header":{
		  		template:`<div>
		  					<header data-am-widget="header"
					          class="am-header am-header-default">
					      <div class="am-header-left am-header-nav" @click="goBack">
					  			<i class=" fa am-icon-angle-left"></i>
					      </div>

					      <h1 class="am-header-title">
					          账号管理
					      </h1>
					  </header>
					  </div>`,
				methods:{
					goBack(){
						window.history.back();
					}
				}
  			},
  			"hx-user-main":{
  				template:`
						<div class="userTxt">
							<div class="am-g">
							  <div class="am-u-sm-8">
							  		<span>头像</span>
							  		<span>火山id: 1176844790</span>
							  </div>
							  <div class="am-u-sm-4">
							  	<img src="./../../static/img/Myhead0.jpg"  class="am-circle" height="58" width="58">
							  	<span class="am-icon-angle-right"></span>
							  </div>
							</div> 

							<ul class="am-list am-list-static am-list-border">
						    		<li>
						    			用户名<i class="am-icon-angle-right"></i>
						    			<span>王萌萌</span>
						    		</li>
						    		<li>
						    			性别<i class="am-icon-angle-right"></i>
						    			<span>男</span>
						    		</li>
							</ul>
							<h6>个性签名</h6>
							<div class="am-g writeName">
							  <div class="am-u-sm-11">
							  	<input type="text" value="万水千山总是情，没有签名可不行~~">
							  </div>
							  <div class="am-u-sm-1">
							  	<span class="am-icon-angle-right"></span>
							  </div>
							</div> 
							<h6>账号绑定</h6>
							<ul class="am-list am-list-static am-list-border lowList">
							  <li>
								手机号
								<span>立即绑定</span>
							  </li>
							  <li>
								微信
								<span>立即绑定</span>
							  </li>
							  <li>
								新浪微博
								<span>立即绑定</span>
							  </li>
							  <li>
								腾讯QQ
								<span>立即绑定</span>
							  </li>
							  <li>
								腾讯微博
								<span>立即绑定</span>
							  </li>
							</ul>
						</div>
  						`
  			}
		}
	}
</script>

<style>
.userinfo{
	height: 100vh;
	width: 100%;
	position: fixed;
	background: #eee;
	z-index: 100;
}
.userinfo .am-header.am-header-default{
	background:#dcd9cf;
	position: fixed;
	z-index: 100;
}
.userinfo .am-header-left.am-header-nav,.am-header-default .am-header-title,.am-header-right.am-header-nav{
	color: #874c0d;
}
.userinfo .am-header-default .am-header-title{
	font-size: 1.7rem;
}
.userinfo .am-header-left.am-header-nav i{
	font-weight: normal;
}
.userinfo .userTxt{
	padding-top: 49px;
}
.userinfo .am-g{
	height: 12vh;
	border-bottom: 1px solid #ccc;
	border-top: 1px solid #ccc;
	background: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1rem 0;
}
.userinfo .am-g span{
	font-size: 1rem;
}
.userinfo .am-g .am-u-sm-8 span:nth-child(2){
	color: #ccc;
	display: block;
}
.userinfo .am-g .am-u-sm-4 .am-icon-angle-right{
	margin-left: .8rem;
	font-size: 2rem;
	margin-top: 1rem;
}

.userinfo div .am-list a li{
	list-style: none;
}
.userinfo .am-icon-angle-right{
	float: right;
	font-size: 2rem;
}
.userinfo .am-list li span{
	float: right;
}
.userinfo .am-list{
	margin: 0;
	padding: 0;
}
.userinfo .am-list li .am-icon-angle-right{
	margin-top: -0.6rem;
	margin-left: .5rem;
}
.userinfo .am-g.writeName{
	height: 9vh;
}
.userinfo .am-g.writeName .am-icon-angle-right{
	float: right;
	font-size: 2rem;
}
.userinfo .am-g.writeName input{
	border: none;
	height: 8.5vh;
	margin-top: .1vh;
	width: 100%;
	font-size: 1.2rem;
}
.userinfo h6{
	font-size: 1rem;
	font-weight: normal;
	padding: 0;
	margin: .5rem;
}
.userinfo .am-g.writeName{
	margin: 0;
	padding: 0;
}
.userinfo .am-list{
	font-size: 1.2rem;
}
.userinfo .am-list.am-list-static.am-list-border.lowList li{
	padding: .5rem 1rem;
}
.userinfo .am-list.am-list-static.am-list-border.lowList li span{
	color: red;
}
.userinfo .btnBlock{
	width: 100%;
	bottom: 0;
	position: fixed;
	margin: 0;
	padding: 0;
	margin-bottom: .3rem;
}
.userinfo .btnBlock a button{
	background: #fff;
	height: 8vh;
	font-size: 1.4rem;
	color: #000;
}
.userinfo .am-dimmer{
	background: none;
}
</style>