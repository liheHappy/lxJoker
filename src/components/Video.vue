<template>
  <div class="video">
		<!--视频页面-->
		<hx-video-msg></hx-video-msg>
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  name: 'Video',
  components:{
  	"hx-video-msg":{
  		template:`
  			<div>
					<div class="txt" v-for="items in arr">
						<span class="hasBorder" @click="quGuan">x</span>
							<header class="txt-header">
								<img :src="items.avatar_url" class="am-comment-avatar" width="48" height="48">
								<span>{{items.name}}</span>
							</header>
							<p class="am-article-lead">
								{{items.text}}
								<span class="neihan">{{items.category_name}}</span>
								<video :src="items.url" controls></video>
							</p>
							<div>
								<i class="am-icon-thumbs-up">	{{items.digg_count}}</i>
								<i class="am-icon-thumbs-down">{{items.bury_count}}</i>
								<i class="am-icon-commenting-o">{{items.comment_count}}</i>
								<i class="am-icon-share">
								{{items.share_count}}</i>
							</div>
					</div>
					<hx-magic v-show="show"></hx-magic>
				</div>
			`,
  		data(){
  			return {
  				arr:"",
  				show:false
  			}
  		},
  		created(){
	  		Vue.axios.get("../static/json/video.json").then((res)=>{
	  			return res.data.head;
	  		}).then((data)=>{
	  			this.arr = data;
	  			//console.log(this.arr);
	  			//console.log(this.arr[0].group['360p_video'].url_list[0].url);
	  		})
	  		
//	  			jsonp("../static/json/duanVideo.json",null,(err,data)=>{
//	  				console.log(data)
//	  			})
	  		
	  		
  		},
  		methods:{
  			quGuan(event){
				this.show=true;
				var _this=this;
				$(".yesNo button").click(function(){
					_this.show=false;
				})
			}
  		},
  		components:{
			"hx-magic":{
				template:`
						<div class="magic">
							<header>选择不喜欢的理由</header>
							<div class="moreRadio">
								<p>
									糗人糗事
									<input type="checkbox">
								</p>
								<p>
									吧：搞笑视频
									<input type="checkbox">
								</p>
								<p>
									内容重复
									<input type="checkbox">
								</p>
								<p>
									作者：相处的久了感情也就淡了
									<input type="checkbox">
								</p>
							</div>
							<div class="yesNo">
								<button class="no">取消</button>
								<button class="yes">确认</button>
							</div>
						</div>
						`
			}
  		}
  	}
  }
}
</script>

<style>
.video{
	padding-top: 41px;
}
.video video{
	width: 100%;
	margin-top: 0.6rem;
}
.video .txt-header{
	color: #666666;
	padding-top: .5rem;
	height: 40px;
	line-height: 40px;
	margin-bottom: .5rem;
}
.video .txt-header img{
	margin-top: 4px;
	margin-left: 1rem;
	margin-right: 0.5rem;
}
.video .hasBorder{
	position: absolute;
	border: 1px solid #333;
	color: #333333;
	border-radius: 0.2rem;
	font-size: 2rem;
	height: 16px;
	width: 16px;
	text-align: center;
	line-height: 8px;
	right: 1rem;
	top: 20px;
}
.video .txt{
	position: relative;
}
.video .am-article-lead{
	border: none;
	font-size: 1.6rem;
	margin: 0;
	background: none;
	color: #333333;
}
.video .am-article-lead .neihan{
	display: block;
	width: 4.8rem;
	border: 1px solid #6b5547;
	white-space: nowrap;
	background: #f5f5f5;
	border-radius: 4px;
	color: #6b5547;
	padding:.1rem .3rem;
	margin: .2rem .3rem;
	font-size: .8rem;
}
.video .magic{
	border-radius: 15px;
	height: 38vh;
	background: #fff;
	position: fixed;
	top: 30vh;
	width: 80vw;
	left: 10vw;
}
.video .magic header{
	height: 6vh;
	background: pink;
	line-height: 6vh;
	color: #fff;
	text-align: center;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}
.video .magic .moreRadio{
	padding:0 1rem;
}
.video .magic .moreRadio p{
	margin: 0;
	padding: 0;
	padding: .4rem 0;
	font-size: 1.4rem;
}
.video .magic .moreRadio input{
	float: right;
}
.video .magic .yesNo{
	height: 7vh;
	width: 100%;
	border-top: 1px solid #eee;
	margin-top: 1rem;
}
.video .magic .yesNo button{
	height: 7vh;
	width: 49%;
	color: #ccc;
	background: none;
	border: none;
}
.video .magic .yesNo button:nth-child(2){
	color: pink;
	border-left: 1px solid #eee;
}
</style>


