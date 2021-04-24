<template>
<div>
  <nav-bar>
    <template v-slot:left >
      <div @click="backClick" class="left">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
    </template>
    <div class="item-bar">
      <span v-for="(item,index) in this.title" :key="index" :class="{active:index===isCurIndex}" @click="navClick(index)">
          {{item}}
      </span>
    </div>
    <template v-slot:right >
      <div @click="toCartClick" class="right">
          <img src="~assets/img/tabbar/shopcart.svg" alt="">
      </div>
    </template>
  </nav-bar>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
  name: 'DetailNavBar',
  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      isCurIndex: 0
    }
  },
  methods: {
    navClick (index) {
      this.isCurIndex = index
      this.$emit('tabClick', index)
    },
    backClick () {
      this.$router.back()
    },
    toCartClick () {
      this.$router.replace('/cart')
    }
  }
}
</script>
<style scoped>
.item-bar{display: flex; justify-content: space-around;}
.active{color: var(--color-high-text);}
.left,.right{display: flex; justify-content: center; align-items: center; height: 100%;}
.right img{width:24px; }
</style>
