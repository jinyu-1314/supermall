<template>
<div id="detail">
  <detail-nav-bar @tabClick="tabClick" ref="nav" />
  <back-top @click.native="backTap" v-show="isShow" />
  <scroll class="content" ref="myScroll" :probe-type="3" @scroll="contentScroll">
    <my-swiper :banner='topImage' class="swiper" />
    <detail-base-info :goods='goods' />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detail-info="detailInfo" @imageItemDetail="imageload" />
    <detail-param-info :param-info="paramInfo" ref="param" />
    <detail-rate-info :rate-info="rateInfo" ref="rate" />
    <goods-list :list="recommendInfo"  ref="recommend" />
  </scroll>
  <detail-bottom-bar></detail-bottom-bar>
</div>
</template>
<script>
import detailNavBar from './childComps/DetailNavBar'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailRateInfo from './childComps/DetailRateInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import MySwiper from 'components/common/swiper/index'
import GoodsList from 'components/content/goods/GoodsList.vue'
import { getDetail, Goods, Shop, GoodsParams, getRecommend } from '@/api/detail.js'
import Scroll from 'components/common/scroll/scroll.vue'
import debounce from '@/utils/debounce'
import { itemListerMixin } from '@/utils/mixin'
export default {
  components: {
    detailNavBar,
    MySwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailRateInfo,
    GoodsList,
    DetailBottomBar
  },
  name: 'detail',
  mixins: [itemListerMixin],
  data () {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      rateInfo: {},
      recommendInfo: [],
      id: null,
      themTopY: [],
      currentIndex: -1
    }
  },

  created () {
    this.getDetail()
  },
  mounted () {
    const refresh = debounce(this.$refs.myScroll.refresh, 200)
    this.$bus.$on('itemImageLoadqq', () => {
      refresh()
    })
  },
  watch: {
    id () {
      // if (this.id) {
      getRecommend(this.id).then(res => {
        this.recommendInfo = res.data.list
        console.log(this.recommendInfo)
      })
      // }
    }
  },
  methods: {
    getDetail () {
      // 保存传入 iid 的数据
      this.iid = this.$route.params.iid
      // 获取页面请求
      getDetail(this.iid).then((res) => {
        this.id = res._id
        res = res.result
        // 获取顶部的图片轮播图片数据
        this.topImage = res.itemInfo.topImages

        // 获取商品信息
        this.goods = new Goods(res.itemInfo, res.columns, res.shopInfo.services)

        //  获取店铺信息
        this.shop = new Shop(res.shopInfo)
        // 详情数据
        this.detailInfo = res.detailInfo
        // 获取参数的信息
        this.paramInfo = new GoodsParams(res.itemParams.info, res.itemParams.rule)
        // 获取评价更多的信息
        if (res.rate) {
          this.rateInfo = res.rate.list[0]
        }
      })
    },
    imageload () {
      // this.themTopY = []
      this.themTopY.push(0)
      this.themTopY.push(this.$refs.param.$el.offsetTop - 44)
      this.themTopY.push(this.$refs.rate.$el.offsetTop - 44)
      this.themTopY.push(this.$refs.recommend.$el.offsetTop - 44)
      this.themTopY.push(Number.MAX_VALUE)
      console.log(this.themTopY)
      this.$refs.myScroll.refresh()
    },
    tabClick (index) {
      this.$refs.myScroll.scrollTo(0, -this.themTopY[index])
    },
    contentScroll (opsition) {
      this.backTapScroll(opsition)
      const opsitionY = Math.abs(opsition.y)
      const length = this.themTopY.length
      // opsitionY 和主题中值进行对比
      // this.themTopY[0,7384,9754,9990]
      // opsitionY 在 0 和 7938之间 ,index =0
      // opsitionY 在 7938之间 和 9754 ,index =1
      // opsitionY 在 9754 和 9990 ,index =2
      // opsitionY 大于9990 的值 ,index =3

      // for (let i = 0; i < length; i++) {
      //   if (this.currentIndex !== i && ((i < length - 1 && opsitionY >= this.themTopY[i] && opsitionY < this.themTopY[i + 1]) || (i === length - 1 && opsitionY >= this.themTopY[i]))) {
      //     this.currentIndex = i
      //     this.$refs.nav.isCurIndex = this.currentIndex
      //     console.log(this.currentIndex)
      //   }
      // }
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && (i < length - 1 && opsitionY >= this.themTopY[i] && opsitionY < this.themTopY[i + 1])) {
          this.currentIndex = i
          this.$refs.nav.isCurIndex = this.currentIndex
        }
      }
    }
  }

}
</script>
<style scoped>
.swiper{height: 300px;}
#detail{position: relative;z-index: 111;background: #fff; height: 100vh;}
.content{height: calc(100vh - 44px - 49px); overflow: hidden;}
</style>
