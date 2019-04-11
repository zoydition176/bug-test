<template>
  <div id="rightSlideCart">
    <div class="rightToolbar-wake">
      <div class="rightToolbar-wake-content">
        <span class="wakebar-btn">打开购物车</span>
      </div>   
    </div>
    <div class="rightToolbar">
      <div class="rightToolbar-content">
        <h3 class="rightToolbar-title">
          购物车
        </h3>
        <ul>
          <li v-for="(xitem,index) in shopCartList" :key="index">
            <a :href="xitem.productPath" class="rightcart-pic">
              <img :src="xitem.productImage" alt="">
            </a>
            <div class="rightbar-name">
              <a :href="xitem.productPath">{{xitem.productName}}</a>
              <p>
                <b>{{xitem.productPrice}}</b>
                <span>数量：{{xitem.qty}}</span>
                <span>总价：
                  <b>{{(xitem.qty-0)*(xitem.productPrice-0)}}</b>
                </span>
              </p>
            </div>
            <div class="list-remove" @click="removeShopCart">x</div>
          </li>
        </ul>
        <div class="rightcart-empty" v-if="shopCartList.length===0">
          购物车是空的
        </div>
      </div>
    </div>
    <button @click='removeShopCart'>111</button>
  </div>
</template>
<script>
import { mapState,mapActions,mapGetters } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed:{
    ...mapGetters([
      'shopCartList'
    ])
  },
  methods:{
    removeShopCart(){
      console.log(this.shopCartList)
    }
  },
  watch:{

  },
  created(){  
    
  }
}
</script>
<style scoped>
.rightToolbar{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  height: 100%;
  padding: 10px;
  background: #f6f6f6;
  border-left: 1px solid #dedede;
}
.rightToolbar-wake{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  height: 100%;
  width: 40px;
  background: #000;
  color: #fff;
  text-align: center;
  
}
.rightToolbar-wake-content{
  position: relative;
  height: 100%;
  width: 100%;
}
.wakebar-btn{
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 0%;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  transform: translateY(-50%);
}
.rightToolbar-content{
  width: 320px;
}
.rightToolbar-title{
  font-weight: 400
}
.rightToolbar li{
  list-style: none;
}
.rightToolbar li:after{
  content: '';
  display: block;
  clear: both;
}
.rightcart-pic{
  display: block;
  float: left;
  width: 60px;
  height: 60px;
}
.rightbar-name{
  float: left;
  width: 240px;
}
.list-remove{
  float: left;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-top: 10px;
  cursor: pointer;
}
.rightbar-name a{
  display: block;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
}
.rightbar-name p{
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
}
.rightcart-pic img{
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
</style>