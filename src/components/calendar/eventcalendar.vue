<template>
  <vue-event-calendar :events="demoEvents" @day-changed="dayChange" @month-changed="monthChange"></vue-event-calendar>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2018/3/15',
        title: '去看周杰伦演唱会',
        desc: '记得带上门票和手机证件'
      },{
        date: '2018/1/25',
        title: '出门逛街',
        desc: '你猜去逛啥'
      }]
    }
  },
  methods: {
    monthChange (month) {
      console.log(month)
    },
    dayChange (day) {
      console.log(day)
    }
  }
}
</script>