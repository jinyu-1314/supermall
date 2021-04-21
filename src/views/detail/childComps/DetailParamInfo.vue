<template>
<div class="param-info" v-if="Object.keys(paramInfo).length !=0">
  <table v-for="(table,index) in paramInfo.sizes" :key="index" class="tableSize">
    <tr v-for="(tr,i) in table" :key="i">
      <td v-for="(td ,n ) in tr" :key="n"> {{td}}</td>
    </tr>
  </table>
  <table class="tableInfo">
      <tr v-for='(info,index) in paramInfo.info' :key="index">
        <td>{{info.key}}</td>
        <td>{{info.value}}</td>
      </tr>
  </table>
  <!-- <img v-lazy="paramInfo.image" v-if="paramInfo.image"> -->
  <img :src="paramInfo.image" v-if="paramInfo.image">
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
.param-info{padding:15px 10px;     border-bottom: 5px solid #eee;}
.tableSize{width: 100%;}
.tableSize td{border-bottom: 1px solid #eee;padding: 8px 0; text-align: center;}
.tableSize td:first-child{text-align: left;}
.tableInfo{ width: 100%;}
.tableInfo td{border-bottom: 1px solid #eee;padding: 8px 0; }
.tableInfo td:first-child{width: 70px;}
.tableInfo td:last-child{color: var(--color-tint);}
</style>
