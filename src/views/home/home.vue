<template>
  <div id="home">
    <nav-bar class="home-nav">购物街</nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed" />
    <scroll class="content" ref="myScroll"
    :probe-type="3"
    :pull-up-load="true"
    @scroll="contentScroll"
    @pullingUp="loadMore" >
      <my-swiper :banner='banner' @swiperImageLoad ='swiperImageLoad' />
      <recmmend-view :recommends="recommends"/>
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" v-show="!isTabFixed" />
      <goods-list :list="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backTap" v-show="isShow" />
  </div>
</template>
<script>
import RecmmendView from './childComps/RecmmendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import MySwiper from 'components/common/swiper/index'
import TabControl from 'components/common/tabControl/tabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/scroll.vue'
import BackTop from 'components/content/backTop'

import { getHomeMUltidata, getHomeGoods } from '@/api/home'
import debounce from '@/utils/debounce'

export default {
  components: {
    RecmmendView,
    FeatureView,

    NavBar,
    MySwiper,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  name: 'home',
  data () {
    return {
      banner: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShow: false,
      tabOffsetTop: 0,
      isTabFixed: false
    }
  },
  created () {
    this.getHomeMUltidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    const refresh = debounce(this.$refs.myScroll.refresh, 200)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
    // console.log(this.$refs.tabControl.$el.offsetTop)
  },
  // updated () {
  //   console.log(this.tabOffsetTop)
  //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
  // },
  methods: {
    // 请求轮播图和轮播图下面的数据
    getHomeMUltidata () {
      getHomeMUltidata().then(({ data: res }) => {
        this.banner = res.banner.list
        this.recommends = res.recommend.list
      })
    },

    // 请求商品数据
    getHomeGoods (type) {
      const pageSize = this.goods[type].page + 1
      getHomeGoods(type, pageSize).then(res => {
        this.goods[type].list.push(...res.data.list)
        // console.log(this.goods[type])
        this.goods[type].page += 1
        // 完成上拉加载更多
        this.$refs.myScroll.finishPullUp()
      })
    },
    // 切换图片列表数据
    tabClick (index) {
      console.log(index)
      this.currentType = Object.keys(this.goods)[index]
      // 同步两个tabControl选中的问题
      this.$refs.tabControl1.curIndex = index
      this.$refs.tabControl2.curIndex = index
    },
    // 返回顶部
    backTap () {
      this.$refs.myScroll.scrollTo(0, 0)
    },
    // 滚动底部显示或隐藏
    contentScroll (position) {
      // 1、判断backTop是否显示
      // Math.abs(position.y) > 3000 ? this.isShow = true : this.isShow = false
      this.isShow = Math.abs(position.y) > 3000
      // 2、决定tabControl是否吸顶
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop - 40
    },
    // 上拉加载更多
    loadMore () {
      // this.getHomeGoods(this.currentType)
    },
    // 图片加载完后，获取tabControl2的offsetTop
    swiperImageLoad () {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      console.log(this.tabOffsetTop)
    }
  }
}
</script>
<style scoped>

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control{ position: relative; background: #fff;z-index: 10;}
.content{overflow: hidden; position: absolute;left: 0; top: 44px; bottom: 49px; right: 0;}
/**.content{height: calc(100vh - 93px); } px出现适配问题所以手机端会吃一部分的原因 */
</style>
