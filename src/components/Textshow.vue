<template>
  <div class="textshow">
	<!-- 头部 -->
	<hx-show-header></hx-show-header>
  	<!-- 信息列表 -->
	<hx-text-msg></hx-text-msg>
	<!-- 热评列表 -->
	<hx-commenthot-list></hx-commenthot-list>
	
	<!-- 鲜评列表 -->
	<hx-commentnew-list></hx-commentnew-list>
	
	<!--评论标签-->
	<hx-commentnew-input></hx-commentnew-input>
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  name: 'Textshow',
  data(){
  	return {
  		id:""
  	}
  },
  methods:{

  },
  components:{
  	"hx-text-msg":{
  		template:`<div>
				<div class="txt txtTop">
					<header class="txt-header">
						<img :src="obj.group.user.avatar_url" class="am-comment-avatar" width="48" height="48">
						<span>{{obj.group.user.name}}</span>
						<span class="hasBorderOne">+加关注</span>
					</header>
					<p class="am-article-lead">
						{{obj.group.text}}
						<span class="neihan">{{obj.group.category_name}}</span>
					</p>
					<div>
						<i class="am-icon-thumbs-up">	{{obj.group.digg_count}}</i>
						<i class="am-icon-thumbs-down">{{obj.group.bury_count}}</i>
						<i class="am-icon-commenting-o">{{obj.group.comment_count}}</i>
						<i class="am-icon-share">
						{{obj.group.share_count}}</i>
					</div>
				</div>
			</div>`,
		data(){
			return {
				obj:""
			}
		},
		created(){
			var id=window.location.hash.replace("#/Textshow/","");
			localStorage.textData=localStorage.textArr;
		   	var arr=JSON.parse(localStorage.textArr);
		    arr.map((item,index)=>{
		     	if(item.group.group_id==id){
		     		this.obj=item;
		      	}
		    })
		  }	

  	},
  	"hx-show-header":{
  		template:`<div>
  					<header data-am-widget="header"
			          class="am-header am-header-default">
			      <div class="am-header-left am-header-nav" @click="goBack">
			  			<i class=" fa am-icon-angle-left"></i>
			      </div>

			      <h1 class="am-header-title">
			          详情
			      </h1>

			      <div class="am-header-right am-header-nav">
			      	举报
			      </div>
			  </header>
			  </div>`,
		methods:{
			goBack(){
				window.history.back();
			}
		}
  	},
  	"hx-commentnew-input":{
  		template:`
				<div class="footP">
					<p>
						<span class="am-icon-pencil"></span>
						<input type="text" placeholder="期待你的神评论" />
					</p>
				</div>
  		`
  	},
  	"hx-commenthot-list":{
  		template:`<div class="list">
	  				<span class="commentHot" v-if="show">热门评论( {{num}} )</span>
			  		<div v-for="items in arr">
						<article class="am-comment">
						  <a href="#link-to-user-home">
						    <img :src="items.avatar_url" alt="" class="am-comment-avatar" width="48" height="48"/>
						  </a>
						  <div class="am-comment-main">
						    <header class="am-comment-hd">
						      <div class="am-comment-meta">
						        <a href="#link-to-user" class="am-comment-author">{{items.user_name}}</a>
						   		<time>{{ dataChange(items.create_time) }}</time>
						      </div>
						      <div class="zanZhuan">
						      	<i class="am-icon-thumbs-up">{{items.digg_count}}</i>
								<i class="am-icon-share"></i>
						      </div>
						    </header>

						    <div class="am-comment-bd">
						      {{items.text}}
						    </div>
						  </div>
						</article>
						
					</div>
				</div>`,
  		data(){
  			return {
  				arr:"",
  				num:"",
  				show:true
  			}
  		},
  		methods:{
  			dataChange(x){
  				var d=new Date(x*1000);
  				return this.format(d);
  			},
  			format(date){
				var y = date.getFullYear();  
			    var m = date.getMonth() + 1;  
			    m = m < 10 ? '0' + m : m;  
			    var d = date.getDate();  
			    d = d < 10 ? ('0' + d) : d;  
			    return y + '-' + m + '-' + d; 
  			}
  		},
  		created(){
		  	//段子热门评论的数据
		  	var id=window.location.hash.replace("#/Textshow/","");
		  	var url="http://m.neihanshequ.com/api/get_essay_comments/?app_name=neihanshequ_web&group_id="+id+"&offset=0&csrfmiddlewaretoken=a66e8d138afdb05562b9c00dc6bca50b";
		  	jsonp(url,null,(err,res)=>{
		  		if(err){
		  			console.log("数据获取失败");
		  		}else{
		  			var data=res.data.top_comments;
		  			this.arr=data;
		  			var len=this.arr.length
		  			if(len!=0){
		  				this.num=len;
		  			}else{
		  				this.show=false;
		  			}
		  		}
		  	})

		  	//本地获取
		  	// Vue.axios.get("../static/json/comment.json").then((res)=>{
		   //    return res.data.data.top_comments;
		   //  }).then((data)=>{
		   //    this.arr=data;
		   //    this.num=this.arr.length;
		   //  })
  		}
  	},
  	"hx-commentnew-list":{
  		template:`
  			<div class="list">
  				<span class="commentHot" v-if="show">新鲜评论( {{num}} )</span>
		  		<div v-for="items in arr">
					<article class="am-comment">
					  <a href="#link-to-user-home">
					    <img :src="items.avatar_url" alt="" class="am-comment-avatar" width="48" height="48"/>
					  </a>
					  <div class="am-comment-main">
					    <header class="am-comment-hd">
					      <div class="am-comment-meta">
					        <a href="#link-to-user" class="am-comment-author">{{items.user_name}}</a>
					   		<time>{{ dataChange(items.create_time) }}</time>
					      </div>
					      <div class="zanZhuan">
					      	<i class="am-icon-thumbs-up">{{items.digg_count}}</i>
							<i class="am-icon-share"></i>
					      </div>
					    </header>
					    <div class="am-comment-bd">
					      {{items.text}}
					    </div>
					  </div>
					</article>
				</div>
			</div>`,
  		data(){
  			return {
  				arr:"",
  				num:"",
  				show:true
  			}
  		},
  		methods:{
  			dataChange(x){
  				var d=new Date(x*1000);
  				return this.format(d);
  			},
  			format(date){
				var y = date.getFullYear();  
			    var m = date.getMonth() + 1;  
			    m = m < 10 ? '0' + m : m;  
			    var d = date.getDate();  
			    d = d < 10 ? ('0' + d) : d;  
			    return y + '-' + m + '-' + d; 
  			}
  		},
  		created(){
		  	//段子新鲜评论的数据
		  	var id=window.location.hash.replace("#/Textshow/","");
		  	var url="http://m.neihanshequ.com/api/get_essay_comments/?app_name=neihanshequ_web&group_id="+id+"&offset=0&csrfmiddlewaretoken=a66e8d138afdb05562b9c00dc6bca50b";
		  	jsonp(url,null,(err,res)=>{
		  		if(err){
		  			console.log("数据获取失败");
		  		}else{
		  			var data=res.data.recent_comments;
		  			this.arr=data;
		  			var len=this.arr.length
		  			if(len!=0){
		  				this.num=len;
		  			}else{
		  				this.show=false;
		  			}
		  		}
		  	})

		  	//获取本地模拟json数据
		  	// Vue.axios.get("../static/json/comment.json").then((res)=>{
		   	//    return res.data.data.recent_comments;
		   	//  }).then((data)=>{
		   	//    this.arr=data;
		   	//    this.num=this.arr.length;
		   	//  })
  		}
  	}
  }
}
</script>

