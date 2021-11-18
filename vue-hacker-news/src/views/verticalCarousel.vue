<template>
  <div class="vertical_carousel">
    <div class="carousel_wrapper" />
    <button @click="prev">
      prev
    </button>
    <button @click="next">
      next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselWrapperElem: null,
      numOfCarouselImages: 5,
      gameName: "test",
      currentImageIndex: 1,
      imageElemts: [],
    }
  },
  mounted() {
    this.carouselWrapperElem = document.querySelector(".carousel_wrapper")
    this.setCarouselImage()
  },
  methods: {
    setCarouselImage() {
      for (let i = 0; i < this.numOfCarouselImages; i++) {
        const imgElem = document.createElement("img")
        const url = require(`@/assets/images/${this.gameName}/${i+1}.svg`)

        imgElem.src = url
        imgElem.classList.add("guide_image")
        this.imageElemts.push(imgElem)
        this.carouselWrapperElem.appendChild(imgElem)
        console.log(imgElem)
      }
    },
    prev() {
      if (this.currentImageIndex <= 1) {
        return
      }

      this.currentImageIndex -= 1
      console.log(this.currentImageIndex)
      this.imageElemts[this.currentImageIndex].classList.remove("active")
      this.imageElemts[this.currentImageIndex-1].classList.add("active")
    },
    next() {
      if (this.currentImageIndex >= this.numOfCarouselImages) {
        return
      }

      this.currentImageIndex += 1
      console.log(this.currentImageIndex)
      this.imageElemts[this.currentImageIndex-2].classList.remove("active")
      this.imageElemts[this.currentImageIndex-1].classList.add("active")
    },
  },
}
</script>

<style scoped>
.vertical_carousel {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(158, 157, 157);
  display: flex;
  justify-content: center;
  align-items:center;
}

.carousel_wrapper {
  width: 940px;
  height: 529px;
  border: 1px solid;
  perspective: 1200px;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  z-index: 0;
}

.carousel_wrapper >>> .guide_image {
  width: 940px;
  height: 529px;
  opacity: 0;
  transition: all .5s;
  position: absolute;
  z-index: 0;
  border-radius: inherit;
  isolation: isolate;
}

.carousel_wrapper >>> .guide_image.active {
  z-index: 3;
  opacity: 1;
  border-radius: 1rem;

  /* animation: fadeIn 1s forwards ease-in; */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
}
</style>
