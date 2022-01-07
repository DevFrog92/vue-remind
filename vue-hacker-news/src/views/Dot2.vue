<template>
  <div class="dot_2_wrapper">
    <div class="wave_wrapper">
      <div class="circle_wrapper">
        <img
          src="@/assets/animation_logo.svg"
          alt="logo image"
          class="logo"
        >
      </div>
    </div>
    <ul class="dot_list">
      <li
        v-for="dot in 3"
        :key="dot"
        class="dot"
        :style="`--i:${dot - 1}`"
      />
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.dot_2_wrapper {
  widows: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.dot_list {
  width: 500px;
  height: 500px;
  border: 1px solid;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #5B4CFF;
  margin-right: 20px;
  opacity: 0;
  /* animation-timing-function: cubic-bezier(0.62,-0.05, 0.12, 0.98); */
  animation: jump .3s calc(.3s*var(--i)) ease-in-out forwards;
}

.dot:first-child {
  opacity: 1;
}

.dot:last-child {
  margin-right: 0;
}

@keyframes jump {
  0% {
    transform: translateY(0) scale3d(1.1, 1, 1);
  }

  50% {
    opacity: 0.5;
    transform: translateY(-20px) scale3d(0.8, 1.1, 1);
  }

  70% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.circle_wrapper {
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: #5B4CFF;
  animation: circlePuls 1.2s infinite alternate ease-in-out;
}

.circle_wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: #5B4CFF;
  opacity: 0;
  opacity: 0.3;
  animation: wave 1.2s infinite ease-in-out;

}

.logo {
  width: 100%;
  height: 100%;
  transform: scale(0.9);
  animation: circlePulsReverse 1s infinite alternate ease-in-out;
}

@keyframes circlePuls {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes circlePulsReverse {
  0% {
    transform: scale(1.03);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.03);
  }
}

@keyframes wave {
  100% {
    opacity: 0;
    transform: scale(2.5);
  }
}
</style>
