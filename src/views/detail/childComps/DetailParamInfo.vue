<template>
<div class="param-info" v-if="Object.keys(paramInfo).length !=0">
  <table v-for="(table,index) in paramInfo.sizes" :key="index">
    <tr v-for="(tr,i) in table" :key="i">
      <td v-for="(td ,n ) in tr" :key="n"> {{td}}</td>
    </tr>
  </table>
<pre>{{paramInfo}}</pre>
</div>
</template>
<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default () {
        return {}
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
</style>