<style>
.textshow{
	height: 100vh;
	background: #eee;
	position: absolute;
	z-index: 1;
	overflow-x: hidden;
	width: 100%;
}
.txt{
	background: #fff;
	overflow: auto;
	margin-bottom: .5rem;
}
.txtTop{
	padding-top: 49px;
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
.hasBorderOne{
	border: 2px solid pink;
	color: pink;
	float: right;
	text-align: center;
	line-height: 12px;
	margin-right: 1rem;
	padding: .5rem .5rem;
	margin-top: .3rem;
	border-radius: 5px;
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
.fontColor{
	color: #000;
}
.am-header.am-header-default{
	background:#dcd9cf;
	position: fixed;
	z-index: 100;
}
.am-header-left.am-header-nav,.am-header-default .am-header-title,.am-header-right.am-header-nav{
	color: #874c0d;
}
.am-header-default .am-header-title{
	font-size: 1.7rem;
}
.am-header-left.am-header-nav i{
	font-weight: normal;
}
.textshow .list{
	background: #fff;
}
.textshow>div:nth-of-type(4){
	margin-bottom: 38px;
}
.am-comment{
	padding: 1rem .5rem;
}
.am-comment-author{
	display: block;
}
.list i{
	padding: .5rem;
	color: #ccc;
}
.commentHot{
	font-size: .5rem;
	margin-left: .5rem;
}
.footP{
	position: fixed;
	width: 100%;
	background: #FFFFFF;
	z-index: 1000;
	border-top: 1px solid #e5e5e5;
	padding: 0.5rem 1% 0.5rem 1%;
	bottom: 0;
}
.footP p{
	margin: 0;
	border: 1px solid #cccccc;
}
.footP p span{
	display: inline-block;
	width: 10%;
	height: 10%;
	text-align: center;
	line-height: 2rem;
	color: #cccccc;
}
.footP p input{
	width: 88%;
	height: 3rem;
	border: none;
}
</style>


