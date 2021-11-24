<template>
  <div class="sound_player_wrapper">
    <audio
      src=""
      class="audio_elem"
    />
    Your browser does not support the audio tag.
  </div>
</template>

<script>
export default {
  props: {
    audioFileName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      audioElem: null,
    }
  },
  mounted() {
    this.audioElem = document.querySelector(".audio_elem")
    this.setAudioSource()
  },
  methods: {
    setAudioSource() {
      this.audioElem.src = require(`@/static/${this.audioFileName}`)
      this.audioElem.play()
    },
  },

}
</script>

<style>

</style>
