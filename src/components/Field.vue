<template>
  <div class="field">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Field',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.field{
	height: 100vh;
	width: 100%;
	background: #fff;
	position: absolute;
	z-index: 1000;
}
</style>
