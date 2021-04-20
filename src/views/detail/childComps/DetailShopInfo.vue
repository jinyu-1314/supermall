<template>
<div class="shop-info">
  <div class="shop-top">
    <img :src="shop.logo" alt="">
    <span class="title">{{shop.name}}</span>
  </div>
  <div class="shop-middle">
    <div class="shop-middle-left">
      <div>
        <span class="font_18">{{shop.sells |sellCountFilter}}</span>
        <span>总销量</span>
      </div>
      <div>
        <span class="font_18">{{shop.cGoods}}</span>
        <span>全部宝贝</span>
      </div>
    </div>
    <div class="shop-middle-right">
        <div v-for="(item,index) in shop.score" :key='index' class="shop-middle-text">
          <span>
            <span>{{item.name}}</span>
            <span :style="{color:item.isBetter?'red':'green'}">{{item.score}}</span>
          </span>
          <span :style="{background:item.isBetter?'red':'green'}">{{item.isBetter?"高":"低"}}</span>
        </div>
    </div>
  </div>
  <div class="shopBtn">
    <span @click="shopClick">进店逛一逛</span>
  </div>

</div>
</template>
<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter (val) {
      if (val > 10000) {
        return (val / 10000).toFixed(1) + '万'
      }
    }
  },
  data () {
    return {
      gSell: this.shop.sells
    }
  },
  methods: {
    shopClick () {
      this.$router.replace('/home')
    }
  }

}
</script>
<style scoped>
.shop-info{padding:20px 0; border-bottom: 5px solid #eee; font-size: 13px;}
.shop-top{display: flex;flex-direction:row;align-items: center;}
.shop-top img{width: 50px; height: 50px; box-shadow: 0 0 3px rgba(0,0,0,0.2); border-radius: 100%; margin-right: 10px; margin-left: 10px;}
.shop-middle{display: flex;     padding: 22px 0;}
.shop-middle>div{width: 50%;float: left;}
.shop-middle-left{position: relative;display: flex;justify-content:space-evenly;    align-items: center;}
.shop-middle-left>div{display: flex;flex-direction: column;text-align: center;}
.shop-middle-left::after{content: ''; width: 1px; height:75% ;position: absolute; background: #eee;right: 0; top: 10%; }

.shop-middle-text{width: 70%;margin: 0 auto; display: flex; justify-content: space-between; margin-bottom: 5px;}
.shop-middle-text>span:last-child{color: #fff;border-radius: 2px;}
.shop-middle-text>span>span:last-child{padding-left: 5px;}
.font_18{font-size: 18px; margin-bottom: 5px;}
.shopBtn{text-align: center;}
.shopBtn span{display: inline-block; padding:5px 30px;background: #efefef; border-radius: 2px;}
</style>
