<template>
  <div class="index">
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">段子</mt-tab-item>
		  <mt-tab-item id="2">图片</mt-tab-item>
		  <mt-tab-item id="3">视频</mt-tab-item>
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
		</mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'Index',
	data(){
		return {
			selected:"1"
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.mint-navbar{
		background: #dcd9cf;
		color: #6b5547;
	}
	.mint-navbar .mint-tab-item .mint-tab-item-label{
		font-size: 1.5rem;
	}
	.mint-navbar .is-selected .mint-tab-item-label{
		color: #6b5547;
		font-weight: bold;
	}


</style>
