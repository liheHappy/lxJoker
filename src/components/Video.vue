<template>
  <div class="video">
		<!--视频页面-->
		<hx-video-msg></hx-video-msg>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Video',
  components:{
  	"hx-video-msg":{
  		template:`
  			<div>
					<div class="video" v-for="items in arr">
						<header class="video-header">
							<img :src="items.group.user.avatar_url" class="am-comment-avatar" width="48" height="48">
							<span>{{items.group.user.name}}</span>
							<span class="hasBorder">x</span>
						</header>
//						<p class="am-article-lead">
//							<video :src="items.group.mp4_url.url_list"></video>
//						</p>
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
	  			console.log(res.data.data.data[0].group);
	  			return res.data.data.data;
	  		}).then((data)=>{
	  			this.arr = data;
	  			//console.log(this.arr);
	  			//console.log(this.arr.group);
	  		})
  		}
  	}
  }
}
</script>

<style>
</style>


