<template>
  <div class="dot_wrapper">
    <ul class="dot_items_wrapper">
      <li
        v-for="item in numOfDots"
        :key="item"
        :data-value="item"
        class="dot"
      />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    numOfDots: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      dots: null,
      randomTime: [500, 600, 700, 800, 900, 1000],
      timer: null,
      soundPlayStatus: false,
    }
  },
  mounted() {
    this.grabDotElems()
    this.setDotAnimation()
  },
  methods: {
    grabDotElems() {
      this.dots = document.querySelectorAll(".dot")
    },
    setRandomTimer() {
      const timerDuration = this.randomTime[Math.floor(Math.random() * this.randomTime.length)]

      return timerDuration
    },
    setDotAnimation() {
      const timerDuration = this.setRandomTimer()
      let itemIndex = 0

      this.soundPlayStatus = true
      this.timer = setInterval(() => {
        this.dots[itemIndex].style.backgroundColor = "#A73FFF"
        itemIndex += 1

        if (itemIndex >= this.dots.length) {
          this.soundPlayStatus = false
          clearInterval(this.timer)
        }
      }, timerDuration)
    },
  },
}
</script>

<style scoped>
.dot_wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot_items_wrapper {
  height: 8px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 12px;
}

.dot:last-child {
  margin-right: 0;
}
</style>
