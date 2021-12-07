<template>
  <div class="balloon_wrapper">
    <h1 class="press_count_title">
      Counting : {{ pressCount }}
    </h1>
    <div class="balloon_inner_wrapper">
      <div class="balloon_body" />
    </div>
    <button
      class="pump"
      @click="pump"
    >
      pump
    </button>
    <button
      class="accumulate"
      @click="accumulate"
    >
      accumulate
    </button>
  </div>
</template>

<script>
import preventBAckButton from "../mixins/preventBackEvent"

export default {
  mixins: [preventBAckButton],
  data() {
    return {
      balloonBodyWith: 98,
      balloonBodyHeight: 116,
      balloonBodyElem: null,
      ballonBodyPosition: 288,
      balloonBodyOpacity: 1,
      inenrWrapperElem: null,
      pumpButtonElem: null,
      accumulateButtonElem: null,
      pressCount: 0,
      pumpingState: true,
      pumpTimer: null,
      borderE: 46,
      borderF: 46,
      borderG: 54,
      borderH: 54,
    }
  },
  mounted() {
    this.pumpButtonElem = document.querySelector(".pump")
    this.accumulateButtonElem = document.querySelector(".accumulate")
    this.inenrWrapperElem =document.querySelector(".balloon_inner_wrapper")
    this.balloonBodyElem = document.querySelector(".balloon_body")
    this.balloonBodyElem.style.height = `${this.balloonBodyHeight}px`
    this.balloonBodyElem.style.top = `${this.ballonBodyPosition}px`
    this.balloonBodyElem.style.borderRadius = `${50}% ${50}% ${50}% ${50}% / ${this.borderE}% ${this.borderF}% ${this.borderG}% ${this.borderH}%`

    this.setBallonProperty(this.balloonBodyWith, this.balloonBodyHeight, this.ballonBodyPosition, this.balloonBodyOpacity)
    this.keyPressDownEvent()
    this.addPumpClickEvent()
  },
  methods: {
    addPumpClickEvent() {
      this.pumpButtonElem.addEventListener("mousedown", this.pumpingStart)
      this.pumpButtonElem.addEventListener("mouseup", this.pumpingStop)
      this.pumpButtonElem.addEventListener("mouseout", this.pumpingStop)

      // this.pumpButtonElem.addEventListener("mouseenter", this.pump)
    },
    stopPumping() {

    },
    setBallonProperty(width, height, topPosition, opacity) {
      const innerTop = this.inenrWrapperElem.getBoundingClientRect().top
      const balloon = this.balloonBodyElem.getBoundingClientRect().top

      console.log(innerTop, balloon)
      if (innerTop <= (balloon - 30)) {
        this.balloonBodyElem.style.height = `${height}px`
        this.balloonBodyElem.style.top = `${topPosition}px`
        console.log("top over")
      } else {
        console.log("what")
        this.borderE -= 0.3
        this.borderF -= 0.3
        this.borderH = 100 - this.borderE
        this.borderG = 100 - this.borderF
        this.balloonBodyElem.style.borderRadius = `${50}% ${50}% ${50}% ${50}% / ${this.borderE}% ${this.borderF}% ${this.borderG}% ${this.borderH}%`
      }

      this.balloonBodyElem.style.width = `${width}px`
      this.balloonBodyElem.style.opacity = `${opacity}`
      // console.log(this.inenrWrapperElem.getBoundingClientRect(), this.balloonBodyElem.getBoundingClientRect())
    },
    keyPressDownEvent() {
      window.addEventListener("keydown", this.keyHandler)
    },
    keyHandler(e) {
      const pressedKey = e.code

      if (pressedKey === "Space") {
        this.pump()
      }
    },
    pumpingStart() {
      this.pumpingState = true
      this.pump()
    },
    pumpingStop() {
      this.pumpingState = false
    },
    pump() {
      if (this.pumpTimer) {
        return
      }

      this.pumpTimer = setInterval(() => {
        if (!this.pumpingState) {
          clearInterval(this.pumpTimer)
          this.pumpTimer = null
        }

        if (this.balloonBodyWith >= 320) {
          this.balloonBodyWith += 6

        } else {
          this.balloonBodyWith += 7
        }

        this.balloonBodyHeight += 8
        this.ballonBodyPosition -= 8
        if (this.balloonBodyOpacity >= 0.1) {
          this.balloonBodyOpacity -= 0.002
        }
        this.pressCount += 1
        this.setBallonProperty(this.balloonBodyWith, this.balloonBodyHeight, this.ballonBodyPosition, this.balloonBodyOpacity)
      }, 100)
    },
    accumulate() {
      console.log("auumulate")
    },
  },
}
</script>

<style scoped>
.balloon_wrapper {
  background-color: #333;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.press_count_title {
  position: absolute;
  top: 100px;
  color: #fff;
  z-index: 10;
}

.balloon_inner_wrapper {
  width: 940px;
  height: 528px;
  border: 1px solid #fff;
  border-radius: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
}

.balloon_body {
  border: 1px solid;
  background-color: rgb(252, 202, 65);
  position: absolute;
  transform-origin: bottom center;
  transition: all .5s ease-out;
  perspective: 800px;
}
</style>
