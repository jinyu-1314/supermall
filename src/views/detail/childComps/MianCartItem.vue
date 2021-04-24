<template>
  <cart-box>
    <cart-box-item v-if="Object.keys(addCartInfo).length !=0">
       <template v-slot:header>
         <cart-header :skusInfo="curPro" :defaultValue="defaultValue"></cart-header>
        </template>
        <template v-slot:center>
          <cart-mian :propsInfo="addCartInfo.props" @styleClick="styleClick" :totalStock="totalStock" @counterChange1="counterChange1"></cart-mian>
        </template>
        <template>
          <div slot="footer" class="btn" @click="addToCart">确定</div>
        </template>
    </cart-box-item>
  </cart-box>
</template>
<script>
import cartBox from 'components/common/cart/cartBox.vue'
import CartBoxItem from 'components/common/cart/cartBoxItem.vue'
import CartHeader from 'components/content/MianCartItem/cartItem/cartHeader'
import CartMian from 'components/content/MianCartItem/cartItem/cartMian.vue'

import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'MianCartItem',
  props: {
    addCartInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    iid: String
  },
  components: { cartBox, CartBoxItem, CartMian, CartHeader },
  data () {
    return {
      curPro: {},
      totalStock: 0,
      product: {},
      num: 1
    }
  },
  methods: {
    ...mapMutations(['toggleCart']),
    ...mapActions(['addCart']),
    styleClick (valueObject) {
      this.curPro = this.addCartInfo.skus.find(v => v.styleId === valueObject.styleId && v.sizeId === valueObject.sizeId)
      if (this.curPro) {
        this.totalStock = this.curPro.stock
        console.log(this.totalStock)
      }

      console.log(this.curPro)
    },
    addToCart () {
      // 1、获取购物需要展示的信息
      const product = {
        ...this.curPro,
        num: this.num,
        title: this.addCartInfo.title,
        iid: this.iid
      }
      this.addCart(product)
      const isShow = false
      this.toggleCart(isShow)
    },
    counterChange1 (val) {
      this.num = val
    }
  },
  computed: {
    defaultValue () {
      const value = {
        priceRange: this.addCartInfo.priceRange,
        totalStock: this.addCartInfo.totalStock,
        img: this.addCartInfo.skus[0].img
      }
      return value
    }
  }

}
</script>
<style scoped>
.btn{width:100%; background:var(--color-high-text);height: 100%;}
</style>
