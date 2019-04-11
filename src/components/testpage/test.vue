<template>
  <div class="test">
    <!-- <Header></Header> -->
    <rightSlide></rightSlide>
    <div class="content">
      <!-- 商品列表 -->
      <el-row>
        <el-col :span="6" class="items-block" v-for="(item, index) in productList" :key="index">
            <router-link :to="item.productPath" :data-path="item.productPath" class="shop-items" :product_id="item.productID">
              <img :src="item.productImage" alt="">
              <p>
                <span v-html="item.productName"></span>
                <b>售价：<i>{{item.productPrice}}</i></b>
              </p>
            </router-link>
            <div class="shop-items-btn">
              <!-- <input type="text" :value="productList[index].count" @change="ttt($event,index)"> -->
              <el-input-number
              :dk="index"
              :min="1"
              :max="10"
              v-model="item.count"
              @change="changeListNumber($event,index)"
              label="数量">
              </el-input-number>

              <el-button type="primary" @click="add(item,index)">加入购物车</el-button>
            </div>
            <span>sdadas:{{item.count}}</span>
            <span class="shop-items-stocks">产品库存：{{item.productQuantity}}</span>
        </el-col>
      </el-row>

    </div>
  </div>
</template>
<script>
import { mapState,mapActions,mapGetters } from 'vuex'
import rightSlide from '../testpage/rightSlide.vue'
export default {
  data () {
    return {
      InitNum:1,
      aaa:10
    }
  },
  computed:{
    ...mapState({
      count: state => state.count,
      productData: state => state.productData,
      testdata: state => state.productData[1].productNumber
    }),
    ...mapGetters([
      'productList'
    ])
  },
  components: {rightSlide},
  methods: {
    ...mapActions([
      'addone',
      'addToCart',
      'testactions'
    ]),
    changeListNumber(el,i){
      this.productList[i].count = el;
      console.log(this.productList[i].count);
    },
    handleChange(v){},
    add(item,i,el){
      let num = this.productList[i].count;
      console.log(num)
      this.addToCart([item,item.productID,num])
    }
  },
  created(){
    let _t = this;
    _t.productList.forEach(element=>{
      this.$set(element, 'count', element.productDefaultSubmit);
    })
  }
}
</script>
<style scoped>
.grid-content{
  padding-bottom: 30px;
}
.items-block{
  padding: 0 20px;
  margin-bottom: 30px
}
.shop-items{
  display: block;
  text-align: center;
  text-decoration: none;

}
.shop-items img{
  display: block;
  max-width: 260px;
  height: auto;
  margin: 0 auto
}
.shop-items p{
  text-align: center;
  color: #666666;
  padding: 20px 0;
  overflow: hidden;
}
.shop-items p span{
  float: left;
}
.shop-items p b{
  float: right;
  color: #d63030;
  margin-left: 20px;
  font-size: 16px;
}
.shop-items p b i{
  font-size: 18px;
  font-style: normal;
}
.shop-items-btn{
  overflow: hidden;
}
.shop-items-btn button{
  float: right;
}
.shop-items-btn .el-input-number{
  width: 140px;
}
.shop-items-stocks{
  color: #999;
  font-size: 12px;
}
</style>
