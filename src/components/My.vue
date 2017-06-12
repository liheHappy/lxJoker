<template>
  <div class="message">
  	<mt-header>
		  <mt-button slot="right">
		  	<span class="iconfont icon-icon"></span>
		  	<span class="iconfont icon-shezhi"></span>
		  </mt-button>
		</mt-header>
	  <div class="am-g">
	  	<div class="am-u-sm-4">
	  		<a href="" class="am-icon-btn am-icon-user"></a>
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
	  		<mt-button type="danger" size="large" plain>立即登录</mt-button>
	  	</div>
	  </div>
	  <hx-my-tabbar></hx-my-tabbar>
	  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data(){
		return {
			selected:"1"
		}
	},
	components:{
		"hx-my-tabbar":{
			template:`
				<ul class="am-nav am-nav-pills am-nav-justify">
				  <li>
				  	<router-link to="/My"><span class="lhactive" @click="toggleClass">投稿</span></router-link>
				  </li>
				  <li>
				  	<router-link to="/Playing"><span @click="toggleClass">直播</span></router-link>
				  </li>
				  <li>
				  	<router-link to="/Collect"><span @click="toggleClass">收藏</span></router-link>
				  </li>
				  <li>
				  	<router-link to="/Comment"><span @click="toggleClass">评论</span></router-link>
				  </li>
				</ul>
			`,
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
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
	.am-g{
		background: #FFFFFF;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	.am-icon-btn{
		width: 9rem;
    height: 9rem;
    font-size: 11rem;
    line-height: 9.1rem;
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
	.am-u-sm-8 .mint-button{
		height: 3rem;
		border: 1px solid hotpink;
    color: hotpink;
	}
	.message .am-nav.am-nav-pills.am-nav-justify{
		margin-top: 0.3rem;
		background: #FFFFFF;
	}
	.am-nav.am-nav-pills.am-nav-justify{
		background: #dcd9cf;
	}
	.am-nav.am-nav-pills.am-nav-justify li{
		text-align: center;
		height: 40px;
		line-height: 40px;
	}
	.am-nav.am-nav-pills.am-nav-justify>li>a{
		color: black;
	}
	.am-nav.am-nav-pills.am-nav-justify>li>a:hover{
		background: none;
	}
	.lhactive{
		border-bottom:2px solid #493d32;
		margin-bottom: 1px;
		display: inline-block; 
	}
</style>
