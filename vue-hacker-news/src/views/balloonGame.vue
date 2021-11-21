<template>
  <div class="balloon_wrapper">
    <div class="balloon_inner_wrapper">
      <div class="balloon_body" />
    </div>
    <button @click="pump">
      pump
    </button>
    <button @click="accumulate">
      accumulate
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balloonBodyWith: 70,
      balloonBodyHeight: 100,
      balloonBodyElem: null,
      ballonBodyPosition: 300,
      balloonBodyOpacity: 1,
      inenrWrapperElem: null,
    }
  },
  mounted() {
    this.inenrWrapperElem =document.querySelector(".balloon_inner_wrapper")
    this.balloonBodyElem = document.querySelector(".balloon_body")
    this.setBallonProperty(this.balloonBodyWith, this.balloonBodyHeight, this.ballonBodyPosition, this.balloonBodyOpacity)
    this.keyPressDownEvent()
  },
  methods: {
    setBallonProperty(width, height, topPosition, opacity) {
      const innerTop = this.inenrWrapperElem.getBoundingClientRect().top
      const balloon = this.balloonBodyElem.getBoundingClientRect().top

      this.balloonBodyElem.style.width = `${width}px`
      this.balloonBodyElem.style.height = `${height}px`
      this.balloonBodyElem.style.top = `${topPosition}px`
      this.balloonBodyElem.style.opacity = `${opacity}`
      console.log(this.inenrWrapperElem.getBoundingClientRect(), this.balloonBodyElem.getBoundingClientRect())
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
    pump() {
      console.log("pumping")
      if (this.balloonBodyWith >= 320) {
        this.balloonBodyWith += 8

      } else {
        this.balloonBodyWith += 9
      }

      this.balloonBodyHeight += 10
      this.ballonBodyPosition -= 10
      if (this.balloonBodyOpacity >= 0.1) {
        this.balloonBodyOpacity -= 0.005
      }
      this.setBallonProperty(this.balloonBodyWith, this.balloonBodyHeight, this.ballonBodyPosition, this.balloonBodyOpacity)
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
  justify-content: center;
  align-items: center;
}

.balloon_inner_wrapper {
  width: 500px;
  height: 500px;
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
  border-radius: 50% 50% 50% 50% / 42% 42% 58% 58% ;
  transform-origin: bottom center;
  transition: all .5s ease-out;

}
</style>
