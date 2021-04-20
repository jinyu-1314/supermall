<template>
<div id="detail">
  <detail-nav-bar />
  <scroll class="content" ref="myScroll">
  <my-swiper :banner='topImage' class="swiper" />
  <detail-base-info :goods='goods' />
  <detail-shop-info :shop="shop" />
  <detail-goods-info :detail-info="detailInfo" @imageItemDetail="imageload" />
  <detail-param-info :paramInfo="paramInfo" />
  </scroll>
</div>
</template>
<script>
import detailNavBar from './childComps/DetailNavBar'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'

import MySwiper from 'components/common/swiper/index'

import { getDetail, Goods, Shop, GoodsParams } from '@/api/detail.js'
import Scroll from 'components/common/scroll/scroll.vue'

export default {
  components: { detailNavBar, MySwiper, DetailBaseInfo, DetailShopInfo, Scroll, DetailGoodsInfo, DetailParamInfo },
  name: 'detail',
  data () {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    }
  },

  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      // 保存传入 iid 的数据
      this.iid = this.$route.params.iid
      // 获取页面请求
      getDetail(this.iid).then(({ result: res }) => {
        // 获取顶部的图片轮播图片数据
        console.log(res)
        this.topImage = res.itemInfo.topImages

        // 获取商品信息
        this.goods = new Goods(res.itemInfo, res.columns, res.shopInfo.services)

        //  获取店铺信息
        this.shop = new Shop(res.shopInfo)
        // 详情数据
        this.detailInfo = res.detailInfo
        // 获取参数的信息
        this.paramInfo = new GoodsParams(res.itemParams.info, res.itemParams.rule)
      })
    },
    imageload () {
      this.$refs.myScroll.refresh()
    }
  }
}
</script>
<style scoped>
.swiper{height: 300px;}
#detail{position: relative;z-index: 111;background: #fff; height: 100vh;}
.content{height: calc(100vh - 44px); overflow: hidden;}
</style>
