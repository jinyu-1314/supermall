<template>
<div class="CartItemInfo" v-if="Object.keys('cartList').length !==0">

  {{cartList}}

</div>
</template>
<script>
import { mapState } from 'vuex'

export default {

  name: 'CartItemInfo',

  data () {
    return {
    }
  },
  computed: {
    ...mapState(['cartList'])
  }
}
</script>
<style scoped>
.content{ height: ;}
</style>
