<template>
<div class="goods-list-item" @click="itemClick">
    <img v-lazy="goodsItem.image||goodsItem.show.img" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
</div>
</template>
<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    imageLoad () {
      if (this.$route.path === '/home') {
        this.$bus.$emit('itemImageLoad')
        // console.log('首页')
      }

      if (this.$route.path.indexOf('detail')) {
        // console.log('详情')
        this.$bus.$emit('itemImageLoadqq')
      }
    },
    itemClick () {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>
<style scoped>

.goods-list-item img{width: 100%; border-radius: 5px;}
.goods-info{padding:5px 0 10px; text-align: center;font-size: 12px;}
.goods-info p{text-overflow:ellipsis; white-space:nowrap; overflow:hidden;padding-bottom: 2px;  }
.price{color:var(--color-tint)}
.collect{position: relative; padding-left: 14px; margin-left: 10px;}
 .collect::before{content: '';background: url('~assets/img/common/collect.svg') no-repeat center 1px/ 14px auto; width: 14px; height: 14px;position: absolute;left: 0;top:0;}
</style>
