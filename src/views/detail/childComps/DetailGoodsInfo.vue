<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !=0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="start end"></div>
    </div>
    <div v-for="(item,index) in detailInfo.detailImage" :key="index">
      <div class="info-key">{{item.key}}</div>
      <div class="info-list">
        <img
          v-for="(img,i) in item.list"
          :key="i"
          :src="img"
          alt
          @load="imageload"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      counter: 0,
      imageLength: 0
    }
  },
  methods: {
    imageload () {
      // 判断，所有图片加载完了，name进行一次回调就可以了
      if (++this.counter === this.imageLength) {
        console.log('图片')
        this.$emit('imageItemDetail')
      }
    }
  },
  watch: {
    detailInfo () {
      // 获取图片个数
      this.imageLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
.info-desc {
  padding: 0 10px;
  padding-top: 20px;
}
.start {
  width: 100px;
  height: 5px;
  border-bottom: 1px solid #000;
  position: relative;
  margin-bottom: 10px;
}
.start::before {
  content: '';
  width: 4px;
  height: 4px;
  background: #000;
  position: absolute;
  left: 0;
  bottom: -1px;
}
.info-desc .end {
  float: right;
  margin-top: 10px;
}
.info-desc .end::before {
  right: 0;
  left: inherit;
}
.info-key {
  line-height: 30px;
  padding-left: 10px;
}
</style>
