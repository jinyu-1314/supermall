<template>
  <div class="tab-bar-item" @click="tabClick" >
    <template v-if="!isActive">
      <slot name="item-icon"></slot>
    </template>
    <template v-else>
      <slot name="item-icon-active"></slot>
    </template>
    <div :style="styleColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#f00'
    }
  },
  data () {
    return {
      // isActive: true //为true为选中状态

    }
  },
  computed: {
    isActive () {
      // /home--> item1(/home) =true
      // /home--> item1(/category) =false
      // /home--> item1(/cart) =false
      // /home--> item1(/profile) =false
      return this.$route.path.indexOf(this.path) !== -1
    },
    styleColor () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    tabClick () {
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path)
      }
    }
  }
}
</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px; cursor: pointer;
}
.tab-bar-item img {
  margin: 3px 0 2px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
