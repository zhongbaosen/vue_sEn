<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
  import Particles from '../../../static/canvas/login_bg.js' 
  export default {
    name: 'loginbg',
    data () {
      return {
         
      }
    },
    mounted () {
        new Particles().init();
    },
    destroyed(){

    }
  }
</script>