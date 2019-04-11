// 定义数据操作
const INCREMENT = "INCREMENT";
const ADDTOCART = "ADDTOCART";
const MERGETOCART = 'MERGETOCART';
const TESTACTIONS = "TESTACTIONS";
export default {
  // 计数
  [INCREMENT] (state) {
    state.count++
  },
  [TESTACTIONS] (state,data) {
    alert(data)
  },
  [ADDTOCART] (state,data) {
    // 加入购物车
    let pro = data[0];
    state.cartData.push(pro)
    console.log(state.cartData)
  },
  [MERGETOCART](state, data) {
    let id = data.pid;
    let num = data.pnum;
    let inx = data.pindex;
    state.cartData[inx].count += num;
  }
}