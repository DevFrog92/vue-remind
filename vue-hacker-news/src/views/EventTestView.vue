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
      blockIndex: 0,
      level: "easy",
      barEle: null,
      barHeight: 17.5,
      growthFactor: 0,
    }
  },
  mounted() {
    this.bar = document.querySelector(".bar")
    // this.barContainer = document.querySelector(".bar_container")
    // this.blocks = document.querySelectorAll(".block")
    // this.blockIndex = this.blocks.length - 1
    this.addKeyPressEvent()
    this.calBarHeight()
  },
  methods: {
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
  widows: 100%;
  list-style-type:none;
}
.bar_contain {
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
}
</style>
