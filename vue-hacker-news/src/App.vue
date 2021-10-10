<template>
  <div id="app">
    <div class="login">
      <button @click="loginUser">
        login
      </button>
    </div>
    <div class="login">
      <button @click="loginUserAsync">
        login
      </button>
    </div>
    <tool-bar />
    <transition name="page">
      <router-view />
    </transition>
    <Spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar"
import Spinner from "@/components/Spinner"
import bus from "./utils/bus.js"
import axios from "axios"

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
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
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() {
      this.loadingStatus = false
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
</style>
