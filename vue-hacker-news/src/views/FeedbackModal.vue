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
  methods: {
    onClick() {
      this.clickStatus = !this.clickStatus
    },
  },
}
</script>

<style>

</style>
