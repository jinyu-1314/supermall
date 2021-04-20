<template>
  <div id="app">
    <keep-alive include="home">
      <router-view/>
    </keep-alive>

    <mian-tab-bar></mian-tab-bar>
  </div>
</template>
<script>
import MianTabBar from '@/components/content/mianTabBar/MianTabBar'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    MianTabBar
  }
}
</script>
<style>
@import 'assets/css/base.css';
</style>
