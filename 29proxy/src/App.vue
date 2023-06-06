<template>
  <div class="example">
    <div>{{ msg }}</div>
    <one></one>
  </div>
</template>

<script>
// 直接引入通过配置好的内容引入组件
import one from '@/one'
export default {
  components:{
    one
  },
  data () {
    return {
      msg: 'Hello world   555222!'
    }
  }
}
</script>

<style>
.example {
  color: orange;
}
</style>