<template>
  <div class="textshow">
	<hx-text-list></hx-text-list>
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
  	"hx-text-list":{
  		template:`<div>
				<div class="txt" v-for="items in arr">
					<header class="txt-header">
						<img :src="items.group.user.avatar_url" class="am-comment-avatar" width="48" height="48">
						<span>{{items.group.user.name}}</span>
						<span class="hasBorderOne">+加关注</span>
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
			var id=window.location.hash.replace("#/Textshow/","");
		  	//段子数据
		  	Vue.axios.get("../static/json/duanText.json").then((res)=>{
		      return res.data.data.data;
		    }).then((data)=>{
		      this.arr=data;
		      console.log(this.arr)
		    })

		  	//段子评论的数据
		  	//
		  	// var url="http://m.neihanshequ.com/api/get_essay_comments/?app_name=neihanshequ_web&group_id="+id+"&offset=0&csrfmiddlewaretoken=a66e8d138afdb05562b9c00dc6bca50b";
		  	// console.log(url)
		  	// jsonp(url,null,(err,data)=>{
		  	// 	if(err){
		  	// 		console.log("数据获取失败");
		  	// 	}else{
		  	// 		console.log(data)
		  	// 	}
		  	// })
		  }	

  	}
  },
  computed:{
  	getId(){
  		var id=window.location.hash.replace("#/Textshow/","");
  		console.log(id);
  		return id;
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
</style>


