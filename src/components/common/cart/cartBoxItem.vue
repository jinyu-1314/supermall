<template>
<transition name="slide-fade">
  <div class="cart-box-item">
      <slot name="header"></slot>
      <div class="bodyer">
        <slot name="center"></slot>
        </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
  </div>
</transition>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'CartBoxItem',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['isCartShow'])
  },
  components: {

  }
}
</script>
<style scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  /* transition: all .3s ease; */
  transition: transform .3s cubic-bezier(0,0,.25,1) 80ms;
  transform: translate3d(0,0,0);
  will-change: transform;
}
.slide-fade-leave-active {
  transition: transform .3s cubic-bezier(0,0,.25,1) 80ms;
  will-change: transform;
  transform: translate3d(0,100%,0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  /* transform: translateY(10px); */
  /* opacity: 0; */
}
.cart-box-item{
 background: #fff; position: absolute; top:30%;right: 0; bottom: 0;left: 0;
 box-shadow: 0 -1px 40px rgba(0 0 0 / 30%);z-index: 4;
}
.bodyer{
  overflow: hidden;top:93px; position: absolute; left: 0;bottom: 44px; overflow: auto; right:0;
}
.footer{ position: absolute; left: 0; bottom: 0; height: 44px;right:0;text-align: center;
    line-height: 44px; color: #fff; }
</style>
