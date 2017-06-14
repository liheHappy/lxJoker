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
			template:`<div>
						<div class="am-tabs" data-am-tabs>
						  <ul class="am-tabs-nav am-nav am-nav-tabs">
						  	  <li class="zhanPos"></li>
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
						      置身人群中<br>你只需要被淹没 享受 沉默<br>退到人群后<br>你只需给予双手 微笑 等候
						    </div>
						    <div class="am-tab-panel am-fade" id="tab2">
						      走在忠孝东路<br>徘徊在茫然中<br>在我的人生旅途<br>选择了多少错误<br>我在睡梦中惊醒<br>感叹悔言无尽<br>恨我不能说服自己<br>接受一切教训<br>让生命去等候<br>等候下一个漂流<br>让生命去等候<br>等候下一个伤口
						    </div>
						    <div class="am-tab-panel am-fade" id="tab3">
						      我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？
						    </div>
						    <div class="am-tab-panel am-fade" id="tab4">
						       你还要我怎样
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
<style scope>
	.my{
		overflow-x: hidden;
		width: 100%;
	}
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
	.am-u-sm-8 .field mt-button{
		display: block;
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
	.am-nav-tabs{
		border: none;
	}
	.am-tabs-bd{
		border: none;
	}
	.am-nav-tabs>li.am-active>a, .am-nav-tabs>li.am-active>a:focus, .am-nav-tabs>li.am-active>a:hover{
		border: none;
	}
	.am-tabs-nav.am-nav.am-nav-tabs{
		background: #fff;
	}
	.am-nav-tabs>li>a{
		color: #555;
	}
	.zhanPos{
		width: 2rem;
		height: 2rem;
	}
</style>
