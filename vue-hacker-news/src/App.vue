<template>
  <ErrorBoundary id="app">
    <!-- <audio
      class="audio_elem"
      src="@/static/tower/disk_drop.mp3"
      type="audio/mp3"
    /> -->
    <!-- <button
      type="button"
      @click="occurError"
    >
      occur error
    </button> -->
    <!-- <div class="json_editor_wrapper">
      <v-jsoneditor
        v-model="json"
        :options="options"
        :plus="false"
        height="300px"
        width="200px"
        @error="onError"
      />
    </div> -->
    <!-- <button @click="submit">
      submit
    </button> -->
    <!-- <div class="login">
      <button @click="loginUser">
        login
      </button>
    </div>
    <div class="login">
      <button @click="loginUserAsync">
        login
      </button>
    </div> -->
    <!-- <button @click="play">
      play
    </button> -->
    <!-- <tool-bar />
    <transition name="page" />
    <Spinner :loading="loadingStatus" />-->
    <router-view />
  </ErrorBoundary>
</template>

<script>
// import VJsoneditor from "v-jsoneditor"
// import ToolBar from "@/components/ToolBar"
// import Spinner from "@/components/Spinner"
import bus from "./utils/bus.js"
import axios from "axios"

import { handleException, } from "./utils/handler"
export default {
  components: {
    // ToolBar,
    // Spinner,
    // VJsoneditor,
  },
  data() {
    return {
      loadingStatus: false,
      json: {
        "hello": "vue",
      },
      options: {
        mode: "code",
      },
      audioCtx: null,
      track: null,
      dataset: {playing: false, },
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        console.log(to.name, from.name)
      }
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner)
    bus.$on("end:spinner", this.endSpinner)
  },
  beforeDestroy() {
    // event bus에 event가 계속 쌓이기 때문에 해제를 해주어야 한다.
    bus.$off("start:spinner", this.startSpinner)
    bus.$off("end:spinner", this.endSpinner)
  },
  mounted() {
    // this.generateAudioElem()
  },
  methods: {
    occurError() {
      return Promise.reject("error")
    },
    generateAudioElem() {
      // if (this.audioCtx === null) {
      //   const AudioContext = window.AudioContext || window.webkitAudioContext

      //   this.audioCtx = new AudioContext()

      //   const audioElem = document.querySelector(".audio_elem")

      //   this.track = this.audioCtx.createMediaElementSource(audioElem)
      //   this.track.connect(this.audioCtx.destination)

      // }


      // const gainNode = this.audioCtx.createGain()

      // gainNode.gain.value = 4

      // const gainConnected = source.connect(gainNode)

      // gainConnected.connect(this.audioCtx.destination)
    },
    play() {
      const audioElem = document.querySelector(".audio_elem")

      if (this.audioCtx === null) {

        const AudioContext = window.AudioContext || window.webkitAudioContext

        this.audioCtx = new AudioContext()


        this.track = this.audioCtx.createMediaElementSource(audioElem)
        this.track.connect(this.audioCtx.destination)
      }
      // audioElem.play()
      // console.log("play")

      if (this.audioCtx.state === "suspended") {
        console.log("suspended")
        this.audioCtx.resume()
      }
      console.log("enter play function")
      console.log(this.dataset.playing)
      if (this.dataset.playing === false) {
        console.log("play")
        audioElem.play()
        this.dataset.playing = true
        // if track is playing pause it
      } else if (this.dataset.playing === true) {
        audioElem.pause()
        this.dataset.playing = false
      }


      audioElem.addEventListener("ended", () => {
        console.log("end")
        this.dataset.playing = false
      }, false)
      // let state = this.getAttribute("aria-checked") === "true" ? true : false

      // this.setAttribute( "aria-checked", state ? "false" : "true" )

    },
    onError() {
      console.log("error")
    },
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() {
      this.loadingStatus = false
    },
    submit() {
      console.log(this.json)
    },
    loginUser() {
      axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
          console.log(response.data)
          if (response.data.id === 1) {
            axios.get("https://jsonplaceholder.typicode.com/todos")
              .then(response => console.log(response))
              .catch(error => console.log(error))
          }
        })
        .catch(error => console.log(error))
    },
    async loginUserAsync() {
      // then, catch는 비동기 처리에 대해서만 예외처리를 수행하는 반면
      // try, catch는 일반적인 자바스트립트 문법 오류에 대해서도 예외처리가 가능하다.
      try {
        // 받아오는 시점에서 data에 값을 입력한다.
        // console을 실행안하는 것이 아니라, await가 동기 처리처럼 만들어 줄 뿐이다.
        const {data, } = await axios.get("https://jsonplaceholder.typicode.com/users/1")

        // data가 오기전에 먼저 실행된다.
        console.log("10")
        if (data.id === 1) {
          console.log(data)
          const list = await axios.get("https://jsonplaceholder.typicode.com/todos")

          console.log("11")
          console.log(list.data)
        }
      } catch (error) {
        // 상태 코드에 대한 예외처리가 가능하다.
        handleException(error)
        console.log(error)
      }
    },
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  color: #34495e;
  text-decoration: none;
  transition: color 0.4s;
}

a:hover{
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}


/* router transition */

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.json_editor_wrapper {
  width: 500px;
}
</style>
