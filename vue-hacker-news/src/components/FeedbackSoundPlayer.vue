<template>
  <div class="sound_player_wrapper">
    <audio
      v-if="audioFileName === 'rich'"
      class="audio_elem"
      type="audio/mp3"
    />
    <audio
      v-if="audioFileName === 'rich'"
      class="audio_elem_coin"
      type="audio/mp3"
    />
    <audio
      v-if="audioFileName === 'lean'"
      class="audio_elem"
      type="audio/mp3"
    />
    <audio
      v-if="audioFileName === 'lean'"
      class="audio_elem_coin"
      type="audio/mp3"
    />
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
      audioElem2: null,
    }
  },
  mounted() {
    this.getAudioElem()
  },
  methods: {
    getAudioElem() {
      this.audioElem = document.querySelector(".audio_elem")
      this.audioElem2 = document.querySelector(".audio_elem_coin")
      this.playFeedbackSound(this.audioElem, this.audioElem2)
    },
    playFeedbackSound(audioElem, audioElem2) {
      audioElem.volume = 0.53
      audioElem2.volume = 0.55
      audioElem.play()
      audioElem2.play()
    },
  },
}
</script>
