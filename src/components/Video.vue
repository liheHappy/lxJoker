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
							<header class="txt-header">
								<img :src="items.avatar_url" class="am-comment-avatar" width="48" height="48">
								<span>{{items.name}}</span>
								<span class="hasBorder">x</span>
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
				</div>
			`,
  		data(){
  			return {
  				arr:""
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
	border: 1px solid #333;
	color: #333333;
	border-radius: 0.2rem;
	font-size: 2rem;
	height: 16px;
	width: 16px;
	float: right;
	text-align: center;
	line-height: 8px;
	margin-top: 11px;
	margin-right: 1rem;
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
</style>


