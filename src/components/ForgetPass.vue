<template>
  <div class="forgetPass am-animation-slide-right">
  	<hx-forget-header></hx-forget-header>
  	<hx-forget-input></hx-forget-input>

  </div>
</template>
<script>
export default {
  name: 'ForgetPass',
  data () {
    return {
    	
    }
  },
	components:{
		"hx-forget-header":{
			template:`
			 	<div>
  				  <header data-am-widget="header" class="am-header am-header-default">
			        <div class="am-header-left am-header-nav" @click="goBack">
			  		  <i class=" fa am-icon-angle-left"></i>
			        </div>
			        <h1 class="am-header-title">忘记密码</h1>
			  	  </header>
			    </div>
			 	`,
			methods:{
				goBack(){
					window.history.back();
				}
			}
		},
		"hx-forget-input":{
			template:`
				<div>
				  <div class="logininput forgetTop">
				    <mt-field label="+86" type="tel"></mt-field>
				    <mt-button size="large" type="danger">下一步</mt-button>
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
.forgetTop{
	padding-top: 60px;
}
.mint-cell-text{
	color: #000;
}
.mint-button--large{
	width: 90%;
	margin: 0 auto;
	margin-top: 1rem;
}
.am-header .am-header-title{
	font-size: 1.7rem;
}
.mint-field-core{
	color: #000;
}
.forgetPass{
	height: 100vh;
	position: relative;
	background: #efeeee;
	width: 100%;
	z-index: 10;
}
</style>
