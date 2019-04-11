<template>
  <div class="index">
    <Header></Header>
    <div class="content">
      <el-carousel trigger="click" height="408px" :autoplay="false">
        <el-carousel-item v-for="(item,index) in carouselContent" :key="item[index]">
          <div>
            <img :src="item.bg" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import Header from '../common/head'
export default {
  data () {
    return {
      carouselContent:[
        {
          bg:'/static/bb2.jpg'
        },
        {
          bg:'/static/bb3.jpg'
        }
      ]
    }
  },
  computed:{},
  components: {Header},
  methods: {}
}
</script>
<style scoped>

</style>
