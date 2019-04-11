<template>
  <div class="errorPage">
    <img src="/static/404.jpg" alt="">
    <span v-html="message"></span>
  </div>
</template>
<style>
.errorPage{
  margin: 0 auto;
  text-align: center
}
.errorPage span{
  display: block;
  padding: 20px 0;
  font-size: 20px;
  color: #333;
}
.errorPage a{
  display: inline-block;
  color: #0681d3;
  text-decoration: none;
}
</style>
<script>
export default {
  data(){
    return {
      message:'Oh! Sorry! This page does not exist!'
    }
  },
  created() {

  }
}
</script>
