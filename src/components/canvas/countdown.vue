<template>
 <div id="countdown">
  <svg viewBox="0 0 200 200"
    :width="width" :height="width"
  >
    <circle cx="100" cy="100" :r="100 - border / 2" 
      fill="none"
      opacity="0.4"
      :stroke="color" 
      :stroke-width="border"
    />
    <circle cx="100" cy="100" :r="100 - border / 2" 
      fill="none"
      transform="rotate(270,100,100)" 
      :stroke="color" 
      :stroke-width="border"
      :stroke-dasharray="dashLen" 
      :stroke-dashoffset = "dashOffset"
      style="transition: stroke-dashoffset 0.4s"
    />
    <text x="100" y="100" text-anchor="middle"
      :font-size="fontSize + 5" 
      :fill="color" 
    >
      {{ countDown }}
    </text>
    <text x="100" y="150" text-anchor="middle"
      :font-size="fontSize" 
      fill="#d4d4d4" 
    >
      剩余
    </text>
  </svg>
</div>
</template>

<script>
export default {
  data() {
    return {
      timeLeft: 20 * 1000,
      dashLen: (100 - this.border / 2) * Math.PI * 2
    };
  },
  props: {
    setTimer: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      default: 80
    },
    border: {
      type: Number,
      default: 8
    },
    color: {
      type: String,
      default: '#fcaa55'
    },
    fontSize: {
      type: Number,
      default: 30
    }
  },
  computed: {
    countDown() {
      let time = this.timeLeft;
      if (time <= 0) {
        return "00:00:00";
      } else {
        let result = [];
        result.push(Math.floor(time / 3.6e6));
        result.push(Math.floor((time % 3.6e6) / 60000));
        result.push(Math.floor((time % 60000) / 1000));
        return result.map(x => (x < 10 ? "0" + x : x)).join(":");
      }
    },
    dashOffset() {
        console.log(this.dashLen);
      return this.dashLen - this.timeLeft / this.setTimer * this.dashLen;
    }
  },
  mounted() {
    this.lastDate = Date.now();
    this.interval = setInterval(() => {
      let curDate = Date.now();
      let diff = Math.round((curDate - this.lastDate) / 1000) * 1000;
      this.timeLeft -= diff;
      if (this.timeLeft <= 0) {
        clearInterval(this.interval);
      }
      if (diff >= 1000) {
        this.lastDate = curDate;
      }
    }, 1000);
  }
};
</script>
