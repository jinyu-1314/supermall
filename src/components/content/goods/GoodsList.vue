<template>
<div class="goods">
  <goods-list-item v-for="(item,index) in list" :key="index" :goodsItem="item" />
</div>
</template>
<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  name: 'GoodsList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.goods{display: flex;flex-wrap:wrap;justify-content: space-evenly;}
.goods-list-item{width:47%;}

</style>
