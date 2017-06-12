<template>
  <div class="write">
	<mt-header title="投稿">
	  <router-link to="/" slot="left">
	    <mt-button @click="handleClose">X</mt-button>
	  </router-link>
	  <mt-button slot="right">发表</mt-button>
	</mt-header>
    <h1>投稿</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Write',
  methods:{
  	handleClose:function(){

  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.write{
	position: fixed;
	height: 100vh;
	width: 100%;
	z-index: 100;
	background: #fff;
}
</style>
