<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>
<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      bscroll: null
    }
  },
  mounted () {
    // probeType侦测：
    // 0或者1都是不侦测实时但的位置
    // 2：在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
    // 3：只要是滚动，都侦测
    // 如果 bscoll设置的是const bscroll那么 new BetterScroll()这里面需要设置 observeDOM: true要不然划不动，或者直接把bscroll绑定到vue.data()里面
    // eslint-disable-next-line no-new
    // const bscroll = new BetterScroll(this.$refs.wrapper, {
    //   probeType: 3,
    //   pullUpLoad: true,
    //   observeDOM: true
    // })
    this.bscroll = new BetterScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true, // 页面划不动时设置
      click: true
    })
    // 监听bscroll的监听滚动的位置
    if (this.probeType === 3 || this.probeType === 2) {
      this.bscroll.on('scroll', position => {
      // console.log(position)
        this.$emit('scroll', position)
      })
    }
    // 监听上拉刷新
    if (this.pullUpLoad) {
      this.bscroll.on('pullingUp', () => {
      // console.log('上拉加载更多')
        this.$emit('pullingUp')
        // 发送网络请求，请求更多页的数据

        // 等数据请求完后，并且将新的数据展示出来后
        // this.bscroll.refresh()
        // setTimeout(() => {
        //   this.bscroll.finishPullUp()
        // }, 1000)
      })
    }
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.bscroll && this.bscroll.scrollTo(x, y, time)
    },
    refresh () {
      console.log('---')
      this.bscroll && this.bscroll.refresh()
    },
    finishPullUp () {
      setTimeout(() => {
        this.bscroll && this.bscroll.finishPullUp()
      }, 1000)
    },
    getScroll () {
      return this.bscroll && this.bscroll.y
    }
  }
}
</script>
<style scoped>
</style>
