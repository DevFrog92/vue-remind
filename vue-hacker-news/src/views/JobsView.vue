<template>
  <div>
    <h1>Jobs List</h1>
    <p
      v-for="item in this.$store.state.jobs"
      :key="item.id"
    >
      <a
        :href="item.url"
        target="_blank"
      >
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }},{{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS")
  },

}
</script>

<style>

</style>
