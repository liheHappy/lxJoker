<template>
	
  <div class="login am-animation-slide-right">
  	<hx-Login-header></hx-Login-header>
  	<hx-Login-input></hx-Login-input>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    	
    }
  },
	components:{
		"hx-Login-header":{
			template:`
			 	<div>
  				  <header data-am-widget="header" class="am-header am-header-default">
			        <div class="am-header-left am-header-nav" @click="goBack">
			  		  <i class=" fa am-icon-angle-left"></i>
			        </div>
			        <h1 class="am-header-title">手机号登录</h1>
				    <div class="am-header-right am-header-nav">
				      <router-link class="register" to="/Register">注册</router-link>
				    </div>
			  	  </header>
			    </div>
			 	`,
			methods:{
				goBack(){
					window.history.back();
				}
			}
		},
		"hx-Login-input":{
			template:`
				<div>
				  <div class="logininput">
				    <mt-field label="手机号" placeholder="请输入你的手机号" type="tel"></mt-field>
				    <mt-field label="密码" placeholder="输入密码" type="password"></mt-field>
				    <mt-button size="large" type="danger">登录</mt-button>
				    <router-link class="forget" to="/ForgetPass">忘记密码</router-link>
				  </div>
				</div>
			`
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login.am-animation-slide-right{
	height: 100vh;
	width: 100%;
	background: #f5f5f5;
	position: absolute;
	z-index: 1000;
	text-align: center;
}
.login .logininput{
	margin-top: 49px;
	padding-top: 1rem;
}
.am-header .am-header-title{
	font-size: 1.7rem;
}
.login .logininput .forget{
	float: right;
}
.login .logininput .mint-button{
	margin-top: 2rem;
	width: 90vw;
	margin-left: 5vw;
}
.mint-cell .mint-cell-wrapper{
	padding: 0;
}
.mint-cell .mint-cell-wrapper .mint-cell-title{
	padding-left: 1rem;
}
.login.am-animation-slide-right{
	text-align: left;
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
.aggrement{
	color: black;
}
.mint-cell-text{
	color: #000;
}
.mint-field-core{
	color: #000;
}
</style>
