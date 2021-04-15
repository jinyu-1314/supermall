<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor='deeppink'>
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
        <template v-slot:item-text>首页</template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor='deeppink'>
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
        <template v-slot:item-text>分类</template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor='deeppink'>
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
        <template v-slot:item-text>购物车</template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor='deeppink'>
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
        <template v-slot:item-text>我的</template>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'
export default {
  name: 'MianTabBar',
  data () {
    return {

    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style>

</style>
