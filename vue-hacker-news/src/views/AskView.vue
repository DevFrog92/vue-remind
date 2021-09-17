<template>
  <div>
    <h1>Ask List</h1>
    <div
      v-for="ask in asks"
      :key="ask.id"
    >
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList, } from "../api"
export default {
  data() {
    return {
      asks: null,
    }
  },
  created() {
    fetchAskList()
      .then(response => this.asks = response.data)
      .catch(error => console.log(error))
  },
}
</script>

<style>

</style>
