<template>
  <monthly-income :data={} />
</template>

<script>
import MonthlyIncome from './chart/Line'
export default {
  components: { MonthlyIncome }
}
</script>