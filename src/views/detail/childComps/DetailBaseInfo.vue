<template>
<div class="base-info" v-if="Object.keys(goods).length !=0">
  <div class="info-title">{{goods.title}}</div>
  <div class="info-price">
    <span class="n-price">{{goods.newPrice}}</span>
    <span class="o-price">{{goods.oldPrice}}</span>
    <span class="discount">{{goods.discount}}</span>
  </div>

  <div class="info-other">
    <span>{{goods.columns[0]}}</span>
    <span>{{goods.columns[1]}}</span>
    <span>{{goods.services[goods.services.length-1].name}}</span>
  </div>
  <div class="info-service">

    <span class="info-servicr-item" v-for="index in goods.services.length-1" :key="index">
      <img :src="goods.services[index-1].icon" alt="" v-if="goods.services[index-1].icon">

     <span>{{goods.services[index-1].name}}</span>
    </span>
  </div>

</div>
</template>
<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
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
.info-title{font-size: 14px;padding: 10px 0 8px;line-height: 20px; font-weight: 600;}
.info-price{margin-bottom: 20px;}
.n-price{ font-size: 20px;color: var(--color-tint);margin-right: 5px;}
.o-price{font-size: 10px; color: #ccc;text-decoration:line-through}
.discount{ background: var(--color-tint); color: #fff;font-size:12px;padding:2px 3px;border-radius: 10px;vertical-align: top;}
.info-other{display: flex; font-size: 12px; justify-content: space-between; margin:0 5px;color:#9e9e9e; border-bottom: 3px solid #eee;padding-bottom: 5px;}
.info-service{display: flex;justify-content: space-between; font-size: 12px; padding: 15px 5px;border-bottom: 5px solid #eee;}
.info-servicr-item img{width: 10px;height: 10px;}
</style>
