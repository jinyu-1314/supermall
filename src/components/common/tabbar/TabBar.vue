<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style>
#tab-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 1px rgba(0, 0, 0, 0.02);
}
</style>
