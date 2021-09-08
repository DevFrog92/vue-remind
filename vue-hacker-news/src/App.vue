<template>
  <div id="app">
    <h1>this is main page</h1>
    <router-link to="/news">
      news
    </router-link> |
    <router-link to="/ask">
      ask
    </router-link> |
    <router-link to="/jobs">
      jobs
    </router-link>
    <router-view />
  </div>
</template>

<script>

export default {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
