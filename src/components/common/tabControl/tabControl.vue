<template>
  <div class="tab-control">
    <!-- <div v-for="(item,index) in titles" :key="index" :class="['tab-control-item',{active:index===curIndex}]" @click="tabSelect(index)"> -->
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="tabSelect(index)" >
      <span :style="index === curIndex?styleColor:''">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    },
    colorSet: {
      type: String,
      default: '#ff8198'
    }
  },
  data () {
    return {
      curIndex: 0
    }
  },
  methods: {
    tabSelect (index) {
      this.curIndex = index
      this.$emit('tabClick', index)
    }
  },
  computed: {
    styleColor () {
      return { color: this.colorSet, 'border-bottom': '3px solid ' + this.colorSet, 'padding-bottom': '8px' }
    }
  }
}
</script>
<style scoped>
.tab-control{
display: flex; text-align: center;font-size: 14px; height: 40px; line-height: 40px;
}
.tab-control-item{
flex: 1;
}
.active span{color: var(--color-high-text);border-bottom: 3px solid var(--color-tint); padding-bottom: 8px;}
</style>
