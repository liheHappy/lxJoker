<template>
  <div class="search">
  <!-- 搜索栏 -->
		<mt-search
		  v-model="value"
		  placeholder="搜索">
		</mt-search>
		<!-- 背景图片 -->
		<div class="bg"></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Search',
  value:""
}
</script>

<style scoped>
.search{
	height: 100vh;
	width: 100%;
	background:#eee;
	position: absolute;
	z-index: 100;
}
.search .bg{
	background: url('./../../static/img/jie1.png') no-repeat;
	background-size: 100% 100%;
	width: 100%;
	height: 70vh;
}
</style>
