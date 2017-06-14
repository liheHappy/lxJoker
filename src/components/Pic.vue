<template>
	<div class="pic">
		<!-- 段子页面 -->
		<hx-pic-list></hx-pic-list>
	</div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  	name: 'Pic',
	components:{
		"hx-pic-list":{
			template:`<div>
					<div class="txt" v-for="items in arr">
					<router-link :to="{name:'Picshow',params:{id:items.group.group_id}}">
						<header class="txt-header">
							<img :src="items.group.user.avatar_url" class="am-comment-avatar" width="48" height="48">
							<span>{{items.group.user.name}}</span>
							<span class="hasBorder">x</span>
						</header>
						<p class="am-article-lead">
							{{items.group.text}}
							<span class="neihan">{{items.group.category_name}}</span>
							<img :src="items.group.large_image.url_list[0].url" class="imgBorder">
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
//			    Vue.axios.get("../static/json/duanPic.json").then((res)=>{
//			      return res.data.data.data;
//			    }).then((data)=>{
//			      this.arr=data;
//			    })
				if(localStorage.picArr){
					var arr = JSON.parse(localStorage.picArr);
					this.arr = arr;
				}else{
					var url = "http://m.neihanshequ.com/pic/?is_json=1&app_name=neihanshequ_web&min_time=1497066078&csrfmiddlewaretoken=a66e8d138afdb05562b9c00dc6bca50b";
					jsonp(url,null,(err,res)=>{
						if(err){
							console.log("获取数据失败");
						}else{
							this.arr = res.data.data;
							var str = JSON.stringify(this.arr)
							localStorage.picArr = str;
	//						console.log(this.arr)
	//						console.log(s)
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
							if(localStorage.picArr){
								localStorage.removeItem("picArr");
							}
							var refDom=document.querySelector(".am-icon-refresh");
							refDom.classList="am-icon-refresh am-icon-spin";
							
							var url="http://m.neihanshequ.com/pic/?is_json=1&app_name=neihanshequ_web&min_time=1497066078&csrfmiddlewaretoken=a66e8d138afdb05562b9c00dc6bca50b";
						  	jsonp(url,null,(err,res)=>{
						  		if(err){
						  			console.log("数据获取失败");
						  		}else{
						  			var data=res.data.data;
						  			this.$emit("toFather",data);
						  			var str=JSON.stringify(res.data.data)
						  			localStorage.picArr=str;
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
.pic{
	padding-top: 41px;
}
.txt{
	background: #fff;
	overflow: auto;
	margin-bottom: .5rem;
}
.imgBorder{
	min-height: 30vh;
	width: 100%;
	margin-top: .5rem;
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


