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
    <template v-slot:right>11</template>
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
    },
    backClick () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.item-bar{display: flex; justify-content: space-around;}
.active{color: var(--color-high-text);}
.left{display: flex; justify-content: center; align-items: center; height: 100%;}
</style>
