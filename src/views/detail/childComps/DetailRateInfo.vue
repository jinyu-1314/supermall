<template>
<div class="rate-info" v-if="Object.keys(rateInfo).length !=0">
    <div class="rate-list">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="rate-item">
      <div class="rate-user">
        <img :src="rateInfo.user.avatar" />
        <span>{{rateInfo.user.uname}}</span>
      </div>
      <div class="rate-info-text">
        <div>{{rateInfo.content}}</div>
        <span>{{rateInfo.created |showDate}}{{rateInfo.style}}</span>
      </div>
      <div class="info-img" v-if="rateInfo.images">
        <img v-lazy="img" alt="" v-for="(img,indey) in rateInfo.images" :key="indey">
      </div>
    </div>
</div>
</template>
<script>
import { dateFormat } from '@/utils/dateFormat.js'
export default {
  name: 'DetailRateInfo',
  props: {
    rateInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    showDate (val) {
      return dateFormat(val)
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.rate-info{padding:0 10px 30px;border-bottom:5px solid #eee ;}
.rate-list{
  padding: 10px 0 ; border-bottom: 2px solid #eee;display: flex; justify-content:space-between;
}
.rate-user{margin-bottom: 10px;}
.rate-user img{width: 40px; height: 40px; border-radius: 100%; vertical-align: middle; margin-right: 10px;}
.rate-info-text{ color: #b6b6b6;}
.rate-info-text>div{
  line-height: 20px; font-size: 13px;
}
.rate-info-text>span{font-size: 12px;}
.rate-item{padding-top: 10px;}
.info-img {height: 80px; overflow: hidden; margin-top: 5px;display: flex;}
.info-img img{ width: 80px; margin-right: 10px;}
</style>
