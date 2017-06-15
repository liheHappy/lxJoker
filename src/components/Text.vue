<template>
	<div class="text">
		<!-- 段子页面 -->
		<hx-text-list></hx-text-list>
		<!-- 刷新标签 am-icon-spin -->
		
	</div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
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
						<hx-refresh @toFather="getData"></hx-refresh>
					</div>`,
		  	data(){
		  		return {
		  			arr:""
		  		}
		  	},
			created(){
				//本地模拟数据
			    // Vue.axios.get("../static/json/duanText.json").then((res)=>{
			    //   return res.data.data.data;
			    // }).then((data)=>{
			    //   this.arr=data;
			    // })
			    if(localStorage.textData){
					var arr=JSON.parse(localStorage.textData);
					this.arr=arr;
			    }else{
			    	var url="http://m.neihanshequ.com/?is_json=1&app_name=neihanshequ_web&min_time=1497066604&csrfmiddlewaretoken=a66e8d138afdb05562b9c00dc6bca50b";
				  	jsonp(url,null,(err,res)=>{
				  		if(err){
				  			console.log("数据获取失败");
				  		}else{
				  			this.arr=res.data.data;
				  			var str=JSON.stringify(res.data.data)
				  			localStorage.textArr=str;
				  		}
				  	})
			    }
			    
			},
			methods:{
				getData(data){
					this.arr=data;
					var refDom=document.querySelector(".am-icon-refresh");
					refDom.className="am-icon-refresh";
				}
			},
			components:{
				"hx-refresh":{
					template:`
						<p class="refresh" @click="goRefresh">
							<i class="am-icon-refresh"></i>
						</p>
						`,
					methods:{
						goRefresh(){
							if(localStorage.textData){
								localStorage.removeItem("textData");
							}
							var refDom=document.querySelector(".am-icon-refresh");
							refDom.classList="am-icon-refresh am-icon-spin";
							
							var url="http://m.neihanshequ.com/?is_json=1&app_name=neihanshequ_web&min_time=1497066604&csrfmiddlewaretoken=a66e8d138afdb05562b9c00dc6bca50b";
						  	jsonp(url,null,(err,res)=>{
						  		if(err){
						  			console.log("数据获取失败");
						  		}else{
						  			var data=res.data.data;
						  			this.$emit("toFather",data);
						  			var str=JSON.stringify(res.data.data)
						  			localStorage.textArr=str;
						  		}
						  	})
						}
					}

				}
			}
		}
	}
}
</script>

<style>
.text{
	padding-top: 41px;
}
.txt a{
	background: #fff;
	overflow: auto;
	margin-bottom: .5rem;
	color: #000;
}
.imgBorder{
	min-height: 30vh;
	width: 100%;
	margin-top: .5rem;
}
.txt-header{
	color: #666666;
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
.txt .hasBorder{
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
.text .am-article-lead{
	border: none;
	font-size: 1.6rem;
	margin: 0;
	background: none;
	color: #333333;
}
.am-article-lead .neihan{
	border: 1px solid #6b5547;
	white-space: nowrap;
	background: #f5f5f5;
	border-radius: 4px;
	color: #6b5547;
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
.index .am-icon-refresh{
	font-size: 2.5rem;
}
.index .refresh{
	position: fixed;
	color: #6B5547;
	bottom: 4rem;
	right: 2rem;
	background: #ffffff;
	height: 3rem;
	width: 3rem;
	text-align: center;
	line-height: 2.5rem;
	border-radius: 100%;
	border: 2px solid #eeeeee;
	z-index: 100;
}
</style>


