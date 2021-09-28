<template>
  <div>
    <h1>Ask List</h1>
    <p
      v-for="item in this.$store.state.ask"
      :key="item.id"
    >
      <a
        :href="item.url"
        target="_blank"
      >
        <router-link :to="`/ask/${item.id}`">
          {{ item.title }}
        </router-link>
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters, } from "vuex"

export default {
  computed: {
    ...mapGetters({
      askItems: "fetchedAsk",
    }),
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
