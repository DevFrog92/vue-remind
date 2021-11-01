<template>
  <div class="event_test_view_wrapper" />
</template>

<script>
export default {
  created() {

  },
  methods: {
    keyUpHandler(e) {
      console.log(e)
    },
    addKeyPressUp() {
      window.addEventListener("keyup", this.keyUpHandler)
    },
  },
}
</script>

<style>

</style>
