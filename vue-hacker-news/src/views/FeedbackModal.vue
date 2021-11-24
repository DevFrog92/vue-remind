<template>
  <div class="feedback_modal_wrapper">
    <sound-player
      v-if="clickStatus"
      :audio-file-name="audioFileName"
    />
    <button @click="onClick">
      click
    </button>
  </div>
</template>

<script>
import SoundPlayer from "./SoundPlayer.vue"
export default {
  components: {
    SoundPlayer,
  },
  data() {
    return {
      audioFileName: "emoticon/rich_money.mp3",
      clickStatus: false,
    }
  },
  mounted() {
    this.addEventKeyPressUp()
  },
  methods: {
    onClick() {
      this.clickStatus = !this.clickStatus
    },
    addEventKeyPressUp() {
      window.addEventListener("keyup", this.keyHandler)
    },
    keyHandler(e) {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        this.onClick()
      }
    },
  },
}
</script>

<style>

</style>
