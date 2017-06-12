<template>
  <div class="message">
  	<mt-header title="消息">
	  <mt-button slot="right">
	  	<router-link to="/Aggrement">黑名单</router-link>
	  </mt-button>
	</mt-header>
	<mt-tab-container v-model="active">
	  <mt-tab-container-item id="tab-container1">
	    <mt-cell title="投稿互动">
	    	<span class="iconfont icon-iconfontqianjin"></span>
	    </mt-cell>
	    <mt-cell title="系统消息">
	    	<span class="iconfont icon-iconfontqianjin"></span>
	    </mt-cell>
	    <mt-cell title="粉丝关注">
	    	<span class="iconfont icon-iconfontqianjin"></span>
	    </mt-cell>
	  </mt-tab-container-item>
	</mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data(){
  	return {
  		active:"tab-container1"
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mint-button-text a{
	text-decoration: none;
	color: #493d32;
}
</style>
