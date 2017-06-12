<template>
  <div class="index">
		<!-- 头部选项卡 -->
  		<hx-tabbar></hx-tabbar>
		<router-view></router-view>
		<!-- 段子页面 -->
		<div id="txt">
			<header class="txt-header">
				<img src="" alt="">
			</header>
		</div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Index',
	data(){
		return {
			selected:"1"
		}
	},
	components:{
		"hx-tabbar":{
			template:`<ul class="am-nav am-nav-pills am-nav-justify">
			<li>
				<router-link to="/Text"><span class="hxactive" @click="toggleClass">段子</span></router-link>
			</li>
			<li>
				<router-link to="/Pic"><span @click="toggleClass">图片</span></router-link>
			</li>
			<li>
				<router-link to="/Text"><span @click="toggleClass">视频</span></router-link>
			</li>
		</ul>`,
			methods:{
				toggleClass:function(event){
					if(event.target.className=="hxactive"){
					}else{
						var arr=document.querySelectorAll(".am-nav li span");
						for(var i=0;i<3;i++){
							arr[i].className="";
						}
						event.target.className="hxactive";
					}
				}
			}
		}
	},
	created(){
		Vue.axios.get("../static/json/duanText.json").then((res)=>{
			console.log(res.data.data.data);
		})
	},
	computed:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.am-nav.am-nav-pills.am-nav-justify{
	background:#dcd9cf;
}
.am-nav.am-nav-pills.am-nav-justify li{
	text-align: center;
	height: 40px;
	line-height: 40px;
}
.am-nav.am-nav-pills.am-nav-justify>li>a{
	color: #874c0d;
}
.am-nav.am-nav-pills.am-nav-justify>li>a:hover{
	background: none;
}
.hxactive{
	border-bottom:2px solid #493d32;
	margin-bottom: 1px;
	display: inline-block; 
}
</style>
