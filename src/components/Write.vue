<template>
	<div class="write">
		<hx-write-header></hx-write-header>
		<div class="writetxt">
			<p>
				投稿至
				<router-link to="/Find"><span>点击选吧</span></router-link>
			</p>
			<textarea>您的粉丝第一时间会看见您的发帖，请严肃对待哦!我们的目标是：专注黄反，拒绝内涵！可以矫情，不要煽情！敬告：发布色情敏感内容可以升级为会员。</textarea>
		</div>
		
		<!-- 底部 -->
		<hx-write-footer></hx-write-footer>
	</div>
</template>

<script>
export default {
  name: 'Write',
  components:{
  	"hx-write-header":{
  		template:`
				<header data-am-widget="header"
					class="am-header am-header-default">
					<div class="am-header-left am-header-nav" @click="handleClose">
						<span class="am-icon-times"></span>
					</div>
					<h1 class="am-header-title">
						投稿
					</h1>
					<div class="am-header-right am-header-nav">
						发表
					</div>
				</header>
  				`,
  		methods:{
		  	handleClose(){
		  		window.history.back();
		  	}
		}		
  	},
  	"hx-write-footer":{
  		template:`
				<div class="writeFooter">
					<div>
						<p>
							<span class="am-icon-file-image-o"></span>
							<a>图片</a>
						</p>
						<p>
							<span class="am-icon-file-video-o"></span>
							<a>视频</a>
						</p>
					</div>
					<div class="am-checkbox">
				      <label>
				        <input type="checkbox"> 匿名
				      </label>
				    </div>
				</div>
  				`
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*:focus {outline: none;} 
.write{
	position: fixed;
	height: 100vh;
	width: 100%;
	z-index: 100;
	background: #fff;
}
.write .am-header.am-header-default{
	background:#dcd9cf;
	position: fixed;
	z-index: 100;
	color: #6b5547;
}
.write .am-header-left.am-header-nav,.am-header-default .am-header-title,.am-header-right.am-header-nav{
	color: #874c0d;
}
.write .am-header-default .am-header-title{
	font-size: 1.7rem;
	color: #6b5547;
}
.write .am-header-left.am-header-nav i{
	font-weight: normal;
}
.writetxt{
	padding-top: 49px;
	margin-left: 1rem;
	margin-right: 1rem;
}
.writetxt p:nth-child(1){
	margin-top: 1rem;
	font-size: 1rem;
	color: #666;
}
.writetxt span{
	padding: .2rem .6rem;
	color: red;
	font-size: 1rem;
	border-radius: 20px;
	border: 1px solid red;
	margin-left: .5rem;
}

.writetxt textarea{
	color: #ccc;
	font-size: 1.2rem;
	width: 100%;
	border: none;
	height:70vh;
	display: block;
}
.writeFooter{
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	bottom: 0;
	width: 100%;
}
.writeFooter p{
	float: left;
	margin: 0;
	padding: 0;
	margin-left: 1rem;
}
.write .writeFooter .am-checkbox{
	float: right;
	margin: 0;
	margin-right: 1rem;
}
.writeFooter p{
	text-align: center;
}
.writeFooter span{
	display: block
}
.writeFooter a{
	color: #666;
	font-size: .8rem;
}
</style>
