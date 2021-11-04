<template>
  <div class="timer_container_wrapper">
    <button @click="setLevelTimer('easy')">
      easy
    </button>
    <button @click="setLevelTimer('hard')">
      hard
    </button>
    <div class="timer_wrapper">
      <div class="timer_outer" />
      <div class="timer_inner" />
      <div class="timer_number">
        {{ number }}
      </div>
      <div class="timer_circle">
        <div class="timer_circle_dot">
          <span class="dot" />
        </div>
        <div class="timer_circle_left" />
        <div class="timer_circle_right" />
        <div
          class="left_progress"
        />
        <div
          class="right_progress"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      number: 0,
      level: "easy",
      leftProgress: null,
      rightProgress: null,
      dotProgress: null,
      leftCircle: null,
      rightCircle: null,
    }
  },
  mounted() {
    this.leftCircle = document.querySelector(".timer_circle_left")
    this.rightCircle = document.querySelector(".timer_circle_right")
    this.leftProgress = document.querySelector(".left_progress")
    this.rightProgress = document.querySelector(".right_progress")
    this.dotProgress = document.querySelector(".timer_circle_dot")
    this.setRightCircleCss()
    this.setLeftCircleCss()
    this.setTimerAnimation(this.level)
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.number <= 0) {
          clearInterval(this.timer)

          return
        }

        this.number -= 1
      }, 1000)
    },
    setLevelTimer(level) {
      if (level === "easy") {
        this.number = 5
      } else {
        this.number = 10
      }

      this.startTimer()
      this.setRightCircleCss()
      this.setLeftCircleCss()
      this.setTimerAnimation(level)
    },
    setRightCircleCss() {
      this.rightCircle.style.position = "absolute"
      this.rightCircle.style.top = "0"
      this.rightCircle.style.left = "0"
      this.rightCircle.style.zIndex = "2"
      this.rightCircle.style.backgroundColor = "#C4C4C4"
      this.rightCircle.style.borderRadius = "100%"
      this.rightCircle.style.width = "100%"
      this.rightCircle.style.height = "100%"
      this.rightCircle.style.clip= "rect(0px, 80px, 80px, 40px)"
    },
    setLeftCircleCss() {
      this.leftCircle.style.position = "absolute"
      this.leftCircle.style.top = "0"
      this.leftCircle.style.left = "0"
      this.leftCircle.style.zIndex = "4"
      this.leftCircle.style.backgroundColor = "#C4C4C4"
      this.leftCircle.style.borderRadius = "100%"
      this.leftCircle.style.width = "100%"
      this.leftCircle.style.height = "100%"
      this.leftCircle.style.clip= "rect(0px, 40px, 80px, 0px)"
    },
    setTimerAnimation(level) {
      this.leftProgress.classList.add(level)
      this.rightProgress.classList.add(level)
      this.dotProgress.classList.add(level)
    },
  },
}
</script>

<style scoped>
.timer_container_wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer_wrapper {
  margin-top: 5rem;
  width: 80px;
  height: 80px;
  position: relative;
}

.timer_outer {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  z-index: 1;
  background-color: #C4C4C4;
}

.timer_inner {
  width: 85%;
  height: 85%;
  border-radius: 100%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%,-50%);
}

.timer_circle {
  position: absolute;
  z-index: 2;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 100%;
  width: 100%;
  height: 100%;
}

.timer_circle_left ,.timer_circle_right {
  position: absolute;
  top: 0;
  left:0;
  z-index: 4;
  background-color: #C4C4C4;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  clip: rect(0px, 40px, 80px, 0px);
}

.timer_circle_right {
  z-index: 2;
  border: none;
  clip: rect(0px, 80px, 80px, 40px);
}

.left_progress,.right_progress{
  position: absolute;
  top: 0;
  left:0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  clip: rect(0px, 40px, 80px, 0px);
  background: #C175FF;
}

.right_progress{
  clip: rect(0px, 80px, 80px, 40px);
}

.timer_circle_dot {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 50%;
  width: 100%;
  transform: translate(0,-50%);
}

.dot {
  position: absolute;
  top: -3px;
  right:0;
  width: 6px;
  height: 6px;
  background: #C175FF;
  border-radius: 100%;
}

.timer_number {
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  font-size: 1.5rem;
  font-weight: 600;
  color: #C175FF;
  transform: translate(-50%,-50%);
}

/* Timer duration of progress by level */
.left_progress.easy{
  animation: left 2.5s linear forwards;
}

.right_progress.easy{
  clip: rect(0px, 80px, 80px, 40px);
  animation: right 2.5s 2.5s linear forwards;
}

.left_progress.hard{
  animation: left 5s linear forwards;
}

.right_progress.hard{
  clip: rect(0px, 80px, 80px, 40px);
  animation: right 5s 5s linear forwards;
}

@keyframes left  {
  0%{
    z-index: 3;
  }

  100%{
    z-index: 3;
    transform: rotate(180deg);
  }
}

@keyframes right {
  0%{
    z-index: 5;
  }
  100%{
    z-index: 5;
    transform: rotate(180deg);
  }
}

/* Timer duration of dot by level */
.timer_circle_dot.easy {
  animation: dot 5s linear forwards;
}

.timer_circle_dot.hard {
  animation: dot 10s linear forwards;
}

@keyframes dot{
  0% {
    z-index: 3;
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(90deg);
    z-index: 5;
  }
  100% {
    transform: rotate(270deg);
    z-index: 5;
  }
}
</style>
