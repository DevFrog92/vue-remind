<template>
  <div class="wait_user_wrapper">
    <div class="check_wrapper">
      <span class="last_circle circle" />
      <span class="circle second_circle" />
      <span class="circle first_circle" />
      <img
        src="@/assets/images/games/mo/check_in_circle.svg"
        class="circle"
      >
    </div>
  </div>
</template>

<script>
export default {
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

.circle {
  width: 96px;
  height: 96px;
  position: absolute;
}

.first_circle {
  opacity: 0;
  width: 96px;
  height: 96px;
  border: 1px solid #DEB5FF;
  background-color: #F8F0FF;
  border-radius: 100%;
  animation: first_circle_scale_up .5s forwards linear;
}

@keyframes first_circle_scale_up {
  100% {
    opacity: 1;
    width: 129.81px;
    height: 129.81px;
  }
}

.second_circle {
  opacity: 0;
  width: 129.81px;
  height: 129.81px;
  border: 1px solid #EDD8FF;
  background-color: #FDFBFF;
  border-radius: 100%;
  animation: seond_circle_scale_up .4s .2s forwards linear;
}

@keyframes seond_circle_scale_up {
  100% {
    opacity: 1;
    width: 198.26px;
    height: 198.26px;
  }
}

.last_circle {
  opacity: 0;
  width: 198.26px;
  height: 198.26px;
  border-radius: 100%;
  border: 1px solid #FBF5FF;
  animation: last_circle_scale_up .4s .3s forwards linear;

}

@keyframes last_circle_scale_up {
  100% {
    opacity: 1;
    width: 247.82px;
    height: 247.82px;
  }
}
</style>
