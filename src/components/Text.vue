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
			      console.log(this.arr)
			    })
			}
		}
	}
}
</script>

<style>

.txt{
	background: #fff;
	overflow: auto;
	margin-bottom: .5rem;
}
.txt-header{
	padding-top: .5rem;
	height: 40px;
	line-height: 40px;
	margin-bottom: .5rem;
}
.txt-header img{
	margin-top: 4px;
	margin-left: 1rem;
	margin-right: 0.5rem;
}
.hasBorder{
	border: 1px solid #000;
	height: 16px;
	width: 16px;
	float: right;
	text-align: center;
	line-height: 12px;
	margin-top: 11px;
	margin-right: 1rem;
}
.am-article-lead{
	margin: 0;
	background: none;
}
.neihan{
	border: 1px solid #ccc;
	background: #eee;
	border-radius: 5px;
	color: #996c33;
	padding:.1rem .3rem;
	margin: .2rem .3rem;
	font-size: .8rem;
}
.am-icon-share{
	float: right;
}
.txt div i{
	padding: .8rem;
	color: #ccc;
}
</style>


