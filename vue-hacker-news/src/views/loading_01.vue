<template>
  <div class="stand_by_loading_wrapper">
    <ul class="stand_by_loading_items">
      <li class="circle item">
        <img
          v-if="count < 1"
          src="~/assets/images/games/common/ellipse.svg"
          alt=""
        >
        <img
          v-else
          src="~/assets/images/games/common/ellipse-done.svg"
          alt=""
        >
      </li>
      <li class="tri item">
        <img
          v-if="count < 2"
          src="~/assets/images/games/common/polygon.svg"
          alt=""
        >
        <img
          v-else
          src="~/assets/images/games/common/polygon-done.svg"
          alt=""
        >
      </li>
      <li class="rec item">
        <img
          v-if="count < 3"
          src="~/assets/images/games/common/rectangle.svg"
          alt=""
        >
        <img
          v-else
          src="~/assets/images/games/common/rectangle-done.svg"
          alt=""
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      timer: null,
    }
  },
  mounted() {
    this.startLoading()
  },
  methods: {
    startLoading() {
      this.timer = setInterval(() => {
        this.count += 1

        if (this.count === 3) {
          clearInterval(this.timer)
          setTimeout(() => {
            alert("오징어 게임?")
          }, 1000)
        }
      }, 1000)
    },
  },

}
</script>

<style scoped>
.stand_by_loading_wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  list-style: none;
  width: 100%;
}

.stand_by_loading_items {
  display: flex;
  list-style: none;
}

.item {
  margin-right: 30px;
}
</style>
