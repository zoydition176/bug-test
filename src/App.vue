<template>
  <div id="app">
    <router-view></router-view>   
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {},
  components: {},
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app{
  overflow: hidden;
}
.content{
  width: 1440px;
  margin: 0px auto;
}
</style>
