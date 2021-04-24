<template>
<transition name="fade" >
  <div class="cart-box"  v-show="isCartShow">
      <div class="cover-bg" @click="coverBtn"></div>
      <slot></slot>
  </div>
</transition>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'CartBox',
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['toggleCart']),
    coverBtn () {
      const flag = false
      this.toggleCart(flag)
    }
  },
  computed: {
    ...mapState(['isCartShow'])
  }

}
</script>
<style scoped>
.cart-box{ position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom:0;z-index: 2;}
.cover-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom:0;
  background-color: rgba(0, 0, 0, 0.5);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s 80ms;
  will-change: opacity;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
