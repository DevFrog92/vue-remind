<template>
  <section
    v-if="setGuideListStatus"
    class="carousel_wrapper"
  >
    <div class="carousel_container">
      <div class="carousel_slide">
        <div
          id="copy_last"
          class="guide_item_content"
        >
          <object
            :data="lastGuideImg"
            type=""
          />
        </div>
        <div
          v-for="(item,index) in numOfImgList"
          :key="index"
          class="guide_item_content guide_item_content_img"
        >
          <object
            :data="guideImg(item)"
            type=""
          />
        </div>
        <div
          id="copy_first"
          class="guide_item_content"
        >
          <object
            :data="fitstGuideImg"
            type=""
          />
        </div>
      </div>
    </div>
    <div class="prev_btn carousel_btn">
      <img
        src="~/assets/images/icons/game/common/left_circle.svg"
        alt=""
      >
    </div>
    <div class="next_btn carousel_btn">
      <img
        src="~/assets/images/icons/game/common/right_circle.svg"
        alt=""
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    setGuideListStatus: {
      type: Boolean,
      default: false,
    },
    numOfGameGuideImages: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      carouselSlide: null,
      itemWidth: null,
      nextBtn: null,
      prevBtn: null,
      items: null,
      gameListLength: 0,
      numOfImgList: 1,
      slideSpeed: 500,
      initialPos: 0,
      counter: 1,
      gameName: "",
    }
  },
  computed: {
    fitstGuideImg() {
      return require(`~/assets/images/games/guide/${this.gameName}/1.svg`)
    },
    lastGuideImg() {
      return require(`~/assets/images/games/guide/${this.gameName}/${this.numOfImgList}.svg`)
    },
    guideImg() {
      return (index) => {
        return  require(`~/assets/images/games/guide/${this.gameName}/${index}.svg`)
      }
    },
  },
  created() {
    this.setGameName()
    this.setNumOfImgList()
  },
  mounted() {
    this.initializeCarousel()
  },
  methods: {
    setNumOfImgList() {
      this.numOfImgList = this.numOfGameGuideImages
      this.gameListLength = this.numOfGameGuideImages + 2
    },
    setGameName() {
      // TODO: 디자인 작업 후 수정할 예정
      // this.gameName = this.$route.params.game
      this.gameName = "bar"
    },
    setTransform(number) {
      this.carouselSlide.style.transform = `translateX(${-this.itemWidth * number}px)`
    },
    setTransition(setState) {
      if (setState) {
        this.carouselSlide.style.transition = `transform .${this.slideSpeed}s ease-in-out`

        return
      }

      this.carouselSlide.style.transition = "none"
    },
    initializeCarousel() {
      const carousel = document.querySelector(".carousel")
      const carouselFrameWidth = carousel.clientWidth

      this.itemWidth = carouselFrameWidth
      this.carouselSlide = document.querySelector(".carousel_slide")
      this.items = document.querySelectorAll(".guide_item_content")
      this.prevBtn = document.querySelector(".prev_btn")
      this.nextBtn = document.querySelector(".next_btn")
      this.carouselSlide.style.width = `${carouselFrameWidth * this.items.length}px`
      this.setTransform(1)
      this.nextBtn.addEventListener("click", this.nextHandler)
      this.prevBtn.addEventListener("click", this.prevHandler)
      this.carouselSlide.addEventListener("transitionend", this.carouselSlideHandler)
    },
    nextHandler() {
      if (this.counter >= this.gameListLength - 1) {
        return
      }

      this.setTransition(true)
      this.counter += 1
      this.setTransform(this.counter)
    },
    prevHandler() {
      if (this.counter <= 0) {
        return
      }

      this.setTransition(true)
      this.counter -= 1
      this.setTransform(this.counter)
    },
    carouselSlideHandler() {
      if (this.counter === 0) {
        this.counter = this.gameListLength - 2
        this.setTransition(false)
        this.setTransform(this.counter)

        return
      }

      if (this.counter === this.gameListLength - 1) {
        this.counter = this.gameListLength - this.counter
        this.setTransition(false)
        this.setTransform(this.counter)

        return
      }
    },
  },
}
</script>

<style scoped>
.carousel_wrapper {
  border-radius: inherit;
  height: 100%;
  position: relative;
  width: 100%;
  border: 1px solid;
}

.carousel_container {
  border-radius: inherit;
  height: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.carousel_slide {
  display: flex;
  height: 100%;
}

.guide_item_content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

.carousel_btn {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, -50%);
}

.carousel_btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.prev_btn {
  left: 3%;
  transform: translateY(-3%);
}

.next_btn {
  right: 3%;
  transform: translateY(-3%);
}
</style>
