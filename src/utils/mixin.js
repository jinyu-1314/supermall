// export default {
//   data () {
//     return {

//     }
//   }

// }
import BackTop from 'components/content/backTop'
export const itemListerMixin = {
  components: { BackTop },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    // 返回顶部
    backTap () {
      this.$refs.myScroll.scrollTo(0, 0)
    },
    backTapScroll (position) {
      // 1、判断backTop是否显示
      this.isShow = Math.abs(position.y) > 3000
    }
  }
}
