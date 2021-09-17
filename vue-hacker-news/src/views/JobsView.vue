<template>
  <div>
    <h1>Jobs List</h1>
    <div
      v-for="job in jobs"
      :key="job.id"
    >
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { fetchJobsList, } from "../api/index"
export default {
  data() {
    return {
      jobs: null,
    }
  },
  created() {
    fetchJobsList()
      .then(response => this.jobs = response.data)
  },

}
</script>

<style>

</style>
