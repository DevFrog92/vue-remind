<template>
  <div>
    <h1>Ask List</h1>
    <div
      v-for="item in this.$store.state.ask"
      :key="item.id"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ask: [],
    }
  },
  created() {
    this.$store.dispatch("FETCH_ASK")
  },
  bofreMount() {

  },
  mounted() {
    // mounte에서 data요청을 하면 vue의 reactivity system 때문에 화면이 다시 그려지게 된다.
  },
}
</script>

<style scoped>

</style>
