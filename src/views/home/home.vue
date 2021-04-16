<template>
  <div id="home">
    <nav-bar class="home-nav">首页</nav-bar>
    <template>
       <swiper ref="mySwiper" :options="swiperOptions" >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </template>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { getHomeMUltidata } from '@/api/home'

// import 'swiper/swiper.scss'
export default {
  components: {
    NavBar
  },
  name: 'home',
  data () {
    return {
      banner: [],
      recommend: [],
      swiperOption: {
        // autoplay: true,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          // clickable: true,
          type: 'bullets'
        }
      }

    }
  },
  created () {
    getHomeMUltidata().then(({ data: res }) => {
      this.banner = res.banner.list
      // console.log(this.banner)
      this.recommend = res.recommend.list
    })
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 1000, false)
  },
  methods: {

  }
}
</script>
<style scoped>
/* @import 'swiper/swiper.scss'; */
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
img{width: 100%;}
</style>
