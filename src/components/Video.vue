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
							<img :src="items.group.user.avatar_url" class="am-comment-avatar" width="48" height="48">
							<span>{{items.group.user.name}}</span>
							<span class="hasBorder">x</span>
						</header>
						<p class="am-article-lead">
//							<video :src="items.group['360p_video'].url_list[0].url"></video>
						</p>
						<div>
							<i class="am-icon-thumbs-up">	{{items.group.digg_count}}</i>
							<i class="am-icon-thumbs-down">{{items.group.bury_count}}</i>
							<i class="am-icon-commenting-o">{{items.group.comment_count}}</i>
							<i class="am-icon-share">
							{{items.group.share_count}}</i>
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
	  		Vue.axios.get("../static/json/duanVideo.json").then((res)=>{
	  			return res.data.data.data;
	  		}).then((data)=>{
	  			this.arr = data;
	  			//console.log(this.arr);
	  			console.log(this.arr[0].group['360p_video'].url_list[0].url);
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
	padding-top: 56px;
}
</style>


