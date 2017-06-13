<template>
	<div class="text">
		<!-- 段子页面 -->
		<hx-text-list></hx-text-list>
	</div>
</template>

<script>
import Vue from 'vue'
export default {
  	name: 'Text',
	components:{
		"hx-text-list":{
			template:`<div>
					<div class="txt" v-for="items in arr">
					<router-link :to="{name:'Textshow',params:{id:items.group.group_id}}">
						<header class="txt-header">
							<img :src="items.group.user.avatar_url" class="am-comment-avatar" width="48" height="48">
							<span>{{items.group.user.name}}</span>
							<span class="hasBorder">x</span>
						</header>
						<p class="am-article-lead">
							{{items.group.text}}
							<span class="neihan">{{items.group.category_name}}</span>
						</p>
						<div>
							<i class="am-icon-thumbs-up">	{{items.group.digg_count}}</i>
							<i class="am-icon-thumbs-down">{{items.group.bury_count}}</i>
							<i class="am-icon-commenting-o">{{items.group.comment_count}}</i>
							<i class="am-icon-share">
							{{items.group.share_count}}</i>
						</div>
					</router-link>
					</div>
				</div>`,
		  	data(){
		  		return {
		  			arr:""
		  		}
		  	},
			created(){
			    Vue.axios.get("../static/json/duanText.json").then((res)=>{
			      return res.data.data.data;
			    }).then((data)=>{
			      this.arr=data;
			    })
			}
		}
	}
}
</script>

<style>
.text{
	padding-top: 56px;
}
.txt a{
	background: #fff;
	overflow: auto;
	margin-bottom: .5rem;
	color: #000;
}
</style>


