import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import base from '../base/base.js'

Vue.use(Vuex)

const state = {
  count: 0,
  usernameMap: [
    {
      name:'18571549342',
      password:'123456'
    },
    {
      name:'admin',
      password:'admin'
    }
  ],
  shopcartNum:0,
  cartData:[],
  productData:[
    {
      productID:'10001',
      productName:'apple iphoneXs 64G',
      productImage: '/static/products/apple01.jpg',
      productPrice: '8699.00',
      productQuantity: 5,
      productDefaultSubmit:1,
      productPath: ''
    },
    {
      productID: '10002',
      productName: 'mi 小米8 透明版',
      productImage: '/static/products/mi01.jpg',
      productPrice: '3600.00',
      productQuantity: 12,
      productDefaultSubmit: 1,
      productPath: ''
    },
    {
      productID: '10003',
      productName: 'mi 小米MIX 3',
      productImage: '/static/products/mi02.jpg',
      productPrice: '4000.00',
      productQuantity: 10,
      productDefaultSubmit: 1,
      productPath: ''
    },
    {
      productID: '10004',
      productName: 'Sony/索尼 Xperia XZ3',
      productImage: '/static/products/sony01.jpg',
      productPrice: '5399.00',
      productQuantity: 3,
      productDefaultSubmit: 1,
      productPath: ''
    },
    {
      productID: '10005',
      productName: '华为 Mate 20 Pro',
      productImage: '/static/products/huawei01.jpg',
      productPrice: '5699.00',
      productQuantity: 9,
      productDefaultSubmit: 1,
      productPath: ''
    },
    {
      productID: '10006',
      productName: 'GALAXY Note9',
      productImage: '/static/products/ss01.jpg',
      productPrice: '6999.00',
      productQuantity: 6,
      productDefaultSubmit: 1,
      productPath: ''
    }
  ]
};
const getters = {
  isPrime: (state) => {
    let num = state.count;
    if( num < 2 ){
      return '不是质数'
    }
    if ( num === 2 ) {
      return '是质数'
    } else if ( num % 2 === 0 ) {
      return '不是质数'
    }
    var squareRoot = Math.sqrt(num);
    for (var i = 3; i <= squareRoot; i += 2) {
      if (num % i === 0) {
        return '不是质数'
      };
    }
    return '是质数'
  },
  productList: (state) => {
    // 重新拼接产品url
    let productData = base.deepClone(state.productData);
    productData = productData.map((item) => {
      item.productPath = '/products/' + item.productID;
      return item
    })
    // console.log('dasdasdd')
    return productData
  },
  shopCartList: (state) => {
    // 合并购物车内的产品
    let dataStr = base.deepClone(state.cartData);
    dataStr.forEach(element => {
      element['qty'] = element.count;
    })
    console.log(dataStr);
    return dataStr
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})