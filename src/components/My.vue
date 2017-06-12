<template>
  <div class="message">
  	<mt-header>
		  <mt-button slot="right">
		  	<span class="iconfont icon-icon"></span>
		  	<span class="iconfont icon-shezhi"></span>
		  </mt-button>
		</mt-header>
	  <div class="myInfo">
	  	<div class="myHead">
	  		<p>用户头像</p>
	  	</div>
	  	<div class="myBody">
	  		dsads 
	  	</div>
	  </div>
	  <div class="myNav">
	  	<mt-navbar v-model="selected">
			  <mt-tab-item id="1">投稿</mt-tab-item>
			  <mt-tab-item id="2">直播</mt-tab-item>
			  <mt-tab-item id="3">收藏</mt-tab-item>
			  <mt-tab-item id="4">评论</mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <mt-cell v-for="n in 5" :title="'内容 ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="4">
			    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
			  </mt-tab-container-item>
			</mt-tab-container>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data(){
		return {
			selected:"1"
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.message .myInfo{
		height: 10rem;
	}
	.message .myInfo .myHead{
		width: 8rem;
		float: left;
	}
	.message .myInfo .myBody{
		float: left;
	}
	
</style>
