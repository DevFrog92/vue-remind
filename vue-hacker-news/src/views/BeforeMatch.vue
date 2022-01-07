<template>
  <div class="wait_user_wrapper">
    <div class="check_wrapper">
      <span class="last_circle circle" />
      <span class="circle second_circle" />
      <span class="circle first_circle" />
      <img
        class="img_svg"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgName: {
      type: String,
      default: "",
    },
    animationType: {
      type: String,
      default: "infinite",
    },
  },
  mounted() {
    this.grabImgElem()
    this.grabCircles()
  },
  methods: {
    grabCircles() {
      const circles = document.querySelectorAll(".circle")

      this.setAnimation(circles)
    },
    grabImgElem() {
      const imgElem = document.querySelector(".img_svg")

      // imgElem.src = require(`~/assets/images/games/money/${this.imgName}.svg`)
      imgElem.src = require("@/assets/images/games/mo/opponent.svg")
    },
    setAnimation(circles) {
      circles.forEach(circle => circle.classList.add(this.animationType))
    },
  },
}
</script>

<style scoped>
.wait_user_wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.check_wrapper {
  width: 248px;
  height: 248px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img_svg, .circle {
  position: absolute;
}

.first_circle {
  opacity: 0;
  width: 96px;
  height: 96px;
  background-color: #F8F0FF;
  border-radius: 100%;
}

.first_circle.not_infinite {
  animation: first_circle_scale_up .5s forwards linear;
}

.first_circle.infinite {
  animation: first_circle_scale_up 1.5s infinite linear;
}

@keyframes first_circle_scale_up {
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    width: 130px;
    height: 130px;
  }
}

.second_circle {
  opacity: 0;
  width: 130px;
  height: 130px;
  background-color: #FDFBFF;
  border-radius: 100%;
}

.second_circle.not_infinite {
  animation: seond_circle_scale_up .4s .2s forwards linear;
}

.second_circle.infinite {
  animation: seond_circle_scale_up 1.3s infinite linear;
}

@keyframes seond_circle_scale_up {
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    width: 199px;
    height: 199px;
  }
}

.last_circle {
  opacity: 0;
  width: 199px;
  height: 199px;
  border-radius: 100%;
}

.last_circle.not_infinite {
  animation: last_circle_scale_up .4s .3s forwards linear;
}

.last_circle.infinite {
  animation: last_circle_scale_up 1s infinite linear;
}

@keyframes last_circle_scale_up {
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    width: 248px;
    height: 248px;
  }
}
</style>
