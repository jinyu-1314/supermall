<template>
<div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <span class="cart">加入购物车</span>
      <span class="buy">购买</span>
    </div>
</div>
</template>
<script>
export default {
  name: 'DetailBottomBar',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.bottom-bar{
  height: 49px;background: #fff; position: relative;bottom: 0;
}
.bottom-bar{display: flex;}
.bar-left{flex: 5;display: flex; font-size: 14px;}
.icon{background: url('~assets/img/detail/detail_bottom.png') no-repeat 0 0/100% auto;width: 24px;height: 24px;}
.service{background-position: 0 -58px;}
.shop{background-position: 0 -109px;}
.bar-left>div{flex: 1;display: flex; justify-content: center;flex-direction: column; align-items: center;}
.bar-right{flex: 4;display: flex; }
.bar-right>span{flex:1;height: 100%; text-align: center; line-height: 49px;}
.buy{background: var(--color-tint);color: #fff;}
.cart{background: #fadd09;}

</style>
