<template>
  <div class="index">
		<!-- 头部选项卡 -->
  		<hx-tabbar></hx-tabbar>
		<router-view></router-view>
		
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
					<router-link to="/"><span class="hxactive" @click="toggleClass">段子</span></router-link>
				</li>
				<li>
					<router-link to="/Pic"><span @click="toggleClass">图片</span></router-link>
				</li>
				<li>
					<router-link to="/Video"><span @click="toggleClass">视频</span></router-link>
				</li>
			</ul>`,
			data(){
				return {
					active:true
				}
			},
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
			},
			created(){
				var pathData=window.location.pathname.replace("/","");
				if(pathData=="Video"){
					// console.log(document.querySelector(".am-nav-justify li span"))
					// document.querySelector(".am-nav-justify li span").classList.add("lihe hxactive")
				}
			},
			 
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.am-nav.am-nav-pills.am-nav-justify{
	background: #dcd9cf;
	z-index: 100;
	position: fixed;
}
.am-nav.am-nav-pills.am-nav-justify li{
	text-align: center;
	height: 25px;
	line-height: 25px;
}
.am-nav.am-nav-pills.am-nav-justify>li>a{
	color: #6b5547;
}
.am-nav.am-nav-pills.am-nav-justify>li>a:hover{
	background: none;
}
.hxactive{
	border-bottom:2px solid #6b5547;
	margin-bottom: 1px;
	display: inline-block; 
}
.txt{
	background: #fff;
	overflow: auto;
	margin-bottom: .5rem;
	color: #000;
}

.lihe{
	font-size: 100px;
}

</style>
