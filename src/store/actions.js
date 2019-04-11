export default {
  addone({ commit,state }){
    commit('INCREMENT');
  },
  testactions({
      commit
    },data) {
      commit('TESTACTIONS',data)
  },
  addToCart({commit,state}, product) {
    // console.log(product[2])
    let id = product[1];
    let p = state.cartData;
    let num = parseInt(product[2]);
    let arr = [];
    for (let i = 0; i < p.length; i++) {
      if (id === p[i].productID) {
        console.log(num)
        commit('MERGETOCART', {
          pid:id, 
          pnum: num,
          pindex:i
        });
      }else{
        arr.push(1);
      }
    }
    if (arr.length === p.length) {
      commit('ADDTOCART', product);
    }
  }
}