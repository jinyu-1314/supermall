<template>
  <div class="cart-mian">
    <div class="color" v-for="(item,index) in propsInfo" :key="index">
      <h4>{{item.label}}</h4>
      <div class="color_info">
        <span
          v-for="(item2,indey) in item.list"
          :key="indey"
          :class="{active:indey === activeArray[index]}"
          @click="itemClick(index,indey,item2)"
        >{{item2.name}}</span>
      </div>
    </div>
    <div class="num">

      <h4>数量</h4>
      <counter-cart :totalStock="totalStock" @counterChange="counterChange" />
    </div>
  </div>
</template>
<script>
import CounterCart from 'components/common/counter/index'
export default {
  name: 'cartMian',
  props: {
    propsInfo: {
      type: Array,
      default () {
        return []
      }
    },
    totalStock: {
      type: Number,
      default: 0
    }
  },
  components: { CounterCart },
  data () {
    return {
      activeArray: [-1, -1],
      valueObject: {},
      isActive: true
    }
  },
  methods: {
    itemClick (index, indey, item) {
      if (this.activeArray[index] === indey) {
        this.activeArray[index] = -1
      } else {
        this.activeArray[index] = indey
      }
      // 父级方法要判断 styleId 是否为-1 sizeId 是否为-1 ，-1 代表还未选择完，无法显示价格
      const styleId = this.activeArray[0] !== -1 ? this.propsInfo[0].list[this.activeArray[0]].styleId : -1
      const sizeId = this.activeArray[1] !== -1 ? this.propsInfo[1].list[this.activeArray[1]].sizeId : -1
      this.valueObject = { styleId, sizeId }
      // this.$refs.counter.counter = 1
      this.$emit('styleClick', this.valueObject)
      this.$forceUpdate()
    },
    counterChange (val) {
      this.$emit('counterChange1', val)
      console.log(val)
    }
  },
  computed: {
    // activeArray () {
    //   const a = []
    //   this.propsInfo.forEach((v, n) => a.push(-1))
    //   return a
    // }
  }

}
</script>
<style scoped>
.cart-mian {
  padding: 0 5px;
}
.cart-mian > div > h4 {
  font-weight: normal;
  font-size: 13px;
  margin-bottom: 6px;
}
.color_info span {
  font-size: 13px;
  padding: 6px 12px;
  border: 1px solid #bbb;
  margin-right: 10px;
  border-radius: 2px;
  margin-bottom: 6px;
  display: inline-block;
}
.cart-mian > div {
  margin-bottom: 20px;
}
.color_info .active {
  border-color: var(--color-high-text);
  color: var(--color-high-text);
}
</style>
