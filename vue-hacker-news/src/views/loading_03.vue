<template>
  <ul class="step_loading_wrapper">
    <li class="third item">
      <img
        src="~/assets/images/games/common/rectangle1.svg"
        alt=""
      >
    </li>
    <li class="second item">
      <img
        src="~/assets/images/games/common/rectangle2.svg"
        alt=""
      >
    </li>
    <li class="first item">
      <img
        src="~/assets/images/games/common/rectangle3.svg"
        alt=""
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      items: [],
      count: 0,
    }
  },
  mounted() {
    this.items = document.querySelectorAll(".item")
    this.timer = setInterval(() => {
      this.items[3 - this.count - 1].classList.add("show")
      this.count += 1

      if (this.count === 3) {
        clearInterval(this.timer)
        setTimeout(() => {
          alert("오징어 게임?")
        }, 1000)
      }
    }, 1000)
  },
}
</script>

<style scoped>
.step_loading_wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  list-style: none;
  position: relative;
  width: 100%;
}

.item {
  height: 140px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  transition: all 0.7s ease-out;
  width: 140px;
}

.item img {
  height: 100%;
  width: 100%;
}

.third {
  opacity: 0;
  top: 8rem;
  z-index: 4;
}

.third.show {
  opacity: 1;
  top: 9rem;
}

.second {
  opacity: 0;
  top: 10rem;
  z-index: 3;
}

.second.show {
  opacity: 1;
  top: 11rem;
}

.first {
  opacity: 0;
  top: 12rem;
  z-index: 2;
}

.first.show {
  opacity: 1;
  top: 13rem;
}
</style>
