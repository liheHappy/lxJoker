<template>
  <div class="my">
		<mt-header>
		  <mt-button slot="right">
		  	<span class="iconfont icon-icon"></span>
		  	<span class="iconfont icon-shezhi"></span>
		  </mt-button>
		</mt-header>
		<!--头像组件-->
		<hx-my-means></hx-my-means>
		<!--选项卡组件-->
	  <hx-my-tabbar></hx-my-tabbar>

  </div>
</template>

<script>
export default {
  name: 'My',
  data(){
		return {
			selected:"1"
		}
	},
	components:{
		"hx-my-tabbar":{
			template:`
				<div>
					<div class="am-tabs mynav" data-am-tabs>
					  <ul class="am-tabs-nav am-nav am-nav-tabs">
						  <li  class="am-active">
						  	<a href="#tab1"><span class="lhactive" @click="toggleClass">投稿</span></a>
						  </li>
						  <li>
						  	<a href="#tab2"><span @click="toggleClass">直播</span></a>
						  </li>
						  <li>
						  	<a href="#tab3"><span @click="toggleClass">收藏</span></a>
						  </li>
						  <li>
						  	<a href="#tab4"><span @click="toggleClass">评论</span></a>
						  </li>
					  </ul>
						<div class="am-tabs-bd">
					    <div class="am-tab-panel am-fade am-in am-active" id="tab1">
					      
					    </div>
					    <div class="am-tab-panel am-fade" id="tab2">
					      
					    </div>
					    <div class="am-tab-panel am-fade" id="tab3">
					      
					    </div>
					    <div class="am-tab-panel am-fade" id="tab4">
					      
					    </div>
					  </div>
					</div>
				</div>`,
			methods:{
				toggleClass:function(event){
					if(event.target.className=="lhactive"){
					}else{
						var arr=document.querySelectorAll(".am-nav li span");
						for(var i=0;i<4;i++){
							arr[i].className="";
						}
						event.target.className="lhactive";
					}
				}
			}
		},
		"hx-my-means":{
			template:`
				<div class="am-g">
				  	<div class="am-u-sm-4">
				  		<a href="" class="am-icon-btn am-icon-user"></a>
				  	</div>
				  	<div class="am-u-sm-8">
				  		<a href="" class="am-u-sm-4">
				  			<span>1</span>
				  			<span>粉丝</span>
				  		</a>
				  		<a href="" class="am-u-sm-4">
				  			<span>0</span>
				  			<span>关注</span>
				  		</a>
				  		<a href="" class="am-u-sm-4">
				  			<span>0</span>
				  			<span>积分</span>
				  		</a>
				  		<router-link class="field" to="/Field">
				  			<mt-button type="danger" size="large" plain>立即登录</mt-button>
				  		</router-link>
				  	</div>
			  	</div>
				`
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.my{
	overflow-x: hidden;
	height: 100vh;
	width: 100%;
	background: url(../../static/img/login1.png) no-repeat 0 22rem;
	background-size: contain;
}
.am-g{
	background: #FFFFFF;
	padding-top: 1rem;
	padding-bottom: 1rem;
}

.am-icon-btn{
	width: 8rem;
	height: 8rem;
	font-size: 10rem;
	line-height: 8.1rem;
	color: #FFFFFF;
}
.am-u-sm-8 .am-u-sm-4{
	margin-bottom: 1rem;
}
.am-u-sm-8 .am-u-sm-4 span{
	display: block;
	text-align: center;
	color: black;
}
.lhactive{
	border-bottom:2px solid hotpink;
	margin-bottom: 1px;
	display: inline-block; 
}
.mynav .am-tabs-bd #tab1{
	background: #eeeeee;
}
.am-tabs-bd{
	border: none;
}
.mynav>.am-nav-tabs>li.am-active>a, .am-nav-tabs>li.am-active>a:focus, .am-nav-tabs>li.am-active>a:hover{
	background: #FFFFFF !important;
	border: none;
}

.am-nav-tabs>li>a{
	color: #555;
	padding: .2rem .5rem;
}
.zhanPos{
	width: 2rem;
	height: 2rem;
}
.mynav>.am-tabs-nav.am-nav.am-nav-tabs{
	background: #FFFFFF;
	border: none;
	display: flex;
	justify-content: space-around;
	margin-top: 0.3rem;
}

</style>
