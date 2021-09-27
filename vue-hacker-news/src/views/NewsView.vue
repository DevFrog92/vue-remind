<template>
  <div>
    <h1>News List</h1>
    <p
      v-for="item in this.$store.state.news"
      :key="item.id"
    >
      <a
        :href="item.url"
        target="_blank"
      >
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch("FETCH_NEWS")
  },
}
</script>
