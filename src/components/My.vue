<template>
  <div class="my">
		<mt-header>
		  <mt-button slot="right">
		  	<router-link class="Myset" to="/Set">
		  		<span class="am-icon am-icon-shopping-bag"></span>
		  	</router-link>
		  	<router-link class="Myset" to="/Set">
		  		<span class="am-icon am-icon-cogs"></span>
		  	</router-link>
		  	<!--mars   diamond   fire-->
		  </mt-button>
		</mt-header>
		<!--头像组件-->
		<!--<hx-my-means></hx-my-means>-->
		<hx-my-data></hx-my-data>

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
				  	<router-link to="/Userinfo">
				  		<span class="am-icon-btn am-icon-user"></span>
				  	</router-link>
			  	</div>
			  	<div class="am-u-sm-8">
			  		<a href="" class="am-u-sm-4">
			  			<span>0</span>
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
		},
		"hx-my-data":{
			template:`
				<div class="am-g my-am-g">
			  	<div class="am-u-sm-4">
				  	<router-link to="/Userinfo">
				  		<img src="../../static/img/Myhead0.jpg" />
				  	</router-link>
			  	</div>
			  	<div class="am-u-sm-8">
			  		<h4>
			  			<span>王萌萌</span>
			  			<i class="am-icon-mars"></i>
			  		</h4>
			  		<p class="am-icon-map-marker"> 北京</p>
			  		<p class="Mydata">
				  		<a href="" class="am-u-sm-4">
				  			<span>0</span>
				  			<span>粉丝</span>
				  		</a>
				  		<a href="" class="am-u-sm-4">
				  			<span>0</span>
				  			<span>关注</span>
				  		</a>
				  		<a href="" class="am-u-sm-4">
				  			<span>1</span>
				  			<span>积分</span>
				  		</a>
			  		</p>
			  	</div>
			  	<div class="Myfans">
			  		<span class="am-icon-diamond"> 
			  			<i> 送出钻石：0</i>
			  		</span>
			  		<span class="am-icon-fire"> 
			  			<i> 获得火力：0</i>
			  		</span>
			  	</div>
			  	<div class="tosign">
			  		万水千山总是情，没有签名可不行~~
			  	</div>
				</div>
			`
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*登录前CSS样式*/
.Myset{
	color: #7e7c78;
	font-weight: normal;
}
.Myset .am-icon{
	font-size: 20px;
}
.Myset .am-icon-cogs{
	margin-left: 10px;
}
.my{
	overflow-x: hidden;
	height: 100vh;
	width: 100%;
	background: url(../../static/img/login1.png) no-repeat 0 25rem;
	background-size: contain;
}
.my .am-g{
	background: #FFFFFF;
	padding-top: 1rem;
	padding-bottom: 1rem;
}
.my .am-icon-btn{
	width: 8rem;
	height: 8rem;
	font-size: 10rem;
	line-height: 8.1rem;
	color: #FFFFFF;
}
.my .am-u-sm-8 .am-u-sm-4{
	margin-bottom: 1rem;
}
.my .am-u-sm-8 .am-u-sm-4 span{
	display: block;
	text-align: center;
	color: #333333;
}
.my .am-u-sm-8 .am-u-sm-4 span:nth-of-type(2){
	color: #666666;
}
.my .lhactive{
	border-bottom:2px solid hotpink;
	margin-bottom: 1px;
	display: inline-block; 
}
.my .mynav .am-tabs-bd #tab1{
	background: #eeeeee;
}
.my .am-tabs-bd{
	border: none;
}
.my .mynav>.am-nav-tabs>li.am-active>a, .am-nav-tabs>li.am-active>a:focus, .am-nav-tabs>li.am-active>a:hover{
	background: #FFFFFF !important;
	border: none;
}

.my .am-nav-tabs>li>a{
	color: #555;
	padding: .2rem .5rem;
}
.my .zhanPos{
	width: 2rem;
	height: 2rem;
}
.my .mynav>.am-tabs-nav.am-nav.am-nav-tabs{
	background: #FFFFFF;
	border: none;
	display: flex;
	justify-content: space-around;
	margin-top: 0.3rem;
}

/*登陆后CSS样式*/
.my img{
	width: 8rem;
	height: 8rem;
	border-radius: 8rem;
}
.my .my-am-g{
	padding-bottom: 0;
}
.my .am-u-sm-8 h4{
	margin: 0;
}
.my .am-u-sm-8 h4 span{
	margin-right: 1rem;
}

.my .am-u-sm-8 h4 i{
	height: 1.5rem;
	width: 1.5rem;
	text-align: center;
	line-height: 1.5rem;
	background: #3bb9e0;
	display: inline-block;
	font-size: 14px;
	color: white;
	border-radius: 0.4rem;
}
.my .am-u-sm-8 .am-icon-map-marker{
	margin: 0;
	line-height: 1.4rem;
	color: #FFFFFF;
	font-size: 1rem;
	background: #999999;
	padding: 0rem 0.6rem 0rem 0.6rem;
	border-radius: 1rem;
}
.my .am-u-sm-8 .Mydata{
	margin: 0;
}
.my .Myfans{
	padding: 0rem 1rem 0.6rem 1rem;
}
.my .Myfans span:nth-of-type(1){
	margin-right: 4rem;
	color: #1173ec;
}
.my .Myfans span:nth-of-type(2){
	color: #f56900;
}
.my .Myfans span i{
	font-style: normal;
	color: #333333;
}
.my .tosign{
	border-top: 1px solid #eeeeee;
	padding: 0.6rem 1rem 0.6rem 1rem;
	font-size: 1.2rem;
	color: #d5d5d5;
}
</style>
