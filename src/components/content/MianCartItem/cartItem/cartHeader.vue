<template>
<div class="cart-header">
  <div class="img-wrap">
    <img :src="skusInfo.img||defaultValue.img" >
  </div>
  <div class="text-wrap">
    <span class="num">{{skusInfo.currency + skusInfo.nowprice||defaultValue.priceRange}}</span>
    <span>库存{{skusInfo.stock||defaultValue.totalStock}}件</span>
    <span>请选择：<i class="selectStyle">{{skusInfo.style?'"'+skusInfo.style+'""'+skusInfo.size+'"':''}}</i></span>
  </div>
  <img src="~assets/img/common/close.png" class="close" >
</div>
</template>
<script>
export default {
  name: 'cartHeader',
  props: {
    skusInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    defaultValue: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.cart-header{ display: flex; position: absolute; top: -40px;right:0;left:0}
.img-wrap{ border: 1px solid #cecece; background: #fff;margin-left: 12px;width: 100px;height: 100px; padding:2px;}
.img-wrap img{width: 100%; height: 100%;}
.text-wrap{ flex: 1;width:100%; flex-direction: column; display: flex;padding-left:10px; padding-top: 40px;    font-size: 13px;}
.text-wrap>span{padding-bottom: 3px;}
.num{font-size:20px;color:var(--color-high-text);padding-top: 8px;}
.close{width: 24px; height: 24px; position: absolute; right:10px;top:55px}
.selectStyle{ color:var(--color-high-text); font-style: normal;}
</style>
