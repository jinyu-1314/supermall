<template>
<div class="counter">
      <button @click="sub" :disabled="counter<=1">-</button>
      <span>{{counter}}</span>
      <button @click="add" >+</button>
    </div>
</template>
<script>
export default {
  name: 'CounterCart',
  props: {
    totalStock: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      counter: 1
    }
  },
  methods: {
    sub () {
      this.counter--
    },
    add () {
      if (this.counter === this.totalStock) {
        return alert('不可以在加了')
      }
      this.counter++
    }
  },
  watch: {
    counter (newVal) {
      this.$emit('counterChange', newVal)
    }
  }
}
</script>
<style scoped>
.counter {
  border-radius: 3px;
  border: 1px solid #bbbbbb;
  height: 30px;
  line-height: 30px;
  width: 124px;
  text-align: center;
  display: flex;
}
.counter > * {
  flex: 1;
}
.counter button {
  width: 20px;
  background: none;
  border: 0;
  color: var(--color-high-text);
}
.counter span {
  border-right: 1px solid #bbbbbb;
  border-left: 1px solid #bbbbbb;
  font-size: 13px;
}
</style>
