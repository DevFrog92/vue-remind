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
}
</script>

<style scoped>

</style>
