<template>
	
  <div class="setpass am-animation-slide-right">
  	<hx-Login-header></hx-Login-header>
  	<hx-Login-input></hx-Login-input>

  </div>
</template>

<script>
export default {
  	name: 'Setpass',
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
		"hx-Login-input":{
			template:`
				<div>
				  <div class="logininput marginTop">
				  	<p>已向手机 {{tel}} 发送验证码</p>
				    <mt-field placeholder="请输入验证码" type="number" >
						<span class="repeatSend">重新发送</span>
				    </mt-field>
				    <mt-field placeholder="请设置密码(6-12为数字或字母)" type="password"></mt-field>
				    <router-link :to="path">
					    <mt-button size="large" type="danger" @click="isRegister">
					    	提交
					    </mt-button>
				    </router-link>
				  </div>
				</div>
			`,
			data(){
				return {
					path:"",
					tel:""
				}
			},
			methods:{
				isRegister(){
					var yzm=document.querySelector("input[type=number]").value;
					var pass=document.querySelector("input[type=password]").value;
					if(yzm!=""&&pass!=""){
						if(yzm.length==4){
							if(pass.length>6&&pass.length<12){
								var obj=JSON.parse(localStorage.registerTel);
								obj.password=pass;
								localStorage.register=JSON.stringify(obj);
								localStorage.removeItem("registerTel");
								this.path="/Setnickname";
							}else{
								alert("请合理设置密码");
							}
						}else{
							alert("请输入四位验证码");
						}
					}else{
						alert("请输入验证码或密码");
					}

				}

			},
			created(){
				var obj=JSON.parse(localStorage.registerTel);
				this.tel=obj.tel;
			}
		}
	}
}
</script>

<style>
.setpass .marginTop{
	padding-top: 49px;
}
.setpass .logininput p{
	margin: .6rem 0;
	text-align: center;
	font-size: 1rem;
}
.setpass .mint-field-core{
	padding-left: 1rem;
}
.setpass .repeatSend{
	padding: .6rem 1rem;
	background: pink;
	font-size: .8rem;
	color: #fff;
	border-radius: 5px;
	margin-right: 1rem;
}
</style>
