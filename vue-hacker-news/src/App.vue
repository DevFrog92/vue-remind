<template>
  <div id="app">
    <tool-bar />
    <transition name="page">
      <router-view />
    </transition>
    <Spinner :loading="true" />
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar"
import Spinner from "@/components/Spinner"

export default {
  components: {
    ToolBar,
    Spinner,
  },
  created() {
  },
  methods: {
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
