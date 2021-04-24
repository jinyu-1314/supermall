<template>
  <div class="cart">
    <nav-bar class="cart-nav">购物车({{cartLength}})</nav-bar>
    <scroll class="content">
      <cart-item-info ></cart-item-info>
    </scroll>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import NavBar from 'components/common/navbar/NavBar.vue'

import CartItemInfo from './childComps/CartItemInfo.vue'
import Scroll from '../../components/common/scroll/scroll.vue'

export default {
  components: { NavBar, CartItemInfo, Scroll },
  name: 'cart',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['cartLength'])

  }
}
</script>
<style scoped>
.cart-nav{background-color: var(--color-tint);
  color: #fff;}
.content{ height: calc(100vh - 93px);overflow: hidden;}
</style>
