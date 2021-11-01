<template>
  <div class="event_test_view_wrapper">
    <h1>this is event test view</h1>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pressedKey: "",
      count: 0,
    }
  },
  created() {
    this.addKeyPressUp()
  },
  methods: {
    keyUpHandler(e) {
      if (e.key === "!") {
        this.count += 1
      }
    },
    addKeyPressUp() {
      window.addEventListener("keyup", this.keyUpHandler)
    },
  },
}
</script>

<style>

</style>
