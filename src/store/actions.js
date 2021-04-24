export default {
  addCart ({ state, commit }, payload) {
    const oldProduct = state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      // 修改的数据
      commit('editToCart', { oldProduct, payload })
    } else {
      commit('pushToCart', payload)
    }
  }
}
