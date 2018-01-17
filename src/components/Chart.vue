<template>
  <monthly-income :data="data" />
</template>

<script>
import MonthlyIncome from './chart/Line'
export default {
  data(){
     return {
       data:{
         "a":1
       }
     }
  },
  components: { MonthlyIncome }
}
</script>