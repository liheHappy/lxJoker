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
					<span class="hasBorder" @click="quGuan">x</span>
					<router-link :to="{name:'Picshow',params:{id:items.group.group_id}}">
						<header class="txt-header">
							<img :src="items.group.user.avatar_url" class="am-comment-avatar" width="48" height="48">
							<span>{{items.group.user.name}}</span>
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
					<hx-magic v-show="show"></hx-magic>
				</div>`,
		  	data(){
		  		return {
		  			arr:"",
		  			show:false
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
				},
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
				},
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
.pic .txt{
	position: relative;
}
.pic .hasBorder{
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
.pic .am-article-lead{
	margin: 0;
	font-size: 1.6rem;
	color: #333333;
	border: none;
	background: none;
}
.pic .neihan{
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
.pic .txt a span{
	color: #000;
}
.pic .magic{
	border-radius: 15px;
	height: 38vh;
	background: #fff;
	position: fixed;
	top: 30vh;
	width: 80vw;
	left: 10vw;
}
.pic .magic header{
	height: 6vh;
	background: pink;
	line-height: 6vh;
	color: #fff;
	text-align: center;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}
.pic .magic .moreRadio{
	padding:0 1rem;
}
.pic .magic .moreRadio p{
	margin: 0;
	padding: 0;
	padding: .4rem 0;
	font-size: 1.4rem;
}
.pic .magic .moreRadio input{
	float: right;
}
.pic .magic .yesNo{
	height: 7vh;
	width: 100%;
	border-top: 1px solid #eee;
	margin-top: 1rem;
}
.pic .magic .yesNo button{
	height: 7vh;
	width: 49%;
	color: #ccc;
	background: none;
	border: none;
}
.pic .magic .yesNo button:nth-child(2){
	color: pink;
	border-left: 1px solid #eee;
}
</style>


