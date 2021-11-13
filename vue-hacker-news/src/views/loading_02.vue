<template>
  <div class="loading_wrapper">
    <ul class="rec_loading_wrapper">
      <li class="rec_item first">
        <div class="front" />
        <div class="back" />
      </li>
      <li class="rec_item second">
        <div class="front" />
        <div class="back" />
      </li>
      <li class="rec_item third">
        <div class="front" />
        <div class="back" />
      </li>
      <li class="rec_item forth">
        <div class="front" />
        <div class="back" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.loading_wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.rec_loading_wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 140px;
  list-style: none;
  perspective: 800px;
  transform: rotateZ(45deg);
  width: 140px;
}

.rec_item {
  height: 70px;
  position: relative;
  width: 70px;
}

.front {
  background: #fff;
  height: 100%;
  position: absolute;
  width: 100%;
}

.back {
  height: 100%;
  position: absolute;
  width: 100%;
}

.first {
  animation: rotateFirst 1s  alternate forwards;
  backface-visibility: hidden;
  transform: perspective(800px) rotateY(180deg);
  transform-origin: left;
}

.first .back {
  background: #5a5a5a;
}

@keyframes rotateFirst {
  100% {
    transform: perspective(800px) rotateY(360deg);
  }
}

.second {
  animation: rotateSecond 1s 1s  alternate forwards;
  backface-visibility: hidden;
  transform: perspective(800px) rotateY(180deg);
  transform-origin: left;
}

.second .back {
  background: #414141;
}

@keyframes rotateSecond {
  100% {
    transform: perspective(800px) rotateY(360deg);
  }
}

.forth {
  animation: rotateForth 1s 2s  alternate forwards;
  backface-visibility: hidden;
  transform: perspective(800px) rotateX(-180deg);
  transform-origin: top;
}

.forth .back {
  background: #2b2b2b;
}

@keyframes rotateForth {
  100% {
    transform: perspective(800px) rotateX(-360deg);
  }
}

.third {
  animation: rotateThird 1s 3s  alternate forwards;
  backface-visibility: hidden;
  transform: perspective(800px) rotateY(-180deg);
  transform-origin: right;
}

.third .back {
  background: #000;
}

@keyframes rotateThird {
  100% {
    transform: perspective(800px) rotateY(-360deg);
  }
}
</style>
