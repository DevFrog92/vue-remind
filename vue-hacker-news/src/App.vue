<template>
  <div id="app">
    <tool-bar />
    <router-view />
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar"

export default {
  components: {
    ToolBar,
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      console.log("hello")
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
</style>
