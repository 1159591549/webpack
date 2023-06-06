<template>
<div>
  <div class="example">{{ msg }}</div>
  <one></one>
</div>
</template>

<script>
import one from '_c/one'
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