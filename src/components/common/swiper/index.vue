<template>
  <swiper ref="mySwiper" :options="swiperOption" v-if="banner.length">
    <swiper-slide v-for="item in banner" :key="item.image">
      <img :src="item.image||item" @load="imageLoad" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'mySwiper',
  props: {
    banner: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'swiperCurrent'
        },
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
          disableOnInteraction: false
        }

      },
      isLoad: false
    }
  },
  computed: {
    // swiper () {
    //   // debugger
    //   return this.$refs.mySwiper.swiper
    // }
  },
  mounted () {
    // console.log('Current Swiper instance object', this.mySwiper)
    // this.mySwiper.slideTo(3, 1000, false)
  },
  methods: {
    imageLoad () {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isload = true
      }
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
</style>
<style>
  .swiperCurrent{background-color: var(--color-high-text); opacity: 1;}
</style>
