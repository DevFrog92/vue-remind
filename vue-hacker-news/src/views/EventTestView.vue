<template>
  <div class="event_test_view_wrapper">
    <!-- <ul class="bar_contain">
      <li
        v-for="item in blockNumber"
        :key="item"
        class="block"
        :class="level"
      />
    </ul>
    <div class="bar" /> -->
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
        <div class="left_progress" />
        <div class="timer_circle_right" />
        <div class="right_progress" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pressedKey: "",
      count: 0,
      blockNumber: 50,
      barContainer: null,
      blocks: null,
      timer: null,
      blockIndex: 0,
      level: "easy",
      barEle: null,
      barHeight: 17.5,
      growthFactor: 0,
      number: 0,
      leftProgress: null,
      rightProgress: null,
      dotProgress: null,
      leftCircle: null,
    }
  },
  mounted() {
    this.bar = document.querySelector(".bar")
    this.leftCircle = document.querySelector(".timer_circle_left")
    this.leftProgress = document.querySelector(".left_progress")
    this.rightProgress = document.querySelector(".right_progress")
    this.dotProgress = document.querySelector(".timer_circle_dot")
    // this.barContainer = document.querySelector(".bar_container")
    // this.blocks = document.querySelectorAll(".block")
    // this.blockIndex = this.blocks.length - 1
    this.addKeyPressEvent()
    this.calBarHeight()
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.number <= 0) {
          clearInterval(this.timer)

          return
        }
        console.log(this.number)

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
      this.setTimerAnimation(level)
    },
    setTimerAnimation(level) {
      this.leftProgress = document.querySelector(".left_progress")
      this.rightProgress = document.querySelector(".right_progress")
      this.dotProgress = document.querySelector(".timer_circle_dot")
      this.leftProgress.classList.add(level)
      this.rightProgress.classList.add(level)
      this.dotProgress.classList.add(level)
    },
    calBarHeight() {
      this.growthFactor = (this.barHeight/this.blockNumber)/this.barHeight
    },
    keyHandler(e) {
      if (e.key === "!") {
        if (this.blockIndex >= this.blockNumber) {
          return
        }

        this.blockIndex += 1
        this.bar.style.transform = `scaleY(${this.growthFactor * this.blockIndex})`
        // this.blocks[this.blockIndex].style.transform = "translateY(-5rem)"
        // this.blocks[this.blockIndex].style.opacity = "0"
        // this.blockIndex -= 1


        // if (this.blockIndex < 0) {
        //   clearTimeout(this.timerObj)
        //   this.removeKeyPressEvent()
        //   setTimeout(() => {
        //     this.$emit("fullCharge", true, this.blockIndex)
        //   }, 300)
        // }
      }
    },
    addKeyPressEvent() {
      window.addEventListener("keyup", this.keyHandler)
    },
    removeKeyPressEvent() {
      window.removeEventListener("keyup", this.keyHandler)
    },
  },
}
</script>

<style scoped>
.event_test_view_wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  list-style-type:none;
}
/* .bar_contain {
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  border: 1px solid black;
  height: 17.5rem;
  list-style: none;
  overflow: hidden;
  padding: 0;
  width: 10rem;
}

.bar {
  width: 10rem;
  height: 17.5rem;
  border:  1px solid #AAA09D;
  transform-origin: 0 bottom;
  transform: scaleY(0);
  transition: all .4s ease-out;
  background: linear-gradient(180deg, #FF977A 0%, #FFB689 57.81%, #FFE39C 99.99%, #DBEEFF 100%, #FFD26D 100%);
}

.block {
  background-color: white;
  transition: opacity 0.1s ease-in;
  width: 100%;
} */


/* .circle .dot{
  z-index: 3;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  height: 10px;
  margin-top: -5px;
  animation: dot 8s linear both;
  transform-origin: 0% 50%;
}
.circle .dot span {
  position: absolute;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 100%;
}
@keyframes dot{
  0% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(90deg);
    z-index: 4;
  }
  100% {
    transform: rotate(270deg);
    z-index: 4;
  }
} */

.timer_wrapper {
  margin-top: 10rem;
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
  width: 80%;
  height: 80%;
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
  background: #A73FFF;
  /* animation: left 5s linear forwards; */
}

.right_progress{
  clip: rect(0px, 80px, 80px, 40px);
  /* animation: right 5s 5s linear forwards; */
}

.left_progress.easy{
  animation: right 2.5s linear forwards;
}

.left_progress.hard{
  animation: right 5s linear forwards;
}

.right_progress.easy{
  animation: right 2.5s 2.5s linear forwards;
}

.right_progress.hard{
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

.timer_circle_dot {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 50%;
  width: 100%;
  transform: translate(0,-50%);
}

.timer_circle_dot.easy {
  animation: dot 5s linear forwards;
}

.timer_circle_dot.hard{
  animation: dot 10s linear forwards;
}

.dot {
  position: absolute;
  top: -4px;
  right:0;
  width: 8px;
  height: 8px;
  background: #A73FFF;
  border-radius: 100%;
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
