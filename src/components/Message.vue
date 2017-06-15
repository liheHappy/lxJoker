<template>
  <div class="message">
	<hx-msg-header></hx-msg-header>
	<hx-message-list></hx-message-list>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data(){
  	return {
  		active:"tab-container1"
  	}
  },
  components:{
  	"hx-msg-header":{
  		template:`<div>
  					<header data-am-widget="header"
			          class="am-header am-header-default">
			      <h1 class="am-header-title">
			          消息
			      </h1>
			      <div class="am-header-right am-header-nav">
			      	<router-link :to="path">黑名单</router-link>
			      </div>
			  </header>
			  </div>`,
		methods:{
			goBack(){
				window.history.back();
			}
		},
		data(){
			return {
				path:"/Field"
			}
		},
		created(){
			if(localStorage.user){
				this.path="/"
			}
		}
  	},
  	"hx-message-list":{
  		template:`<div>
					<ul class="am-list am-list-static am-list-border">
				    	<router-link :to="path">
				    		<li><span><i class="am-icon-pencil am-icon-sm"></i></span>投稿互动<i class="am-icon-angle-right"></i></li>
				    	</router-link>
				    	<router-link :to="path">
				    		<li><span><i class="am-icon-bullhorn am-icon-sm"></i></span>系统消息<i class="am-icon-angle-right"></i></li>
				    	</router-link>
				    	<router-link :to="path">
				    		<li><span><i class="am-icon-heartbeat am-icon-sm"></i></span>粉丝关注<i class="am-icon-angle-right"></i></li>
				    	</router-link>
					</ul>
				</div>`,
				data(){
					return {
						path:"/Field"
					}
				},
				created(){
					if(localStorage.user){
						this.path="/"
					}
				}
  			}

  		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.message{
	background: url('./../../static/img/jie2.png') no-repeat 0 50vh;
	height: 90vh;
	width: 100%;
	background-size: contain;
}
.mint-button-text a{
	text-decoration: none;
	color: #493d32;
}
.am-header.am-header-default{
	background:#dcd9cf;
	position: fixed;
	z-index: 100;
}
.am-header-default .am-header-title{
	color: #874c0d;
}
.am-header-default .am-header-title{
	font-size: 1.7rem;
}
.am-header-default .am-header-nav>a{
	color: #874c0d;
}

.message .am-list{
	padding-top: 49px;
}
.message .am-list a{
	display: block;
	padding: 1rem;
	background: #ffffff;
	color: black;
	text-align: left;
	margin-bottom: 0.1rem;
}
.message .am-list a:nth-of-type(2)>li>span{
	background: #6ec850;
}
.message .am-list a:nth-of-type(3)>li>span{
	background: #ff5454;
}
.message .am-list a:nth-of-type(4)>li>span{
	background: #40a7ff;
}
.message .am-list a:nth-of-type(5)>li>span{
	background: #1ac5de;
}
.message div .am-list a li{
	list-style: none;
}
.message div .am-list>a>li>span{
	display: inline-block;
	background: #3dcb72;
	border-radius: 3rem;
	width: 3rem;
	height: 3rem;
	text-align: center;
	line-height: 3rem;
	padding: 0;
	color: white;
	margin-right: 1rem;
}

.am-icon-angle-right{
	float: right;
	font-size: 2rem;
}
</style>
