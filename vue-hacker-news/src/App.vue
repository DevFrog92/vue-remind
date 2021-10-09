<template>
  <div id="app">
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
