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
				    <mt-field label="+86" type="number"></mt-field>
				    <router-link class="checkBox" to="/Aggrement">
						<input type="checkbox" checked="checked" />我同意《内涵段子用户使用协议》
					</router-link>
					<router-link :to="path">
				    	<mt-button size="large" type="danger" @click="nextStep">下一步</mt-button>
				    </router-link>
				  </div>
				</div>
			`,
			data(){
				return {
					path:""
				}
			},
			methods:{
				nextStep(){
					var tel=document.querySelector("input[type=number]").value;
					if(tel!=""){
						var reg=/^1[345678][0-9]{9}$/;
						if(reg.test(tel)==true){
							localStorage.registerTel=tel;
							this.path="/Setpass";
						}else{
							alert("输入合理的手机号")
						}
					}else{
						alert("账号和密码不能为空");
					}
				}
			}
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