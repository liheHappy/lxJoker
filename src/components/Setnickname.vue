<template>
	<div class="setnickname posi">
		<hx-register-header></hx-register-header>
		<hx-register-input></hx-register-input>
	</div>
</template>

<script>
export default{
	name:"Setnickname",
	components:{
		"hx-register-header":{
			template:`
			 	<div>
  				  <header data-am-widget="header" class="am-header am-header-default">
			        <div class="am-header-left am-header-nav" @click="goBack">
			  		  <i class=" fa am-icon-angle-left"></i>
			        </div>
			        <h1 class="am-header-title">设置个人信息</h1>
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
				  	<p class="iconHome">
						<span class="am-icon-btn am-icon-user am-icon-sm"></span>
				  	</p>	
				    <mt-field label="用户名" type="text"></mt-field>
					<router-link :to="path">
				    	<mt-button size="large" type="danger" @click="nextStep">完成</mt-button>
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
					var username=document.querySelector("input[type=text]").value;
					if(username){
						var obj=JSON.parse(localStorage.register);
						obj.username=username;//将用户名添加至对象
						localStorage.user=JSON.stringify(obj);//添加至user的登录信息，作为cookie判断
						localStorage.flag=true;
						localStorage.removeItem("register");
						this.path="/My";
					}else{
						var test=confirm("确定使用手机号码作为用户名");
						if(test==true){
							this.path="/My";
						}
					}
				}
			}
		}
	}
}
</script>

<style>
.setnickname .registerTop{
	padding-top: 60px;
}
.setnickname .checkBox{
	color: #999;
	font-size: 1.5rem;
	display: block;
	margin: .5rem 0;
	margin-left: 5vw;
}
.setnickname .mint-button--large{
	width: 90%;
	margin: 0 auto;
	margin-top: 1rem;
}
.setnickname .register.posi{
	height: 100vh;
	position: relative;
	background: #efeeee;
	width: 100%;
	z-index: 10;
}
.setnickname .am-icon-btn{
	color: #ccc;
	width: 4rem;
	height: 4rem;
}
.setnickname .iconHome{
	background: #fff;
	width: 4rem;
	height: 4rem;
	border-radius: 100%;
	text-align: center;
	margin: 1rem auto;
}

.setnickname .am-icon-btn.am-icon-user.am-icon-sm{
	background: #fff;
}
.setnickname .am-icon-sm:before{
	color: #ccc;
}
</style>