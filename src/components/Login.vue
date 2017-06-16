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
				    <mt-field label="手机号" placeholder="请输入你的手机号" type="number"></mt-field>
				    <mt-field label="密码" placeholder="输入密码" type="password"></mt-field>
				    <router-link :to="path">
					    <mt-button size="large" type="danger" @click="injectData">
					    	登录
					    </mt-button>
				    </router-link>
				    <router-link class="forget" to="/ForgetPass">忘记密码</router-link>
				  </div>
				  <div class="loginFalse" v-show="show">
					<p>{{ msg }}</p>
					<button type="button" @click="loginData" class="am-btn am-btn-warning am-radius">确定</button>
				  </div>
				  <div class="loginBlack" v-show="show"></div>
				</div>
			`,
			data(){
				return {
					path:"",
					show:false,
					msg:""
				}
			},
			methods:{
				injectData(){
					var tel=document.querySelector("input[type=number]").value;
					var pass=document.querySelector("input[type=password]").value;
					//判断手机号码是否符合条件
					if(tel!=""&&pass!=""){
						var reg=/^1[345678][0-9]{9}$/;
						if(reg.test(tel)==true){
								if(pass.length>6&&pass.length<12){
										this.path="/My";
										//存储登录用户信息
										var obj={
											tel:tel,
											password:pass
										}
										localStorage.user=JSON.stringify(obj);
								}else{
									this.show=true;
									this.msg="请输入合理的密码";
								}
						}else{
							this.show=true;
							this.msg="输入合理的手机号";
						}
					}else{
						this.show=true;
						this.msg="账号和密码不能为空";
					}
				},
				loginData(){
					this.show=false;
				}
			}
		}
	}
}
</script>

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
	margin-right: 5vw;
	margin-top: 1rem;
	font-size: 1rem;
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

/*输入错误*/
.login .loginFalse{
	background: #FFFFFF;
	border-radius: 1rem;
	position: absolute;
	z-index: 1010;
	top: 40%;
	left: 10%;
	width: 80%;
	height: 20%;
	text-align: center;
	padding-top: 1rem;
}
.login .loginFalse .am-btn{
	width: 80%;
}
.login .loginBlack{
	background: black;
	top: 0;
	left: 0;
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 1005;
	opacity: 0.7;
}
</style>
