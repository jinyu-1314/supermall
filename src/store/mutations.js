export default {
  toggleCart (state, flag) {
    state.isCartShow = flag
  },
  editToCart (state, { oldProduct, payload }) {
    oldProduct = Object.assign(oldProduct, payload)
  },
  pushToCart (state, payload) {
    state.cartList.push(payload)
  }
}
