<template>
	<div class="register posi">
		<hx-register-header></hx-register-header>
		<hx-register-input></hx-register-input>
	</div>
</template>

<script>
export default{
	name:"Register",
	components:{
		"hx-register-header":{
			template:`
			 	<div>
  				  <header data-am-widget="header" class="am-header am-header-default">
			        <div class="am-header-left am-header-nav" @click="goBack">
			  		  <i class=" fa am-icon-angle-left"></i>
			        </div>
			        <h1 class="am-header-title">手机号注册</h1>
			  	  </header>
			    </div>
			 	`,
			methods:{
				goBack(){
					window.history.back();
				}
			}
		},
		"hx-register-input":{
			template:`
				<div>
				  <div class="logininput registerTop">
				    <mt-field label="+86" type="tel"></mt-field>
				    <router-link class="checkBox" to="/Aggrement">
						<input type="checkbox" checked="checked" />我同意《内涵段子用户使用协议》
					</router-link>
				    <mt-button size="large" type="danger">下一步</mt-button>
				  </div>
				</div>
			`
		}
	}
}
</script>

<style>
.registerTop{
	padding-top: 60px;
}
.checkBox{
	color: #999;
	font-size: 1.5rem;
	display: block;
	margin: .5rem 0;
	margin-left: 5vw;
}
.mint-button--large{
	width: 90%;
	margin: 0 auto;
	margin-top: 1rem;
}
.register.posi{
	height: 100vh;
	position: relative;
	background: #efeeee;
	width: 100%;
	z-index: 10;
}
</style>